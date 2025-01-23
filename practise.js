const button = document.querySelector(".button");
const height = document.defaultView.innerHeight;
const width = document.defaultView.innerWidth;
const element = document.getElementById("id");
const offsetHeight = element.offsetHeight;
const offsetWidth = element.offsetWidth;
console.log(offsetHeight, offsetWidth)
console.dir(document)
console.dir(button)
function random(max){
    return Math.floor(Math.random() * max + 1)
}
button.onmouseenter = () => {
    let x = button.getBoundingClientRect().left;
    let y = button.getBoundingClientRect().top;
    randomHeight = random(height - offsetHeight);
    randomWidth = random(width - offsetWidth);
    console.log(randomHeight, randomWidth);
    // console.log(`translate(${randomWidth}, ${randomHeight})`)
    // element.style.transform = `translate(${randomWidth}, ${randomHeight})`;
    element.style.left = `${randomWidth}px`;
    element.style.top = `${randomHeight}px`;
}
