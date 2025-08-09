//Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al hacer clic en "Adicionar".
let listaAmigos = [];

function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value;
    
    if(nombreAmigo == ""){
        alert("Ingresa un nombre porfavor")
    }else{
    listaAmigos.push(nombreAmigo);
    mostrarLista();
    document.getElementById("amigo").value = ""; //se limpia el input
    
    }
}

//mostrar lsita de amigos agregados 
function mostrarLista() {
    let listaHtml = document.getElementById("listaAmigos");
    listaHtml.innerHTML = "";

    if(listaAmigos.length === 0){
        listaHtml.innerHTML = "no has ingresado ningun nombre"
    }else{
            for(let amigo of listaAmigos){
                let li= document.createElement("li"); 
                li.textContent = amigo;  
                listaHtml.appendChild(li); 
            }
        }
}

//funcion para seleccionar un amigo aleatroio 
function sorteoAleatorio(){
    let resultadoHtml = document.getElementById("resultado");
    resultadoHtml.innerHTML = "";

    if(listaAmigos == 0){
        resultadoHtml.innerHTML = "tienes que agregar un nombre"
    }else{
        let numeroAleatroio = Math.floor(Math.random()* listaAmigos.length);
        let amigoSeleccionado = listaAmigos[numeroAleatroio];

        //mostrar en pantalla en nombre seleccionado
        let mostrarAmigo = document.createElement("li");
        mostrarAmigo.textContent = `El nombre elegido es!!! ${amigoSeleccionado}`;
        resultadoHtml.appendChild(mostrarAmigo);
        }
}

