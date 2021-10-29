// const button = document.querySelector('button')
// const body = document.querySelector('body')
// const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple']

// body.style.backgroundColor = 'white'
// button.addEventListener('click', changeBackground)

// function changeBackground(){
// const colorIndex= parseInt(Math.random()*colors.length)
// body.style.backgroundColor = colors[colorIndex]
// }
const button = document.querySelector('button')
const body = document.querySelector('body')
const colors = ['#F0A500', '#334756', '#334756', '#333','blue','#C4FB6D','#16C79A', '#28B5B5', '#8FD9A8']

body.style.backgroundColor = "#C4FB6D"
button.addEventListener('click', backgroundchange)

function backgroundchange() {
    const colorindex = parseInt(Math.random()*colors.length)
    body.style.backgroundColor = colors[colorindex]

}