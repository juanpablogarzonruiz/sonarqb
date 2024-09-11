
function cargar(resultado){
    let transformado = JSON.parse(resultado);
    var elemento="";
    elemento = "<br>Mensaje de respuesta desde el backend: " + transformado.id;
    document.getElementById("rta").innerHTML = elemento;
}



function procesar(){
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    event.preventDefault();
    let raw = JSON.stringify({
      "nombres": document.getElementById("nombres").value
    });
    let requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
    fetch("http://localhost:6500/estudiantes/", requestOptions)
      .then((response) => response.text())
      .then((result) => cargar(result))
      //.then((result) => console.log(result))
      .catch((error) => console.error(error));
}
