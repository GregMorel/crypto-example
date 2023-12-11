var listeCryptos = [];

function loadCryptos()
{ 
    fetch("https://raw.githubusercontent.com/GregMorel/crypto-example/main/crypto-20231211.json")		
    .then(function(response) {	 
        return response.json(); 
    })
    .then(function(jsonData) {
        listeCryptos = jsonData.data;

        //On commence par trier les cryptomonnaies par ordre alphabétique du nom
        listeCryptos.sort((a, b) => a["name"].localeCompare(b["name"]));

        // /!\ ne pas nommer les variables "Crypto", c'est un mot-clé réservé
        for (cryp of listeCryptos){
            op = document.createElement("option");
            crypto_name = document.createTextNode(cryp["name"]);
            op.appendChild(crypto_name);
            document.getElementById("liste").appendChild(op);
        }
    });
} 

//Permet de recuper les info de la cryptomonnaie à partir de son index dans le tableau
//Remarque : on peut accéder à une propriété d'un objet de deux manières différentes :
//    - objet["propriété"] (ex. : crypto[i]["name"]) ou 
//    - objet.propriété (ex. : crypto[i].name)
function getInfo(index) {
    document.getElementById('nom').textContent = "Nom : " + listeCryptos[index].name; // listeCryptos[index]["name"]       
    document.getElementById('symbole').textContent = "Symbole : " + listeCryptos[index].symbol;
    document.getElementById('cours').textContent = "Cours : " + listeCryptos[index].quote.USD.price;
}





