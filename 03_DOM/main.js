//document.write("<p>This is an element created from JS code!</p>");

const carList = document.getElementById("car-list");

const addBtn = document.getElementById("add-btn");

addBtn.onclick = () => {
    // code
    carList.innerHTML += '<li class="list-group-item">New Element from JS</li>';
};