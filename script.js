let btn = document.querySelector(".button");
btn.addEventListener('click', (event) =>{
    start();
})

function start(){
    alert('Enter mesh parameters(max:100x100)');
    widthMesh = prompt('Enter width of the Mesh');
    hightMesh = prompt('Enter hight of the Mesh');
    const drawWindow = document.querySelector(".drawWindow");
    for(let i = hightMesh; i > 0; i--){
        const div = document.createElement("div");
        drawWindow.appendChild(div);
        div.classList.add("rowContainer");
        for(let j = widthMesh; j > 0; j--){
            const divMesh = document.createElement("div");
            div.appendChild(divMesh);
            divMesh.classList.add("divMesh");
        }
    }
}

