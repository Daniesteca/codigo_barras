function lecturaCorrecta(codigoTexto, codigoObjeto) {
    // handle the scanned code as you like, for example:
    console.log(`Code matched = ${codigoTexto}`, codigoObjeto);
    Swal.fire(codigoTexto);
  }
  
  function errorLectura(error) {
    // handle scan failure, usually better to ignore and keep scanning.
    // for example:
  //   console.warn(`Code scan error = ${error}`);
   }



  // This method will trigger user permissions
Html5Qrcode.getCameras().then(camaras => {
 

  if (camaras && camaras.length) {
    let camaraId = camaras[0].id;
   
    let select = document.getElementById("listaCamaras");
    let html = ` <option value="" selected>Seleccione una camara</option>`;

    camaras.forEach(camara => {
      // console.log('camara :>> ',camara);
      html += ` <option value="${camara.id}">${camara.label}</option>`;
    });

    select.innerHTML = html;
    // .. use this to start scanning.



  }
}).catch(err => {
  // handle err
});


  const camaraSeleccionada =(elemento)=>{
    // console.log('elemento :>>', elemento);
    let idCamaraSeleccionada = elemento.value;
    console.log('idCamaraSeleccionada :>>', idCamaraSeleccionada);

        const html5QrCode = new Html5Qrcode(/* element id */ "reader");
        html5QrCode.start(
          idCamaraSeleccionada, 
          {
            fps: 10,    // Optional, frame per seconds for qr code scanning
            qrbox: { width: 250, height: 250 }  // Optional, if you want bounded box UI
          },lecturaCorrecta, errorLectura)

        .catch((err) => {
          // Start failed, handle it.
        });




  }
