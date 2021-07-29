const container = document.querySelector('.container')
let totalSquares = 500
const colors = [
    "#32fb35", 
    "#ff3d15", 
    "#a15bf1", 
    "#f2d51c", 
    "#0fee67"
]

for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement("div")
    square.classList.add("square")

    square.addEventListener("mouseover", () => {
        addColor(square)
    })

    square.addEventListener("mouseout", () => {
        setTimeout(function() {
            removeColor(square)
        }, 2000)
    })

    container.appendChild(square)
}

const addColor = element => {
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px `
}

const removeColor = element => {
    const color = "rgb(87, 87, 87)"
    element.style.backgroundColor = color
    element.style.boxShadow = ""
}


const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)]
}

console.log(colors[Math.floor(Math.random() * colors.length)])