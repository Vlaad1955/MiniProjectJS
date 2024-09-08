let nav = document.createElement(`nav`);
let ul = document.createElement(`ul`);
let li1 = document.createElement(`li`);
let li2 = document.createElement(`li`);
let li3 = document.createElement(`li`);
let a1 = document.createElement(`a`);
let a2 = document.createElement(`a`);
let a3 = document.createElement(`a`);
a1.setAttribute('href', `./Index.html`);
a2.setAttribute(`href`, `./user-details.html`);
a3.setAttribute(`href`, `./post-details.html`);
a1.textContent = 'Користувачі';
a2.textContent = 'Пости';
a3.textContent = 'Відгуки';
li1.appendChild(a1);
li2.appendChild(a2);
li3.appendChild(a3);
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
nav.appendChild(ul);
document.body.appendChild(nav);

let main = document.createElement(`div`);
main.className = 'main';

fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {
        for(const user of users){
            let blok = document.createElement(`div`);
            blok.className = 'blok';
            let h1 = document.createElement('h1');
            let p = document.createElement('p');
            h1.textContent = `ID - ${user.id}`;
            p.textContent = `Name - ${user.name}`;
            let button = document.createElement('button');
            button.textContent = "Details"
            blok.appendChild(h1);
            blok.appendChild(p);
            blok.appendChild(button);
            main.appendChild(blok);

            button.onclick = function (){
                localStorage.setItem(`user`, JSON.stringify(user.id));
                window.location.href = 'user-details.html';
            }
        }
    })
document.body.appendChild(main);