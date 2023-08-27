const Gameboard = (() => {
    let gameboard = [[], [], []];
})();

const PlayerFactory = (name, marker) => {
    const playerInfo = () => {
        return `Hi! My name is ${name} and my marker is ${marker}.`
    }
    return { name, marker, age };
}

const displayController = (() => {

    const gameboardContainer = document.getElementById('gameboard-container');

    const generateGrid = () => {
        for (let i = 1 ; i <= 9; i++) {
            let gamebox = document.createElement('div');
            gamebox.classList.add('gamebox');
            gamebox.id = i;
            gameboardContainer.appendChild(gamebox);
        }
    }

    return { generateGrid };
})();

displayController.generateGrid();


const gameFlow = {};