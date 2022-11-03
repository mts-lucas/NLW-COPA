function createGame(player1, hour, player2){
    return `
        <li>
            <img src="./assets/icon-${player1}.svg" alt="${player1}">
            <strong>${hour}</strong>
            <img src="./assets/icon-${player2}.svg" alt="${player2}">
        </li>
    `
    
}

function createCard(date, day, games){

    return `
        <div class="card">
            <h2>${date} <span>${day}</span></h2>

            <ul>
                ${games}
                
            </ul>
        </div>
    
    `
}

document.querySelector("#app").innerHTML = `
<header>
    <img src="./assets/logo.svg" alt="Logo da NLW">
</header> 
<main id="cards">
    ${createCard("24/11", "Quinta", createGame("switzerland", "07:00", "cameroon") + createGame("south-korea", "10:00", "uruguay") + createGame("portugal", "13:00", "ghana") + createGame("brazil", "16:00", "serbia"))}
</main>
`

{/* <li>
    <img src="./assets/icon-south-korea.svg" alt="South Korea">
    <strong>10:00</strong>
    <img src="./assets/icon-uruguay.svg" alt="Uruguay">
</li>
<li>
    <img src="./assets/icon-portugal.svg" alt="Portugal">
    <strong>13:00</strong>
    <img src="./assets/icon-ghana.svg" alt="Ghana">
</li>
<li>
    <img src="./assets/icon_brazil.svg" alt="Brasil">
    <strong>16:00</strong>
    <img src="./assets/icon-serbia.svg" alt="Servia">
</li> */}