const movies = [
  { title: "X-Men", year: 2000, franchise: "X-Men", poster: "https://a.ltrbxd.com/resized/sm/upload/ub/6i/kh/7q/8259CEB5-947B-4A88-9848-AE748636B747-0-1000-0-1500-crop.jpg" },
  { title: "X-Men 2", year: 2003, franchise: "X-Men", poster: "https://a.ltrbxd.com/resized/sm/upload/lt/cd/xz/vb/xmen2-poster-0-1000-0-1500-crop.jpg" },
  { title: "X-Men: The Last Stand", year: 2006, franchise: "X-Men", poster: "https://a.ltrbxd.com/resized/film-poster/2/7/7/1/3/27713-x-men-the-last-stand-0-1000-0-1500-crop.jpg" },
  { title: "X-Men: First Class", year: 2011, franchise: "X-Men", poster: "https://a.ltrbxd.com/resized/film-poster/1/6/0/7/4/16074-x-men-first-class-0-1000-0-1500-crop.jpg" },
  { title: "Blade", year: 1998, franchise: "Blade", poster: "https://a.ltrbxd.com/resized/film-poster/2/7/7/3/0/27730-blade-0-1000-0-1500-crop.jpg" },
  { title: "Blade II", year: 2002, franchise: "Blade", poster: "https://a.ltrbxd.com/resized/film-poster/2/7/7/8/1/27781-blade-ii-0-1000-0-1500-crop.jpg" },
  { title: "Blade Trinity", year: 2004, franchise: "Blade", poster: "https://a.ltrbxd.com/resized/sm/upload/3b/ss/rr/8x/4WinsdHQBdh5aTt7Bd7T7dbUXbb-0-1000-0-1500-crop.jpg" },
  { title: "Demolidor", year: 2003, franchise: "Demolidor", poster: "https://a.ltrbxd.com/resized/sm/upload/rn/s7/bx/s3/dNVEqwgIdrwWQL3zXI5mQG60oM5-0-1000-0-1500-crop.jpg" },
  { title: "Quarteto Fantástico", year: 2005, franchise: "Quarteto Fantástico", poster: "https://a.ltrbxd.com/resized/film-poster/4/6/8/6/9/46869-fantastic-four-0-1000-0-1500-crop.jpg" },
  { title: "Quarteto Fantástico e o Surfista Prateado", year: 2007, franchise: "Quarteto Fantástico", poster: "https://a.ltrbxd.com/resized/film-poster/5/0/6/3/1/50631-fantastic-four-rise-of-the-silver-surfer-0-1000-0-1500-crop.jpg" },
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
