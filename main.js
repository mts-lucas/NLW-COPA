function createGame(player1, hour, player2) {
    return `
        <li>
            <img src="./assets/icon-${player1}.svg" alt="${player1}">
            <strong>${hour}</strong>
            <img src="./assets/icon-${player2}.svg" alt="${player2}">
        </li>
    `

}

function createCard(date, day, games) {

    return `
        <div class="card">
            <h2>${date} <span>${day}</span></h2>

            <ul>
                ${games}
                
            </ul>
        </div>
    
    `
}

document.querySelector("#cards").innerHTML =
    createCard("24/11", "Quinta", createGame("switzerland", "07:00", "cameroon") + createGame("south-korea", "10:00", "uruguay") + createGame("portugal", "13:00", "ghana") + createGame("brazil", "16:00", "serbia")) +

    createCard("24/11", "Quinta", createGame("switzerland", "07:00", "cameroon") + createGame("south-korea", "10:00", "uruguay") + createGame("portugal", "13:00", "ghana") + createGame("brazil", "16:00", "serbia"))