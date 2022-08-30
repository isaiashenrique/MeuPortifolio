function vermais (){
    let pontos = document.getElementById("pontos");
    let mais = document.getElementById("mais");
    let btnvermais = document.getElementById("btnvermais");

    if(pontos.style.display==="none"){
        pontos.style.display="inline";
        mais.style.display="none";
        btnvermais.innerHTML="ver mais";
    }

    else{
        pontos.style.display="none";
        mais.style.display="flex";
        btnvermais.innerHTML="ver menos";
    }
}