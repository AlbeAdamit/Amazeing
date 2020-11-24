const main = document.querySelector('main')
const multiline = `***********.**S.....**.*.T*****.....*.******.***.*.******.*****.******.*****.******.......******.********.........****.******...***....********`

console.log(multiline.split('\n')) 
console.log(multiline.split(''))
const p = document.createElement('p')
main.appendChild(p)
let player = document.createElement('div')
player.style.width = '20px';
player.style.height = '20px';
player.style.backgroundColor = 'red';
player.style.borderRadius = '100%';
for (let sign of multiline) {
    let tile = document.createElement('div')
    tile.textContent += sign
    tile.style.width = '46px'
    tile.style.height = '46px'
    tile.style.display= 'inline-block'
    tile.style.textAlign = 'center'
    p.appendChild(tile);    
    if (tile.textContent == '*') {
        tile.className = 'wall';
    }
    else if (tile.textContent == '.') {
        tile.className = 'path';
    }
    else if (tile.textContent == 'S') {
        tile.className = 'start';
    }
    else if (tile.textContent == 'T') {
        tile.className = 'end';
    }
     tile.textContent = '';
}
let debut = document.querySelector('.start');
player.className = "player"
document.querySelector("p > div:nth-child(15)").appendChild(player)
debut.appendChild(player)


let posX = 16;

document.body.addEventListener("keydown", function(e){
    if(e.code === "ArrowRight"){
        if (document.querySelector("p > div:nth-child("+(posX+1)+")").classList.contains('end')) {
            alert("Bien joué Poto")
        }
        
       if(document.querySelector("p > div:nth-child("+(posX+1)+")").classList.contains('wall')) {console.log('hit the wall')}
    else{
        posX++
        document.querySelector("p > div:nth-child("+posX+")").appendChild(player)
        console.log(e.code)}
    }


    if(e.code === "ArrowLeft"){
        if(document.querySelector("p > div:nth-child("+(posX-1)+")").classList.contains('wall')) {console.log('hit the wall')}
       else{ posX--
        document.querySelector("p > div:nth-child("+posX+")").appendChild(player)
        console.log(e.code)}
    }


    if(e.code === "ArrowUp"){
        if(document.querySelector("p > div:nth-child("+(posX-13)+")").classList.contains('wall')) {console.log('hit the wall')}
        else{
        posX-=13
        document.querySelector("p > div:nth-child("+posX+")").appendChild(player)
        console.log(e.code)}
    }


    if(e.code === "ArrowDown"){
        if(document.querySelector("p > div:nth-child("+(posX+13)+")").classList.contains('wall')) {console.log('hit the wall')}
        else{
        posX+=13
        document.querySelector("p > div:nth-child("+posX+")").appendChild(player)
        console.log(e.code)}
    }
})
