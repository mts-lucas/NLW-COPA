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

    createCard("22/11", "Terça", createGame("argentina", "07:00", "saudi-arabia") + createGame("denmark", "10:00", "tunisia") + createGame("mexico", "13:00", "poland") + createGame("france", "16:00", "australia")) +

    createCard("23/11", "Quarta", createGame("morocco", "07:00", "croatia") + createGame("germany", "10:00", "japan") + createGame("spain", "13:00", "costa-rica") + createGame("belgium", "16:00", "canada")) +

    createCard("24/11", "Quinta", createGame("switzerland", "07:00", "cameroon") + createGame("south-korea", "10:00", "uruguay") + createGame("portugal", "13:00", "ghana") + createGame("brazil", "16:00", "serbia"))