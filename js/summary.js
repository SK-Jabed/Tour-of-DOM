console.log("DOM Tour Summary");

const allLi = document.getElementsByTagName("li");
console.log(allLi);

const allTitles = document.getElementsByClassName("section-title");
console.log(allTitles);

const firstSection = document.getElementById("first-section");
console.log(firstSection);
firstSection.style.color = "tomato";
firstSection.style.backgroundColor = "yellow"

// document.querySelector
// document.querySelectorAll

const main = document.getElementById("main-container")
const section = document.createElement("section");
section.innerHTML = `
    <h2>My Dynamic Section</h2>
    <p>Paragraph Text in Dynamic Section</p>
    <ul>
        <li>Dynamic Section Li</li>
        <li>Dynamic Section Li</li>
        <li>Dynamic Section Li</li>
        <li>Dynamic Section Li</li>
    </ul>
`

main.appendChild(section);