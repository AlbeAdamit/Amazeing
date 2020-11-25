function maze2() {
    p.innerHTML = ''
    multiline = `***********************..S.................*********************.**....................**.*********************...................T*`
    main.appendChild(p)
    player.className = 'player';
    p.style.width = 'calc(22*48px)'
    p.style.height = 'calc(6*48px)'
    for (let sign of multiline) {
        let tile = document.createElement('div')
        tile.textContent += sign
        p.appendChild(tile);
        if (tile.textContent == '*') {
            tile.className = 'wall';
        }
        else if (tile.textContent == '.'){
            tile.className = 'path';
        }
        else if (tile.textContent == 'S') {
            tile.className = 'start';
        }
        else if (tile.textContent == 'T') {
            tile.className = 'end'
        }
        tile.textContent = '';
    } document.querySelector("p > div:nth-child(26)").appendChild(player);
}
    maze2()
    lvl = 'maze3.js'
    x = 22
    posX = 26