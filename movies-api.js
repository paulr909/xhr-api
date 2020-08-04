const app = document.getElementById("root");
const container = document.createElement("div");
container.setAttribute("class", "container");
app.appendChild(container);

const request = new XMLHttpRequest();
request.open(
  "GET",
  "https://move-to-server-paul/movies.json",
  true
);
// request.setRequestHeader('Content-Type', 'application/json');
request.onload = function() {
  const data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.forEach(item => {
      const h2 = document.createElement("h2");
      h2.textContent = item.title;

      const p = document.createElement("p");
      p.textContent = `Year released: ${item.year} - 
            Cast: ${item.cast.join(", ")} - 
            Genres: ${item.genres.join(", ")}`;

      container.appendChild(h2);
      container.appendChild(p);
    });
  } else {
    const errorMessage = document.createElement("marquee");
    errorMessage.textContent = `API not working!`;
    app.appendChild(errorMessage);
  }
};

request.send();
