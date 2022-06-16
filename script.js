//https://aeea-154-160-7-119.eu.ngrok.io/api/persons
let nameInput = document.getElementById("name");
let numberInput = document.getElementById("number");
let postBtn = document.getElementById("post");
let allDIv = document.getElementById("all");

function displayAll() {
  allDIv.innerHTML = "";
  fetch("https://academy-contacts-backend.herokuapp.com/api/persons")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((person) => {
        allDIv.innerHTML += `<p class="personName">Name: ${person.name}</p>
            <p class="personNumber">Number: ${person.number}`;
      });
    });
}

// displayAll();

function postContact() {
  contact = {
    name: nameInput.value,
    number: numberInput.value,
  };
  fetch("https://academy-contacts-backend.herokuapp.com/api/persons", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contact),
  })
    .then((data) => data.json())
    .then((data) => console.log(data));
}

// postContact();
displayAll();
postBtn.addEventListener("click", (e) => {
  e.preventDefault();
  postContact();
  displayAll();
  nameInput.value = "";
  numberInput.value = "";
  document.location.reload();
});
