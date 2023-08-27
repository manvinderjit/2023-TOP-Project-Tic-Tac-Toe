const Gameboard = (() => {
    let gameboard = [[], [], []];
})();

const PlayerFactory = (name, marker) => {
    const playerInfo = () => {
        return `Hi! My name is ${name} and my marker is ${marker}.`
    }
    return { name, marker, age };
}

const DisplayController = (() => {

    const gameboardContainer = document.getElementById('gameboard-container');

    const generateGrid = () => {
        // for (let i = 1 ; i <= 9; i++) {
        //     let gamebox = document.createElement('div');
        //     gamebox.classList.add('gamebox');
        //     gamebox.id = i;
        //     gamebox.textContent = 'X';
        //     gameboardContainer.appendChild(gamebox);
        // }

        for (let i = 1 ; i <= 3; i++) {
            for (let j = 1 ; j <= 3; j++) {
                let gamebox = document.createElement('div');
                gamebox.classList.add('gamebox');
                gamebox.id = i + '-' + j;
                gamebox.textContent = 'X';
                gameboardContainer.appendChild(gamebox);
            }
        }
    }

    return { generateGrid };

})();

DisplayController.generateGrid();


const gameFlow = {};