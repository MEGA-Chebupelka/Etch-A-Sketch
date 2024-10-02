let btn = document.querySelector("#start");
btn.addEventListener('click', (event) =>{
    start();
})
let reset = document.querySelector("#reset");
reset.addEventListener('click', (event) =>{
    deleteItems();
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
            divMesh.addEventListener('mouseover', (event) => {
                event.target.classList.add('active'),{ once: true }});

            divMesh.classList.add("divMesh");
        }
    }
}

function deleteItems() {
    let deleteElement = document.querySelectorAll('.rowContainer');
    for (let i = 0; i < deleteElement.length; i++) {
      deleteElement[i].remove();
    }
  }
