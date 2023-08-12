llamadaDemo();

/*llamada*/
function llamadaDemo() {
    //alert("Hola con JavaScript");
    /*Creating an HTML table dynamically
   https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces#creating_an_html_table_dynamically*/
    //uso de Fetch https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch
    var url = "https://movie.azurewebsites.net/api/cartelera?title=&ubication=";


    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            var divPeli = document.getElementById('divPeli');
            divPeli.innerHTML = '';

            if (data.length > 0) {
                //alert(data.status );
                for (let index = 0; index < data.length; index++) {

                    const div = document.createElement("div");
                    div.className = "col-md-6";

                    const div2 = document.createElement("div");
                    div2.className = "row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative";

                    /*Info Peli*/
                    const div3 = document.createElement("div");
                    div3.className = "col p-4 d-flex flex-column position-static";

                    const type = document.createElement("strong");
                    type.className = "d-inline-block mb-2 text-primary";
                    type.innerText = data[index].Type;

                    const title = document.createElement("h3");
                    title.className = "mb-0";
                    title.innerText = data[index].Title;

                    const anio = document.createElement("div");
                    anio.className = "mb-1 text-body-secondary";
                    anio.innerText = data[index].Year;

                    const description = document.createElement("p");
                    description.className = "card-text mb-auto";
                    description.innerText = data[index].description.substring(0, 150) + " ...";

                    const ubitacion = document.createElement("a");
                    ubitacion.className = "stretched-link";
                    ubitacion.innerText = data[index].Ubication;


                    div3.appendChild(type);
                    div3.appendChild(title);
                    div3.appendChild(anio);
                    div3.appendChild(description);
                    div3.appendChild(ubitacion);

                    const div4 = document.createElement("div");
                    div4.className = "col-auto d-none d-lg-block";
                    div4.innerHTML = "<img alt=\"Tren bala\" src=\"" + data[index].Poster + "\" width=\"200\" height=\"250\">";

                    div2.appendChild(div3);
                    div2.appendChild(div4);
                    div.appendChild(div2);
                    divPeli.appendChild(div);
                }
            }

        });

}

function LLamada1() {
    //alert('llamada1');
    var txtPeli = document.getElementById('txtPeli');
    var cmbUbication = document.getElementById('cmbUbication');

    //alert(txtPeli.value);
    //alert(cmbUbication.value);
    var url = "";
    if (txtPeli != null && cmbUbication != null) {
        url = "https://movie.azurewebsites.net/api/cartelera?title=" + txtPeli.value + "&ubication=" + (cmbUbication.value == "Mostrar Todos" ? "" : cmbUbication.value);
    }
    else {
        url = "https://movie.azurewebsites.net/api/cartelera?title=&ubication=";
    }

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            var divPeli = document.getElementById('divPeli');
            divPeli.innerHTML = '';

            if (data.length > 0) {
                //alert(data.status );
                for (let index = 0; index < data.length; index++) {

                    const div = document.createElement("div");
                    div.className = "col-md-6";

                    const div2 = document.createElement("div");
                    div2.className = "row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative";

                    /*Info Peli*/
                    const div3 = document.createElement("div");
                    div3.className = "col p-4 d-flex flex-column position-static";

                    const type = document.createElement("strong");
                    type.className = "d-inline-block mb-2 text-primary";
                    type.innerText = data[index].Type;

                    const title = document.createElement("h3");
                    title.className = "mb-0";
                    title.innerText = data[index].Title;

                    const anio = document.createElement("div");
                    anio.className = "mb-1 text-body-secondary";
                    anio.innerText = data[index].Year;

                    const description = document.createElement("p");
                    description.className = "card-text mb-auto";
                    description.innerText = data[index].description.substring(0, 150) + " ...";

                    const ubitacion = document.createElement("a");
                    ubitacion.className = "stretched-link";
                    ubitacion.innerText = data[index].Ubication;


                    div3.appendChild(type);
                    div3.appendChild(title);
                    div3.appendChild(anio);
                    div3.appendChild(description);
                    div3.appendChild(ubitacion);

                    const div4 = document.createElement("div");
                    div4.className = "col-auto d-none d-lg-block";
                    div4.innerHTML = "<img alt=\"Tren bala\" src=\"" + data[index].Poster + "\" width=\"200\" height=\"250\">";

                    div2.appendChild(div3);
                    div2.appendChild(div4);
                    div.appendChild(div2);
                    divPeli.appendChild(div);
                }
            }

        });



}

async function guardarpeliculas() {


    url3 = "https://movie.azurewebsites.net/api/cartelera";

    var idmovie = document.getElementById('idmovie').value;
    var idTytle = document.getElementById('idTytle').value;
    var idYear = document.getElementById('idYear').value;
    var idType = document.getElementById('idType').value;
    var idPoster = document.getElementById('idPoster').value;
    var idDescription = document.getElementById('idDescription').value;
    var idUbication = document.getElementById('idUbication').value;
    var idEstado = parseInt(document.getElementById('idEstado').value, 10);

    var data18 = {


        "imdbID": idmovie,
        "Title": idTytle,
        "Year": idYear,
        "Type": idType,
        "Poster": idPoster,
        "description": idDescription,
        "Ubication": idUbication,
        "Estado": idEstado


    }

    try {
        const response = await fetch(url3, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data18)
        });

        if (response.ok) {

            const jsonResponse = await response.json();
            // Hacer algo con la respuesta, como mostrar un mensaje de éxito
            console.log('INFORMACIÓN GUARDADA CORRECTAMENTE');
            console.log(jsonResponse);  // Aquí puedes ver la respuesta completa
            Swal.fire(
                'Completado!',
                'Guardado correctamete!',
                'success'
            )
            document.getElementById('idmovie').value = '';
            llamadaDemo();
        } else {
            // Manejar el caso en que la respuesta no es ok
            alert('Error en la respuesta: no se pudo guardar', response.statusText);
            console.log("PUNTO A");

        }
    } catch (error) {
        alert('Error en el envío de datos:' + error.message);
        console.log("PUNTO B");

    }
}




function Eliminar() {
    alert('ELIMINADO');


    var idpeli = document.getElementById("IDmovie");

    idpeli.disabled = true;
    url = "https://movie.azurewebsites.net/api/cartelera?imdbID=" + idpeli.value + "";
    var options = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(idpeli)
    };

    fetch(url, options)
        .then(response => response.json())
        .then(data => {

            alert("Codigo http: " + data.codError + " Mensaje: " + data.msgRespuesta);
            llamadaDemo();
            document.getElementById('IDmovie').value = '';
        })
        .catch(error => {
            console.error('Error de red', error);
        })

}



async function Actualizar() {

    var idmovie = document.getElementById('uidmovie').value;
    var idTytle = document.getElementById('uidTytle').value;
    var idYear = document.getElementById('uidYear').value;
    var idType = document.getElementById('uidType').value;
    var idPoster = document.getElementById('uidPoster').value;
    var idDescription = document.getElementById('uidDescription').value;
    var idUbication = document.getElementById('uidUbication').value;
    var idEstado = parseInt(document.getElementById('uidEstado').value, 10);


// Datos que deseas enviar en el cuerpo de la solicitud
const data = {
    "imdbID": idmovie,
    "Title": idTytle,
    "Year": idYear,
    "Type": idType,
    "Poster": idPoster,
    "description": idDescription,
    "Ubication": idUbication,
    "Estado": idEstado

};

// URL en Azure donde deseas hacer el PUT
 azureUrl = 'https://movie.azurewebsites.net/api/cartelera?imdbID='+idmovie+'';


// Opciones de la solicitud
var requestOptions = {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json' // Indica que estás enviando datos en formato JSON
  },
  body: JSON.stringify(data) // Convierte el objeto en formato JSON
};

// Realiza la solicitud utilizando fetch()
fetch(azureUrl, requestOptions)
  .then(response => response.json())
  .then(data => {
    Swal.fire(
        'Completado!',
        'Guardado correctamete!',
        'success' 
    )
    console.log('Respuesta del servidor:', data);

  })
  .catch(error => {
    console.error('Error:', error);
  });

}

