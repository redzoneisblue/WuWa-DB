const url = `https://api.resonance.rest/characters`;
const deck = document.querySelector(".card-container");
const cards = document.querySelectorAll(".card");


const fetchData = async () => {

    let response = await fetch(url);
    data = await response.json();
    await charinfo(data);
    await moreinfo();

}

fetchData();

// loop over the characters in API and push it to the DOM
const charinfo = (data) => {
 
    data.characters.map((char) => {
        const loadChardat = async () => {
            let response = await fetch(`https://api.resonance.rest/characters/${char}`);
            let data = await response.json();
            console.log(data);
            //  name, rarity, attribute, quote, class, birthday, birthplace, weapon
            deck.innerHTML += 
            `
            <div class="card">
                <img src="https://api.resonance.rest/characters/${char}/icon" class="char-icon">
                <div class="card-text">
                    <p>${data.name}</p>
                    <p>${data.rarity} star</p>
                    <p>${data.attribute}</p>
                    <p>${data.weapon}</p>
                </div>
            </div>
            `
        }
        loadChardat();
    })

}

// to show a bigger size card with more info when you hover on a specific card
const moreinfo = () => {

    cards.forEach(card => {
        card.addEventListener("onmouseover", () => {
            card.innerHTML += 
            `
            <div>
                <p>${data.quote}</p>
                <p>${data.birthday}</p>
                <p>${data.birthplace}</p>
            </div>
            `
        })
    })

}