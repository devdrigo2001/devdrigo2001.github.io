


menu_perfil = document.querySelector('.menu-perfil');
perfil_section = document.querySelector("#perfil");

menu_perfil.addEventListener('click',() =>{
    if(perfil_section.style.display ==="flex"){
        perfil_section.style.display = "none";
    }else{
        perfil_section.style.display = "flex";
    }


});

