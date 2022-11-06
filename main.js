function createGame(player1, hour, player2) {
    return `
        <li>
            <img src="./assets/icon-${player1}.svg" alt="${player1}">
            <strong>${hour}</strong>
            <img src="./assets/icon-${player2}.svg" alt="${player2}">
        </li>
    `

}

let delay = -0.3;

function createCard(date, day, games) {

    delay = delay + 0.3;

    return `
        <div class="card" style="animation-dalay: ${delay}s">
            <h2>${date} <span>${day}</span></h2>

            <ul>
                ${games}
                
            </ul>
        </div>
    
    `
}

document.querySelector("#cards").innerHTML =

    createCard("20/11", "Domingo", createGame("qatar", "13:00", "ecuador")) +

    createCard("21/11", "Segunda", createGame("england", "10:00", "iran") + createGame("senegal", "13:00", "netherlands") + createGame("usa", "16:00", "wales")) +

    createCard("24/11", "Quinta", createGame("switzerland", "07:00", "cameroon") + createGame("south-korea", "10:00", "uruguay") + createGame("portugal", "13:00", "ghana") + createGame("brazil", "16:00", "serbia"))