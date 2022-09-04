
window.onscroll = function(){
    scroll();
}



function scroll() {
    var btn = document.getElementById("btntop");

    if(document.documentElement.scrollTop > 200){
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}