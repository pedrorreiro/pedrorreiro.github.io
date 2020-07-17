window.onresize = function(){

    if(screen.width <= 700){
        document.getElementById('iframeCookie').src = "https://pedrorreiro.github.io/cookieClicker/index-mobile";
        console.log('menor');
    }
    
    else{
        document.getElementById('iframeCookie').src = "https://pedrorreiro.github.io/cookieClicker";
    }

    //document.getElementById('cookie').style.width = alturaCel/4 + 'px';

}


function mostraMenu(){

    if(document.getElementById('itensMenuDevice').style.display == "block"){
        document.getElementById('itensMenuDevice').style.display = "none";
    }

    else document.getElementById('itensMenuDevice').style.display = "block"

}

function tiraOverflow() {

    if(document.body.style.overflow == "hidden")
        document.body.style.overflow = "scroll";
    
    else document.body.style.overflow = "hidden"


}

function insta(){
    window.open('http://www.instagram.com/pedro_riqe', '_blank');
}

function facebook(){
    window.open('http://www.facebook.com/PedroHenAlves', '_blank');
}

function gitHub(){
    window.open('https://github.com/pedrorreiro', '_blank');
}

function revelaQr(){
    if(document.getElementById("qr").style.display != "inline-block")
    document.getElementById("qr").style.display = "inline-block";
    
    else document.getElementById("qr").style.display = "none";
    
}