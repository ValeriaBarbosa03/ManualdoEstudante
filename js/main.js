$('.slider-principal').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1
});

$('.one-time').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000
});

//**Função do relógio **//     
function Relogio(){
    var data = new Date();
    var horas= data.getHours();
    var min = data.getMinutes();
    var seg= data.getSeconds();
    
    if(horas < 10){
        horas="0"+horas;
    }
    if(min < 10){
        min="0"+min;
    }
    if(seg < 10){
        seg="0"+seg;
    }
    var  tempo_total = horas + ":" + min + ":" + seg;
    var tempo = window.document.getElementById('div_relogio');
    tempo.innerHTML = tempo_total;
}
setInterval(Relogio, 1000);