
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

export {
    paragraph,imgCreator,divCreator
};