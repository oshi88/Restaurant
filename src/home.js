import {paragraph,imgCreator,divCreator} from "./constructor";



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



export {
    homeCreate
};
