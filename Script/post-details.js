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
let blok2 = document.createElement(`div`);
blok2.className = 'blok2';
let name = document.createElement('div');
name.className = "name";
let body = document.createElement('div');
body.className = "body";
blok.appendChild(name);
blok.appendChild(body);
main.appendChild(blok);
main.appendChild(blok2);
document.body.appendChild(main);
let id = localStorage.getItem('post')

fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => response.json())
    .then(post => {
        for (let key in post){
            if (key === "title"){
                let h1 = document.createElement(`h1`);
                h1.textContent = `${key}: ${post[key]}`;
                name.appendChild(h1);
            } else {
                let p = document.createElement(`p`);
                p.textContent = `${key}: ${post[key]}`;
                body.appendChild(p);
            }
        }
    })

fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
.then(response => response.json())
.then(comments => {
    for (const comment of comments){
        let card = document.createElement(`div`);
        card.className = "card"
        for (let key in comment) {
            let box = document.createElement(`div`);
            let p = document.createElement(`p`);
            p.textContent = `${key}: ${comment[key]}`;
            box.appendChild(p);
            card.appendChild(box);
        }
        blok2.appendChild(card);
    }
})