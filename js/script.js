// const container = document.getElementById('container');
// container.innerHTML = "Hello";

// const container = document.getElementsByClassName('container')[0];
// container.innerHTML = "Hello Class";

const container = document.querySelector('.container');

for (let i = 1; i <= 4; i++){
    const div = document.createElement('div');
    div.className = 'box';
    div.textContent = `Box ${i}`;
    container.appendChild(div);
}