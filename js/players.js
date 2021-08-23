function setPlayerStyle(player) {
    player.style.border = '3px solid blue';
    player.style.borderRadius = '20px';
    player.style.margin = '3px';
    player.style.padding = '10px';
}

const players = document.getElementsByClassName('player');
for (const player of players) {
    setPlayerStyle(player);

}


function addPlayer() {
    const playersContainer = document.getElementById('players');
    const player = document.createElement('div');
    player.classList.add('player');
    player.innerHTML = `<h4 class="player-name">player new</h4>
    <p>Sint accusantium ea, dolorem harum quae optio explicabo consequatur libero sequi praesentium quis
        hic amet iste fugit laboriosam error corporis. Dolores inventore, nihil numquam molestiae in
        aperiam eaque voluptatum ipsa.</p>
        `
    setPlayerStyle(player);
    playersContainer.appendChild(player);

}
document.getElementById('players').addEventListener('click', function (event) {
    if (event.target.tagName.toLowerCase() == 'div') {
        event.target.style.backgroundColor = 'red';
    }
    else {
        event.target.parentNode.style.backgroundColor = 'yellow';
    }

})