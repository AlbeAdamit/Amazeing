const main = document.querySelector('main')
let multiline = `***********.**S.....**.*.T*****.....*.******.***.*.******.*****.******.*****.******.......******.********.........****.******...***....********`

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
    p.appendChild(tile);
    if (tile.textContent == '*') {
        tile.className = 'wall';
    } else if (tile.textContent == '.') {
        tile.className = 'path';
    } else if (tile.textContent == 'S') {
        tile.className = 'start';
    } else if (tile.textContent == 'T') {
        tile.className = 'end';
    }
    tile.textContent = '';
}
let debut = document.querySelector('.start')
document.querySelector("p > div:nth-child(15)").appendChild(player)
debut.appendChild(player)

let lvl = 'maze2.js'
let posX = 16;
let x = 13;

document.body.addEventListener("keydown", function (e) {
    if (e.code === "ArrowRight") {
        if (document.querySelector("p > div:nth-child(" + (posX + 1) + ")").classList.contains('wall')) {
            console.log('hit the wall')
            document.querySelector("p > div:nth-child(" + posX + ")").appendChild(player)
            console.log(e.code)
        } else {
            posX++
            document.querySelector("p > div:nth-child(" + posX + ")").appendChild(player)
            console.log(e.code)
        }
    }


    if (e.code === "ArrowLeft") {
        if (document.querySelector("p > div:nth-child(" + (posX - 1) + ")").classList.contains('wall')) {
            console.log('hit the wall')
        } else {
            posX--
            document.querySelector("p > div:nth-child(" + posX + ")").appendChild(player)
            console.log(e.code)
        }
    }


    if (e.code === "ArrowUp") {
        if (document.querySelector("p > div:nth-child(" + (posX - x) + ")").classList.contains('wall')) {
            console.log('hit the wall')
        } else {
            posX -= x
            document.querySelector("p > div:nth-child(" + posX + ")").appendChild(player)
            console.log(e.code)
        }
    }


    if (e.code === "ArrowDown") {
        if (document.querySelector("p > div:nth-child(" + (posX + x) + ")").classList.contains('wall')) {
            console.log('hit the wall')
        } else {
            posX += x
            document.querySelector("p > div:nth-child(" + posX + ")").appendChild(player)
            console.log(e.code)
        }
    }
    if (document.querySelector("p > div:nth-child(" + (posX) + ")").classList.contains('end')) {
        window.setTimeout(
            function () {
                alert("bien joué")
                const level = document.createElement('script')
                level.src = lvl
                main.appendChild(level)
            }, 400)

    }
})