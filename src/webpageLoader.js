import {loadHome} from "./home";
import { divCreator,paragraph} from "./constructor";
import { loadAbout } from "./about";
import { loadMenu } from "./menu";

function headerCreate(){

    const header = divCreator('header');
    header.appendChild(navBar())
    
    return header;

}

function navBar(){
    const navContainer = divCreator('navContainer');
    const homeNav = divCreator('navLinks','Home');
    homeNav.addEventListener('click',(e)=>{
        loadHome();
    })
    const menuNav = divCreator('navLinks','Menu');
    menuNav.addEventListener('click',(e)=>{
        loadMenu();
    })
    const aboutNav = divCreator('navLinks','About');
    aboutNav.addEventListener("click",(e)=>{
        loadAbout();
    })
    navContainer.appendChild(homeNav);
    navContainer.appendChild(menuNav);
    navContainer.appendChild(aboutNav);
    return navContainer;
}

function mainContainer(){
    const main = divCreator('container');
    main.setAttribute('id','main');
    return main;
}

function footer(){
    const footer = divCreator('footer');
    footer.appendChild(paragraph('Developed with ❤ by Deepak Gupta'));
    return footer;
}

function webpageLoad(){
    const content = document.getElementById("content");

    content.appendChild(headerCreate());
    content.appendChild(mainContainer());
    content.appendChild(footer());
    loadHome();
}
export{
    webpageLoad
}

