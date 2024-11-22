

//Perfil section
menu_perfil = document.querySelector('.menu-perfil');
perfil_section = document.querySelector("#perfil");

menu_perfil.addEventListener('click',() =>{
    if(perfil_section.style.display ==="flex"){
        perfil_section.style.display = "none";
    }else{
        perfil_section.style.display = "flex";
    }


});

//barra animada do perfil
let valor_barra = document.querySelector('.valor_barra');
let barra = document.querySelector('.barra');

let valor_atual_barra = 0;
let valor_final_barra = 23;

let progresso  = setInterval(()=>{
valor_atual_barra++;
valor_barra.textContent = `${valor_atual_barra}`;
barra.style.background = `conic-gradient(rgb(78,236,20) ${valor_atual_barra * 15}deg, rgb(230,224,224) 0deg)`;
if(valor_atual_barra == valor_final_barra){
    clearInterval(progresso);
}
},500);



//lightswitch
let darkmode = localStorage.getItem('dark_mode');

const lightswitch = document.getElementById('light_switch');

const enableDarkmode = () =>{
    document.body.classList.add('dark_mode');
    localStorage.setItem('dark_mode', 'active');
}

const disableDarkmode = () =>{
    document.body.classList.remove('dark_mode');
    localStorage.setItem('dark_mode', 'null');
}

if(darkmode === "active") enableDarkmode()


lightswitch.addEventListener("click", ()=>{
    darkmode =localStorage.getItem('dark_mode');

    darkmode != "active" ? enableDarkmode() : disableDarkmode();
});