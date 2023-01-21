import {paragraph,imgCreator,divCreator} from "./constructor";

 function aboutPage(){
    const container = divCreator('innerContainer');

    const aboutContainer = divCreator('aboutContainer');
    const welcome = divCreator('welcomeText');
    welcome.innerHTML = 'About Us';
    const hR1 = document.createElement("hr");
    const aboutText = paragraph('A contemporary restaurant with a mind to source local, seasonal ingredients, to create food inspired from the Chinese culture. We love rich intense flavours, fresh products, and spice, yet… we understand that we live in Jabalpur and people here also enjoy comfort food.','paragraph');

    container.appendChild(welcome);
    aboutContainer.appendChild(hR1);
    aboutContainer.appendChild(aboutText);
    container.appendChild(aboutContainer);
    
    return container;

 }

 function loadAbout(){
    const main = document.getElementById('main');
    main.innerHTML = '';
    main.appendChild(aboutPage());
 }
 export{
   loadAbout
 }