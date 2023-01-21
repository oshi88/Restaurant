
function paragraph(text,style){
    const para = document.createElement("p");
    para.classList.add(style);
    para.innerText = text;
    return para;
}

function imgCreator(style,source){
    const imageElement = document.createElement('img');
    imageElement.classList.add(style);
    imageElement.src = source;
    return imageElement;
}

function divCreator(style,text){
    const div = document.createElement('div');
    div.classList.add(style);
    if(text === undefined){
        return div;
    }
    div.innerText = text;
    return div;
}

function itemCreator(imageUrl,title,discription){
    const item = divCreator('item');
    const image = document.createElement('img');
    image.src = imageUrl;
    const itemTitle = document.createElement('h2');
    itemTitle.textContent = title;
    const itemDisc = document.createElement('p');
    itemDisc.textContent = discription;

    item.appendChild(image);
    item.appendChild(itemTitle);
    item.appendChild(itemDisc);
    return item;
}

export {
    paragraph,imgCreator,divCreator,itemCreator
};