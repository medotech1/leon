let up = document.getElementById('up');
window.onload = function(){
    if(scrollY < 500){
        up.style.display = 'none';
    }else{
        up.style.display = 'flex';
    }
}

window.onscroll = function(){
    if(scrollY < 500){
        up.style.display = 'none';
    }else{
        up.style.display = 'flex';
    }
}
up.onclick = function(){
    scroll(0, 0);
}