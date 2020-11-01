//a variavel tambem pode ser acessada fora do bloco(scopo)
{
    {
        {
            {
                var sera = 'sera???'
                console.log(sera)
            }
        }
    }
}
console.log(sera)

function teste() {
    var local =123
    console.log(local)

}
teste()
//console.log(local) não conseque acessar a variavel fora do escopo da função
