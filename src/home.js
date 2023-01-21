import {paragraph,imgCreator,divCreator} from "./constructor";



function homeCreate(){
    const container = divCreator('innerContainer');

    const welcome = divCreator('welcomeText');
    welcome.innerHTML = 'Welcome';
    container.appendChild(welcome);

    const title = divCreator('titleText');
    title.innerText = 'CHOPST!CKS';
    container.appendChild(title);
    
    const hR = document.createElement("hr");
    container.appendChild(hR);
    container.appendChild(paragraph('Best Chinese cuisine in the city','paragraph'));

    return container;
}

function loadHome(){
    const main = document.getElementById('main');
    main.innerHTML = '';
    main.appendChild(homeCreate());
 }

export {
    loadHome
};
