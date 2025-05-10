const movies = [
  { title: "X-Men", year: 2000, franchise: "X-Men", poster: "https://a.ltrbxd.com/resized/sm/upload/ub/6i/kh/7q/8259CEB5-947B-4A88-9848-AE748636B747-0-1000-0-1500-crop.jpg?v=58f85fcb62.jpg" },
  { title: "X-Men 2", year: 2003, franchise: "X-Men", poster: "https://image.tmdb.org/t/p/w500/uKDEZtxl9zoiEVbZZsLkZf3PjUu.jpg" },
  { title: "Blade II", year: 2002, franchise: "Blade", poster: "https://image.tmdb.org/t/p/w500/wDd6Kc2Xy8cUepLZpACz5VdUrsE.jpg" },
  { title: "Blade Trinity", year: 2004, franchise: "Blade", poster: "https://image.tmdb.org/t/p/w500/9t2Om3V18xcxtOCz3R5GzA3PrU1.jpg" },
  { title: "Demolidor", year: 2003, franchise: "Demolidor", poster: "https://image.tmdb.org/t/p/w500/8TRP7VME2NzkY9h8J5yn9aK3aYB.jpg" },
  { title: "Quarteto Fantástico", year: 2005, franchise: "Quarteto Fantástico", poster: "https://image.tmdb.org/t/p/w500/6r2zwGDbElh4JXm8OSYxrHkKjA1.jpg" },
  { title: "Quarteto Fantástico e o Surfista Prateado", year: 2007, franchise: "Quarteto Fantástico", poster: "https://image.tmdb.org/t/p/w500/tQfC9nhSx0X0ZcQYxM7Jqyw6vMz.jpg" },
  { title: "Homem-Aranha", year: 2002, franchise: "Homem-Aranha (Raimi)", poster: "https://image.tmdb.org/t/p/w500/rweIrveL43TaxUN0akQEaAXL6x0.jpg" },
  { title: "Homem-Aranha 2", year: 2004, franchise: "Homem-Aranha (Raimi)", poster: "https://image.tmdb.org/t/p/w500/olxpyq9kJAZ2NU1siLshhhXEPR7.jpg" },
  { title: "Homem-Aranha 3", year: 2007, franchise: "Homem-Aranha (Raimi)", poster: "https://image.tmdb.org/t/p/w500/qFmwhVUoUSXjkKRmca5yGDEXBIj.jpg" }
];

const movieGrid = document.getElementById("movie-grid");
const filtersContainer = document.getElementById("filters");

const franchises = ["Todos", ...new Set(movies.map(m => m.franchise))];

let activeFranchise = "Todos";

function renderFilters() {
  filtersContainer.innerHTML = "";
  franchises.forEach(f => {
    const btn = document.createElement("button");
    btn.textContent = f;
    btn.className = activeFranchise === f ? "active" : "";
    btn.onclick = () => {
      activeFranchise = f;
      renderFilters();
      renderMovies();
    };
    filtersContainer.appendChild(btn);
  });
}

function renderMovies() {
  movieGrid.innerHTML = "";
  const filtered = activeFranchise === "Todos"
    ? movies
    : movies.filter(m => m.franchise === activeFranchise);

  filtered.forEach(({ title, year, poster }) => {
    const card = document.createElement("div");
    card.className = "movie-card";
    card.innerHTML = `
      <img src="${poster}" alt="${title}" />
      <div class="info">
        <h3>${title}</h3>
        <p>${year}</p>
      </div>
    `;
    movieGrid.appendChild(card);
  });
}

renderFilters();
renderMovies();
