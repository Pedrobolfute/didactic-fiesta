global="Pedro"

function teste_local {
    local global="Henrique" ## Aki
    echo $global
}
teste_local

echo $global