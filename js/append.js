// 01. Where to add 
const placesList = document.getElementById("places-list");
// 02. What to be add
const li = document.createElement("li");
li.innerText = "Sajek Valley";
// 03. Add the child 
placesList.appendChild(li);

// 01. Where to add 
const mainContainer = document.getElementById("main-container");
// 02. What to add
const section = document.createElement("section");
const h2 = document.createElement("h2");
h2.innerText = "Food I Like Most";
section.appendChild(h2);

const ul = document.createElement("ul");
const li1 = document.createElement("li");
li1.innerText = "Biryani";
ul.appendChild(li1);

const li2 = document.createElement("li");
li2.innerText = "Burger";
ul.appendChild(li2);

const li3 = document.createElement("li");
li3.innerText = "Rice";
ul.appendChild(li3);

section.appendChild(ul);

mainContainer.appendChild(section);


// Set innerHTML directly
const sectionDress = document.createElement("section");
sectionDress.innerHTML = `
<h2>My Electronics Collection</h2>
<ul>
    <li>Personal Computer</li>
    <li>HP 250 G9 Laptop</li>
    <li>Redmi Note 10 Pro Phone</li>
</ul>
`

mainContainer.appendChild(sectionDress);