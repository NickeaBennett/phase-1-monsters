async function fetchMonsters() {
    const resp = await fetch("http://localhost:3000/monsters/?_limit=50&_page=3");
    const json = await resp.json();
    return renderMonsters(json);
}

function renderMonsters(monsters) {
    const monsterContainer = document.querySelector('#monster-container');
    monsters.forEach(monster => {
        const h2 = document.createElement('h2');
        h2.innerHTML = monster.name;
        monsterContainer.appendChild(h2);

        const h4 = document.createElement('h4')
        h4.innerHTML = monster.age;
        monsterContainer.appendChild(h4);

        const pTag = document.createElement('P')
        pTag.innerHTML = monster.description;
        monsterContainer.appendChild(pTag);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    fetchMonsters();
})