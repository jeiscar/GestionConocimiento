package git.policies.versioning

# Política: solo se permite merge de dev → qr y de qa → prod

default allow = false

# ✅ Permitido: merge de dev hacia qr
allow {
    input.source_branch == "dev"
    input.target_branch == "qr"
}

# ✅ Permitido: merge de qa hacia prod
allow {
    input.source_branch == "qa"
    input.target_branch == "prod"
}

# ❌ Mensaje de error si no cumple la política
deny[msg] {
    not allow
    msg := sprintf("Merge from '%s' to '%s' is not allowed.", [input.source_branch, input.target_branch])
}
