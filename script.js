const form = document.getElementById('potter-form');
const input = document.getElementById('potter-name');
const potterInfoDiv = document.getElementById('potter-info');

async function fetchPotterData(characterName) 
{
    try {
        const response = await fetch(`https://potterhead-api.vercel.app/api/characters${characterName.toLowerCase()}`);

        if (!response.ok) {throw new Error('Personaje no encontrado');}

        const data = await response.json();
        displayPotterInfo(data);
    } catch (error) {
        potterInfoDiv.innerHTML = `<p>${error.message}</p>`;
        potterInfoDiv.style.display = 'block';
    }
}

function displayPotterInfo(character) {
    const {name, house, species, gender, ancestry, wand, patronus, image } = character;

    potterInfoDiv.innerHTML = `
        ${image ? `img src='${image}' alt='${name}'` : ''}
        <h3>${name}</h3>
        <p><strong>Casa:</strong> ${house || 'Desconocida'}</p>
        <p><strong>Patronus:</strong> ${patronus || 'Desconocido'}<p/>
    `;
}