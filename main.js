//service worker
if('serviceWorker'in navigator){
  console.log('puedes usar el SW en el navegador');
  navigator.serviceWorker.register('./sw.js')
  .then(res=>console.log('cargado correctamente',res))
  .catch(err=> console.log('no se pudo registrar el SW'));
}else {
  console.log('no soporta SW');
}

//scroll suavizado
$(document).ready(function(){
  $("#menu a").click(function(e){
    e.preventDefault();
    $("html , body").animate({
      scrollTop: $($(this).attr('href')).offset().top
      });
    return false;
  });
});