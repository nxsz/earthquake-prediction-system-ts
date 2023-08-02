export default  function getTextWidth(text:string){
    const textContainer = document.createElement("span");
    textContainer.innerText = text;
    document.body.appendChild(textContainer);
    const width = textContainer.offsetWidth + 16;
    document.body.removeChild(textContainer);
    return width;
}