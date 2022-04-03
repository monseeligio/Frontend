const fetchPokemon= () =>{
    const pokename = document.getElementById("pokeName");
       let pokeName= pokename.value;//perdir el resultado de la url
    pokeName = pokeName.toLowerCase();
    const url=`https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status!="200"){
            console.log(res);
            pokeImage("img/pokebola.png")
            alert("No se encuentra ese pokemon")
        }
        else{
            return res.json();
        }
    }).then((data)=>{
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            let pokeNombre2=data.name;
            let tipo=data.types[0].type.name;
            let estadisticas=data.stats;
            let movimientos=data.moves
            pokeImage(pokeImg);
            pokeName2(pokeNombre2);
            poketype(tipo);
            pokeEstadisticas(estadisticas);
            movimientos2(movimientos);

        }
    });

}

const pokeImage = (url) =>{
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src=url;
}

const pokeName2 = (nombre) =>{
    document.getElementById("nombrepokemon").value = nombre;
}
const poketype = (tipo) =>{
    document.getElementById("poketipo").value = tipo;
}

const pokeEstadisticas = (estadisticas) =>{

    document.getElementById("estadistica1").value = estadisticas[0].base_stat;
    document.getElementById("estadistica2").value = estadisticas[1].base_stat;
    document.getElementById("estadistica3").value = estadisticas[2].base_stat;
    document.getElementById("estadistica4").value = estadisticas[3].base_stat;
    document.getElementById("estadistica5").value = estadisticas[4].base_stat;
    document.getElementById("estadistica6").value = estadisticas[5].base_stat;
}

   
    const movimientos2 =(movimientos)=>{
        for (var i = 0; i < movimientos.length; i++) {
        var node = document.createElement("LI");
        var textnode = document.createTextNode(movimientos[i].move.name);
        node.appendChild(textnode);
        document.getElementById("lista").appendChild(node);
        
    }
}

const limpiar=()=>{
    pokeImage("img/pokebola.png");
    document.getElementById("pokeName").value="";
    document.getElementById("nombrepokemon").value="";
    document.getElementById("poketipo").value="";
    document.getElementById("estadistica1").value = "";
    document.getElementById("estadistica2").value = "";
    document.getElementById("estadistica3").value = "";
    document.getElementById("estadistica4").value = "";
    document.getElementById("estadistica5").value = "";
    document.getElementById("estadistica6").value = "";
    document.getElementById("lista").innerHTML = '';
    
}







