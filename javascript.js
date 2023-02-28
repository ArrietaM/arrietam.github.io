// hay que poner los botones interactivos
console.log("hola mundo")

$(document).ready(function() {
    $('.toggle').click(function(){

            var collapse_content_selector = $(this).attr('href');                   

            var toggle_switch = $(this);
            $(collapse_content_selector).toggle(function(){
                    if($(this).css('display')=='none'){
                        toggle_switch.html('Mostrar');
                    }else{
                        toggle_switch.html('Ocultar');
                    }
            });
    });

});