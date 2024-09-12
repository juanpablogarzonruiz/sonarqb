
function cargar(resultado){
    let transformado = JSON.parse(resultado);
    let elemento = "<br>Mensaje de respuesta desde el backend: " + transformado.id;
    document.getElementById("rta").innerHTML = elemento;
}

function procesar(){

    const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        preventDefault();
        let raw = JSON.stringify({
            "nombres": document.getElementById("nombres").value
        });
        let requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };
        fetch("http://localhost:6500/estudiantes", requestOptions)
            .then((response) => response.text())
            .then((result) => cargar(result))
            .catch((error) => console.error(error));

/**
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "nombres": "Juan Pablo Garzón Ruiz"
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    fetch("http://localhost:6500/estudiantes", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
**/
}
