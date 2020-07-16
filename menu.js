$(document).ready(main);

var contador =1;

function main(){
    $(".menu-bar-icon").click(function(){

       // $(".menu-header").toggle();
        if(contador == 1){
            $(".menu-header").animate({

                left:"0"
            })
            contador=0;
        }
        else{
            contador=1;
            $(".menu-header").animate({

                left:"-100%"
            })
        }

    })
}