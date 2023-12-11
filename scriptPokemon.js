function loadPokemon() {
    for(let i = 1; i<=100; i++) {
        fetch("https://pokeapi.co/api/v2/pokemon-species/" + i)
        .then(response => response.json())
        .then(function(json) {
            
            for(lang of json.names) {
                if(lang.language.name == "fr") {
                    myP = document.createElement("p")
                    contenu = document.createTextNode(lang.name)
                    myP.appendChild(contenu)
                    document.body.appendChild(myP)
                }
            }
            
        })
    }   
}