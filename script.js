const form = document.getElementById("myForm");
const urlElement = document.getElementById("url");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const year = document.getElementById("year").value;

  let baseUrl = "https://localhost:8080/";
  let query = [];

  if (name) query.push("name=" + encodeURIComponent(name));
  if (year) query.push("year=" + encodeURIComponent(year));

  if (query.length > 0) {
    baseUrl += "?" + query.join("&");
  }

  urlElement.textContent = baseUrl;
});
