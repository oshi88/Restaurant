
import { paragraph,imgCreator,divCreator,itemCreator } from "./constructor";

function menuCreate(){
    const container = divCreator('innerContainer');
    
    const welcome = divCreator('welcomeText');
    welcome.innerHTML = 'menu';

    const menuInnerContainer = divCreator('menuInnerContainer');
    const itemContainer = divCreator('itemContainer');

    itemContainer.appendChild(itemCreator('images/menu/noodle.jpg','Noodles','Spicy and flavour rich noodles'));
    itemContainer.appendChild(itemCreator('images/menu/rice.jpg','Fried Rice','Spicy and flavour rich Rice'));
    itemContainer.appendChild(itemCreator('images/menu/manchurian.jpg','Manchurian','Spicy and flavour rich Manchurian'));
    itemContainer.appendChild(itemCreator('images/menu/momos.jpg','Momos','Spicy and flavour rich noodles'));
    itemContainer.appendChild(itemCreator('images/menu/rolls.jpg','Chicken Roll','Spicy and flavour rich chicken rolls'));
    itemContainer.appendChild(itemCreator('images/menu/burger.jpg','Burger','Spicy and cheesy Burger'));
    menuInnerContainer.appendChild(itemContainer);

    container.appendChild(menuInnerContainer);
    return container;
}

function loadMenu(){
    const main = document.getElementById('main');
    main.innerHTML = '';
    main.appendChild(menuCreate());
}

export{loadMenu}