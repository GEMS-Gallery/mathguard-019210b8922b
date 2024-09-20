import { backend } from 'declarations/backend';

async function displayResult() {
    const result = await backend.add();
    document.getElementById('result').textContent = `2 + 2 = ${result}`;
}

displayResult();
