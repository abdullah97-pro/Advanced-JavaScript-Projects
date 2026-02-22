// const container = document.getElementById('container');
// container.innerHTML = "Hello";

// const container = document.getElementsByClassName('container')[0];
// container.innerHTML = "Hello Class";

const container = document.querySelector('.container');

let divs = '';
for (let i = 1; i <= 4; i++) {
    divs += `<div class="box">Box ${i}</div>`;
}

container.innerHTML = divs;
