//hamburger menu
const hamburger = document.querySelector(".hamburger");
const links = document.querySelector(".links");
hamburger.addEventListener("click", function() {
    if (links.classList.contains("show")) {
        links.classList.remove("show");
        console.log("Off");
    }
    else {
        links.classList.add("show");
         console.log("On");
    }
});

//asyncrhonous function
async function getPapers() {
    try {
      const response = await fetch("https://upadhayay.github.io/db.json");
      const data = await response.json();
      const books = data.books;
      const paperContainer = document.querySelector("#paperContainer");

        for(let book of books){
            const paper = document.createElement("div");

            paper.innerHTML = `
                <img src="images/paper icon.png" alt="Paper Icon">
                <h3>${book.title}</h3>
                <p>Year: ${book.year}</p>
                <p>Published: ${book.published}</p>
            `;
            paper.classList.add("paper");
            paperContainer.append(paper);
        }
    }
    catch(error){
        console.log(error);
    }
}
getPapers();