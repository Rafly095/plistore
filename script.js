document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: "smooth"
            });
        });
    });
});

document.getElementById("hamburgerBtn").addEventListener("click", function () {
    document.getElementById("navLinks").classList.toggle("show");
  });
  

  const originalOrder = Array.from(document.querySelectorAll(".product-card"));

  function sortByAbjad() {
      const grid = document.getElementById("product-Grid");
      const cards = Array.from(grid.children);
  
      cards.sort((a, b) => {
          const nameA = a.querySelector("span").textContent.toUpperCase();
          const nameB = b.querySelector("span").textContent.toUpperCase();
          return nameA.localeCompare(nameB);
      });
  
      grid.innerHTML = "";
      cards.forEach(card => grid.appendChild(card));
  }
  
  function sortByOriginal() {
      const grid = document.getElementById("productGrid");
      grid.innerHTML = "";
      originalOrder.forEach(card => grid.appendChild(card));
  }

  const namespace = 'plistore.site'; // bebas, asal unik
  const key = 'visitor';

  fetch(`https://api.countapi.xyz/hit/${namespace}/${key}`)
    .then(response => response.json())
    .then(data => {
      document.getElementById('visitor-count').innerText = `Total Pengunjung: ${data.value}`;
    });
