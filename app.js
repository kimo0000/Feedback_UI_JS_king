const content = document.querySelector(".container");
const smiles = document.querySelectorAll(".face");
const faces = document.querySelectorAll(".face i");
const btn = document.querySelector(".btn");

smiles.forEach((smile) => {
  smile.addEventListener("click", (e) => {
    smiles.forEach((smile) => {
      smile.classList.remove("active");
    });

    e.currentTarget.classList.add("active");
  });
});

btn.addEventListener("click", (e) => {
  smiles.forEach((smile) => {
    if (smile.classList.contains("active")) {
      content.innerHTML = `<article class="feed">
                    <p>thank You !</p>
                    <p>Feedback: <span class="back">${smile.id}</span></p>
                    <p>We'll Use Your Feedback To Improve Our Customer Support.</p>
                </article>
       `;
    }
  });
});

