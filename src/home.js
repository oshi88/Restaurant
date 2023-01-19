import {paragraph,imgCreator,divCreator} from "./constructor";


function headerCreate(content){
    const bgImage = imgCreator('backgroundImg','images/bg_rest-v2.jpg');
    content.appendChild(bgImage);

    const header = divCreator('header');
    content.appendChild(header);

    navBar(header);
}

function navBar(header){
    const navContainer = divCreator('navContainer');
    const homeNav = divCreator('navLinks','Home');
    const menuNav = divCreator('navLinks','Menu');
    const aboutNav = divCreator('navLinks','About');
    navContainer.appendChild(homeNav);
    navContainer.appendChild(menuNav);
    navContainer.appendChild(aboutNav);
    header.appendChild(navContainer);
    
}

function homeCreate(content){
    const container = divCreator('container');

    const welcome = divCreator('welcomeText');
    welcome.innerHTML = 'Welcome';
    container.appendChild(welcome);

    const title = divCreator('titleText');
    title.innerText = 'CHOPST!CKS';
    container.appendChild(title);
    
    const hR = document.createElement("hr");
    container.appendChild(hR);
    container.appendChild(paragraph('Best Chinese cuisine in the city','paragraph'));

    content.appendChild(container);
}

function footer(content){
    const footer = divCreator('footer');
    footer.appendChild(paragraph('Developed with ❤ by Deepak Gupta'));
    content.appendChild(footer);
}

export {
    headerCreate,homeCreate,footer
};
