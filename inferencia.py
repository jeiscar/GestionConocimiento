#!/bin/bash

# Script completo de SLA con salida a archivo
REPORT_FILE="sla_report_$(date +%Y%m%d_%H%M%S).txt"

echo "=== Generando reporte SLA ===" | tee $REPORT_FILE
echo "Archivo de salida: $REPORT_FILE" | tee -a $REPORT_FILE
echo "" | tee -a $REPORT_FILE

# Configurar fechas (últimos 7 días)
END_DATE=$(date -u +"%Y-%m-%dT%H:%M:%SZ")
START_DATE=$(date -u -d "7 days ago" +"%Y-%m-%dT%H:%M:%SZ")

echo "=== AWS Infrastructure SLA Report ===" | tee -a $REPORT_FILE
echo "Período: $START_DATE a $END_DATE" | tee -a $REPORT_FILE
echo "Generado: $(date)" | tee -a $REPORT_FILE
echo "=========================================" | tee -a $REPORT_FILE

# Obtener lista de instancias EC2 automáticamente
echo "Obteniendo lista de instancias EC2..." | tee -a $REPORT_FILE
INSTANCES=$(aws ec2 describe-instances --query 'Reservations[*].Instances[?State.Name==`running`].InstanceId' --output text)

if [ -z "$INSTANCES" ]; then
    echo "No se encontraron instancias EC2 en ejecución" | tee -a $REPORT_FILE
else
    echo "Instancias encontradas: $INSTANCES" | tee -a $REPORT_FILE
    echo "" | tee -a $REPORT_FILE
    
    # Procesar cada instancia
    for INSTANCE_ID in $INSTANCES; do
        echo "=== EC2 Instance: $INSTANCE_ID ===" | tee -a $REPORT_FILE
        
        # StatusCheckFailed
        echo "Status Check Failed:" | tee -a $REPORT_FILE
        aws cloudwatch get-metric-statistics \
          --namespace AWS/EC2 \
          --metric-name StatusCheckFailed \
          --dimensions Name=InstanceId,Value=$INSTANCE_ID \
          --start-time $START_DATE \
          --end-time $END_DATE \
          --period 600 \
          --statistics Sum \
          --output table 2>/dev/null | tee -a $REPORT_FILE
        
        echo "" | tee -a $REPORT_FILE
        
        # CPU Utilization
        echo "CPU Utilization:" | tee -a $REPORT_FILE
        aws cloudwatch get-metric-statistics \
          --namespace AWS/EC2 \
          --metric-name CPUUtilization \
          --dimensions Name=InstanceId,Value=$INSTANCE_ID \
          --start-time $START_DATE \
          --end-time $END_DATE \
          --period 600 \
          --statistics Average \
          --output table 2>/dev/null | tee -a $REPORT_FILE
        
        echo "" | tee -a $REPORT_FILE
    done
fi

# Obtener RDS instances automáticamente
echo "=========================================" | tee -a $REPORT_FILE
echo "Obteniendo lista de instancias RDS..." | tee -a $REPORT_FILE
RDS_INSTANCES=$(aws rds describe-db-instances --query 'DBInstances[?DBInstanceStatus==`available`].DBInstanceIdentifier' --output text)

if [ -z "$RDS_INSTANCES" ]; then
    echo "No se encontraron instancias RDS disponibles" | tee -a $REPORT_FILE
else
    echo "Instancias RDS encontradas: $RDS_INSTANCES" | tee -a $REPORT_FILE
    echo "" | tee -a $REPORT_FILE
    
    # Procesar cada instancia RDS
    for DB_ID in $RDS_INSTANCES; do
        echo "=== RDS Instance: $DB_ID ===" | tee -a $REPORT_FILE
        
        # Database Connections
        echo "Database Connections:" | tee -a $REPORT_FILE
        aws cloudwatch get-metric-statistics \
          --namespace AWS/RDS \
          --metric-name DatabaseConnections \
          --dimensions Name=DBInstanceIdentifier,Value=$DB_ID \
          --start-time $START_DATE \
          --end-time $END_DATE \
          --period 600 \
          --statistics Average \
          --output table 2>/dev/null | tee -a $REPORT_FILE
        
        echo "" | tee -a $REPORT_FILE
        
        # CPU Utilization
        echo "RDS CPU Utilization:" | tee -a $REPORT_FILE
        aws cloudwatch get-metric-statistics \
          --namespace AWS/RDS \
          --metric-name CPUUtilization \
          --dimensions Name=DBInstanceIdentifier,Value=$DB_ID \
          --start-time $START_DATE \
          --end-time $END_DATE \
          --period 600 \
          --statistics Average \
          --output table 2>/dev/null | tee -a $REPORT_FILE
        
        echo "" | tee -a $REPORT_FILE
    done
fi

# Load Balancers
echo "=========================================" | tee -a $REPORT_FILE
echo "Obteniendo Load Balancers..." | tee -a $REPORT_FILE
LOAD_BALANCERS=$(aws elbv2 describe-load-balancers --query 'LoadBalancers[?State.Code==`active`].LoadBalancerArn' --output text)

if [ -z "$LOAD_BALANCERS" ]; then
    echo "No se encontraron Load Balancers activos" | tee -a $REPORT_FILE
else
    for LB_ARN in $LOAD_BALANCERS; do
        LB_NAME=$(echo $LB_ARN | cut -d'/' -f2-4)
        echo "=== Load Balancer: $LB_NAME ===" | tee -a $REPORT_FILE
        
        # Target Health
        echo "Healthy Host Count:" | tee -a $REPORT_FILE
        aws cloudwatch get-metric-statistics \
          --namespace AWS/ApplicationELB \
          --metric-name HealthyHostCount \
          --dimensions Name=LoadBalancer,Value=$LB_NAME \
          --start-time $START_DATE \
          --end-time $END_DATE \
          --period 600 \
          --statistics Average \
          --output table 2>/dev/null | tee -a $REPORT_FILE
        
        echo "" | tee -a $REPORT_FILE
    done
fi

echo "=========================================" | tee -a $REPORT_FILE
echo "Reporte completado: $REPORT_FILE" | tee -a $REPORT_FILE
echo "Para ver el reporte: cat $REPORT_FILE"
