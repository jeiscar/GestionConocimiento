// methodology.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-methodology',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="methodology-content">
      <div class="header">
        <h2>Metodología de Análisis Criptográfico</h2>
        <p class="subtitle">
          Transparencia en nuestro proceso de evaluación de activos digitales
        </p>
      </div>

      <div class="methodology-body">
        <!-- Columna 1 -->
        <div class="methodology-column">
          <div class="methodology-section">
            <h3>Fuentes de Datos</h3>
            <ul>
              <li>
                <strong>APIs Oficiales:</strong> Binance, Coinbase, Kraken
              </li>
              <li>
                <strong>Datos en Tiempo Real:</strong> Precios, volumen, ordenes
              </li>
              <li>
                <strong>Indicadores Macroeconómicos:</strong> FED, BCE,
                inflación
              </li>
              <li>
                <strong>Noticias Financieras:</strong> Reuters, Bloomberg,
                CoinDesk
              </li>
              <li>
                <strong>Datos On-Chain:</strong> Transacciones, wallets, minería
              </li>
            </ul>
          </div>

          <div class="methodology-section">
            <h3>Indicadores Técnicos</h3>
            <ul>
              <li>
                <strong>Precio:</strong> Actual, histórico, máximos y mínimos
              </li>
              <li><strong>Volumen:</strong> Trading 24h, liquidez</li>
              <li><strong>Volatilidad:</strong> Desviación estándar, Beta</li>
              <li><strong>RSI:</strong> Momentum sobrecompra/sobreventa</li>
              <li><strong>MACD:</strong> Tendencia y momentum</li>
              <li><strong>Medias Móviles:</strong> 50, 100 y 200 días</li>
            </ul>
          </div>
        </div>

        <!-- Columna 2 -->
        <div class="methodology-column">
          <div class="methodology-section">
            <h3>Análisis Fundamental</h3>
            <ul>
              <li><strong>Market Cap:</strong> Capitalización de mercado</li>
              <li>
                <strong>Circulating Supply:</strong> Suministro en circulación
              </li>
              <li><strong>TVL:</strong> Total Value Locked (DeFi)</li>
              <li><strong>Desarrollo:</strong> Commits GitHub, actividad</li>
              <li><strong>Adopción:</strong> Usuarios, transacciones</li>
              <li><strong>Competencia:</strong> Análisis comparativo</li>
            </ul>
          </div>

          <div class="methodology-section">
            <h3>Frecuencia de Análisis</h3>
            <ul>
              <li><strong>Tiempo Real:</strong> Precios y volumen</li>
              <li><strong>Diario:</strong> Análisis técnico completo</li>
              <li><strong>Semanal:</strong> Reportes de performance</li>
              <li><strong>Mensual:</strong> Reevaluación fundamental</li>
              <li><strong>Trimestral:</strong> Actualización metodológica</li>
            </ul>
          </div>
        </div>

        <!-- Columna 3 -->
        <div class="methodology-column">
          <div class="methodology-section">
            <h3>Criterios de Evaluación</h3>
            <ul>
              <li>
                <strong>Transparencia:</strong> Team, roadmap, financiación
              </li>
              <li><strong>Tecnología:</strong> Innovación, escalabilidad</li>
              <li><strong>Comunidad:</strong> Engagement, redes sociales</li>
              <li><strong>Regulación:</strong> Compliance, licencias</li>
              <li><strong>Riesgo:</strong> Volatilidad, concentración</li>
              <li><strong>Potencial:</strong> Crecimiento, adopción futura</li>
            </ul>
          </div>

          <div class="methodology-section">
            <h3>Gestión de Riesgos</h3>
            <ul>
              <li><strong>Diversificación:</strong> Exposición por asset</li>
              <li><strong>Stop-Loss:</strong> Niveles de protección</li>
              <li><strong>Correlación:</strong> Mercados tradicionales</li>
              <li><strong>Liquidez:</strong> Capacidad de entrada/salida</li>
              <li><strong>Escenarios:</strong> Best case / Worst case</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="disclaimer">
        <p>
          Esta información es con fines educativos e informativos. No constituye
          asesoramiento financiero. Las criptomonedas son activos de alto
          riesgo. Realice su propia investigación antes de invertir.
        </p>
      </div>
    </div>
  `,
  styles: [
    `
      .methodology-content {
        padding: 30px;
        background: white;
        border-radius: 12px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        margin: 20px;
      }

      .header {
        text-align: center;
        margin-bottom: 40px;
        padding-bottom: 20px;
        border-bottom: 2px solid #f0f0f0;
      }

      .header h2 {
        color: #2c3e50;
        font-size: 2.5rem;
        margin: 0 0 10px 0;
        font-weight: 700;
      }

      .subtitle {
        color: #7f8c8d;
        font-size: 1.2rem;
        margin: 0;
        font-style: italic;
      }

      .methodology-body {
        display: flex;
        flex-direction: row;
        gap: 25px;
        justify-content: space-evenly;
        margin-bottom: 30px;
      }

      .methodology-column {
        display: flex;
        flex-direction: column;
        gap: 25px;
      }

      .methodology-section {
        background: #f2f4f5ff;
        padding: 25px;
        border-radius: 10px;
        border-left: 5px solid #284be2ff;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        transition: transform 0.2s ease;
      }

      .methodology-section:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }

      .methodology-section h3 {
        margin-bottom: 15px;
        color: #121213ff;
        font-size: 1.3rem;
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .methodology-section ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
      }

      .methodology-section li {
        margin-bottom: 12px;
        padding: 8px 0;
        border-bottom: 1px solid #e9ecef;
        line-height: 1.5;
        color: #111213ff;
      }

      .methodology-section li:last-child {
        border-bottom: none;
        margin-bottom: 0;
      }

      .methodology-section strong {
        color: #1d2329ff;
      }

      .disclaimer {
        background: #fff3cd;
        border: 1px solid #ffeaa7;
        border-radius: 8px;
        padding: 20px;
        margin-top: 30px;
      }

      .disclaimer h4 {
        color: #856404;
        margin: 0 0 10px 0;
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .disclaimer p {
        color: #856404;
        margin: 0;
        line-height: 1.6;
      }
      @media (max-width: 1200px) {
        .methodology-body {
          flex-direction: column;
        }

        .methodology-content {
          margin: 10px;
          padding: 20px;
        }

        .header h2 {
          font-size: 2rem;
        }
      }
    `,
  ],
})
export class MethodologyComponent {}
