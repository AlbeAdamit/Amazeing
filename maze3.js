function maze3() {
    p.innerHTML = ''
    multiline = `************S*******.*******.*******.****......**.****.**..***.**..***.***.******T.*************`
    main.appendChild(p)
    player.className = 'player';
    p.style.width = 'calc(8*48px)'
    p.style.height = 'calc(12*48px)'
    for (let sign of multiline) {
        let tile = document.createElement('div')
        tile.className = 'tile'
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
    document.querySelector("p > div:nth-child(13)").appendChild(player);
}

maze3()
lvl = 'maze4.js'
x = 8
posX = 13