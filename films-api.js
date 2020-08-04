const app = document.getElementById("root");
const container = document.createElement("div");
container.setAttribute("class", "container");
app.appendChild(container);

const request = new XMLHttpRequest();
request.open("GET", "https://ghibliapi.herokuapp.com/films", true);
request.setRequestHeader("Content-Type", "application/json");
request.onload = function() {
  const data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.forEach(item => {
      const card = document.createElement("div");
      card.setAttribute("class", "card");

      const h1 = document.createElement("h1");
      h1.textContent = item.title;

      const p = document.createElement("p");
      p.textContent = `${item.description.substring(0, 300)}..`;

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
    });
  } else {
    const errorMessage = document.createElement("marquee");
    errorMessage.textContent = `API not working!`;
    app.appendChild(errorMessage);
  }
};

request.send();
