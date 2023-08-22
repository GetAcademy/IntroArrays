// model
let names = ['Per', 'Pål', 'Espen'];
// let names = [];
// names[0] = 'Per';
// names[1] = 'Pål';
// names[2] = 'Espen';

// view
updateView();
function updateView() {
    let html = '';
    // for (let name of names) {
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        html += /*HTML*/`
            <li>
                ${name}
                <button onclick="deleteName(${i})">x</button>
            </li>
        `;
    }
    document.getElementById('nameList').innerHTML = html;
}

// controller
function deleteName(index) {
    names.splice(index, 1);
    updateView();
}

/*
    names[3] = 'Anders'
    names.push('Bjarne')
    names.unshift('Ole')
    names.shift()
    names.pop()

    sette inn:
    names.splice(1, 0, 'Anders', 'Bjarne', 'Cecilie')

    ersatte 1 med 3:
    names.splice(1, 1, 'Anders', 'Bjarne', 'Cecilie')
*/