import {homeCreate} from "./home";
import { divCreator,paragraph} from "./constructor";

function headerCreate(content){


    const header = divCreator('header');
    header.appendChild(navBar())
    content.appendChild(header);

}

function navBar(){
    const navContainer = divCreator('navContainer');
    const homeNav = divCreator('navLinks','Home');
    const menuNav = divCreator('navLinks','Menu');
    const aboutNav = divCreator('navLinks','About');
    navContainer.appendChild(homeNav);
    navContainer.appendChild(menuNav);
    navContainer.appendChild(aboutNav);
    return navContainer;
}

function webpageLoad(){
    const content = document.getElementById("content");

    headerCreate(content);
    homeCreate(content);
    footer(content);
}

function footer(content){
    const footer = divCreator('footer');
    footer.appendChild(paragraph('Developed with ❤ by Deepak Gupta'));
    content.appendChild(footer);
}


export{
    webpageLoad
}

