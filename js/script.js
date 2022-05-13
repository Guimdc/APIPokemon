let form = document.querySelector("form");
let p = document.querySelector("#ex");
form.addEventListener("submit", e =>{
    e.preventDefault();
    let namePokemon = (document.querySelector("input").value).toLowerCase();
    namePokemon=namePokemon.replace(' ','-');
    fetch("https://pokeapi.co/api/v2/pokemon/"+namePokemon).then(
        function(infos){
            return infos.json()
        }
    ).then(
        function(res){
            let div1 = document.querySelector("#pokemons");
            let div1u1 = document.createElement("div");
            div1u1.setAttribute("class", "card");
            let div1u1u1 = document.createElement("div");
            div1u1u1.setAttribute("class", "type");
            let div1u1u1u1 = document.createElement("div");
            div1u1u1u1.setAttribute("class", "type2");
            let img1 = document.createElement("img");
            img1.setAttribute("src", "./images/type-icon/"+res.types[0].type.name+".png");
            let img2 = document.createElement("img");
            if(res.types.length==2){
                img2.setAttribute("src", "./images/type-icon/"+res.types[1].type.name+".png");
            }
            let img3 = document.createElement("img");
            img3.setAttribute("class", "imgPokemon");
            img3.setAttribute("src", res.sprites.front_default);
            let div1u1u2 = document.createElement("div");
            div1u1u2.setAttribute("class", "text");
            let p1 = document.createElement("p");
            p1.setAttribute("class", "name");
            let p2 = document.createElement("p");
            p2.setAttribute("class", "number")
            let nome = res.name.replace('-',' ');
            p1.append(
                document.createTextNode(maius(nome))
            )
            p2.append(
                document.createTextNode("Nº "+res.id)
            )
            div1.append(div1u1);
            div1u1.append(div1u1u1);
            div1u1.append(img3)
            div1u1.append(div1u1u2);
            div1u1u1.append(div1u1u1u1);
            div1u1u1u1.append(img1);
            if(res.types.length==2){
                div1u1u1u1.append(img2);
            }
            div1u1u2.append(p1);
            div1u1u2.append(p2);
        }
    ).catch(() =>{
        p.textContent = "Nome Inválido";
    })
    p.textContent = "Ex: Bulbasaur, Charmander, Squirtle, Pikachu...";
	form.reset();
    return;
})

function maius(nome){
	var mySentence = nome;
    var words = mySentence.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    nome=words.join(" ");
    return nome;
}
