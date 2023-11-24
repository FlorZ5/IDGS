var bandera=false;
function validar() {
     if (bandera){
    console.log("validación completa");
   }
}
function correctCaptcha(){
     console.log("captcha resuelto correctamente");
     bandera=true;
}
