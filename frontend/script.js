
function cargar(resultado){
    let transformado = JSON.parse(resultado);
    let elemento = "<br>Mensaje de respuesta desde el backend: " + transformado.id;
    document.getElementById("rta").innerHTML = elemento;
}

function procesar(){
/**
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        //preventDefault();
        let dato = ""+ document.getElementById("enombres").value;
        console.log("el datos es de " + dato);
        let raw = JSON.stringify({
            "nombres": dato
        });
        console.log ("lo que se envia es de "+ raw.toString());
        let requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };
        console.log ("lo que se envia es de "+ requestOptions);
        fetch("http://localhost:6500/estudiantes", requestOptions)
            .then((response) => response.text())
            .then((result) => cargar(result))
            .catch((error) => console.error(error));
**/

    event.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let dato = ""+ document.getElementById("losnombres").value;
    console.log("el datos es de "+dato);


    const raw = JSON.stringify({
        //"nombres": "Juan Pablo Garzón Ruiz"
        "nombres": dato
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    fetch("http://localhost:6500/estudiantes", requestOptions)
        .then((response) => response.text())
        .then((result) => cargar(result))
        //.then((result) => console.log(result))
        .catch((error) => console.error(error));

}
