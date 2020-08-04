const app = document.getElementById("root");
const container = document.createElement("div");
container.setAttribute("class", "container");
app.appendChild(container);

const request = new XMLHttpRequest();
request.open("GET", "https://api.github.com/users/unipartdigital", true);
request.setRequestHeader("Content-Type", "application/json");
request.onload = function() {
  const data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    Object.keys(data).forEach(item => {
      const p = document.createElement("p");

      if (data[item] === null || data[item] === "") {
        p.textContent = "No data found";
      } else {
        p.textContent = item.toUpperCase() + ": " + data[item];
      }
      container.appendChild(p);
    });
  } else {
    const errorMessage = document.createElement("marquee");
    errorMessage.textContent = `API not working!`;
    app.appendChild(errorMessage);
  }
};

request.send();
