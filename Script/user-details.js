
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
let blok = document.createElement(`div`);
blok.className = 'blok';
main.appendChild(blok);
document.body.appendChild(main);
let id = localStorage.getItem('user')
let button = document.createElement(`button`);
button.textContent = "post of current user";
button.className = 'postUser';
main.appendChild(button);


fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        let user = users.find(user => user.id === parseInt(id));
    let nameId = document.createElement('h1')
    nameId.textContent = `${user.name}`
        blok.appendChild(nameId);

        for (let key in user) {
            if (key === 'address') {
                smolBlock(user[key], "Адреса:");
            } else if (key === 'company') {
                smolBlock(user[key], "Компанія:");
            } else {
                let text = document.createElement('p');
                text.textContent = `${key}: ${user[key]}`;
                blok.appendChild(text);
            }
        }
})
button.onclick = function() {
    let postsContainer = document.createElement('div');
    postsContainer.className = "container"
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
        .then(response => response.json())
        .then(posts => {
            for (const post of posts) {
                let blok2 = document.createElement('div');
                blok2.className = 'blok2';

                let title = document.createElement('p');
                title.textContent = `${post.title}`;
                blok2.appendChild(title);

                let button1 = document.createElement('button');
                button1.textContent = "Details";
                blok2.appendChild(button1);

                button1.onclick = function (){
                    localStorage.setItem('post', JSON.stringify(post.id));
                    window.location.href = 'post-details.html';
                }

                postsContainer.appendChild(blok2);
            }
            document.body.appendChild(postsContainer);
        })
}

function smolBlock(obj, nameBlock) {
    let block = document.createElement('p');
    block.textContent = nameBlock;
    blok.appendChild(block);

    for (let key in obj) {
        if (key === 'geo') {
            smolBlock(obj[key], "Геолокація");
        } else {
            let text = document.createElement('p');
            text.className = 'smole';
            text.textContent = `${key}: ${obj[key]}`;
            blok.appendChild(text);
        }
    }
}

