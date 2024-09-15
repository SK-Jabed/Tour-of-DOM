const sections = document.querySelectorAll("section");
for (const section of sections) {
    section.style.border = "2px solid tomato";
    section.style.marginBottom = "5px";
    section.style.borderRadius = "10px";
    section.style.paddingLeft = "7px";
    section.style.backgroundColor = "mediumspringgreen";
}

const placesContainer = document.getElementById("places-container");
placesContainer.style.backgroundColor = "skyblue"
placesContainer.classList.add("yellow-bg");
placesContainer.classList.remove("large-text");