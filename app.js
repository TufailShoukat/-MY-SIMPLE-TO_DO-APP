
var to_do_input = document.getElementById("todo_input");
var add_to_do_btn = document.getElementById("Add_todo_btn");
var delete_todo_btn = document.getElementById("delete_todo_btn");
var ul_to_do = document.getElementById("ul_todo");

add_to_do_btn.addEventListener('click', function() {
    if (!to_do_input.value) return alert("PLZ ENTER THE VALUE IN THE TO_DO");


    var li = document.createElement('li');

    var span = document.createElement('span');
    span.textContent = to_do_input.value;
    var editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.className = 'edit-btn';
    editButton.addEventListener('click', function() {
        var newTodo = prompt("Edit your todo", span.textContent);
        if (newTodo !== null && newTodo.trim() !== "") {
            span.textContent = newTodo;
        }
    });

    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-btn';
    deleteButton.addEventListener('click', function() {
        ul_to_do.removeChild(li);
    });

    
    li.appendChild(span);
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    
    
    ul_to_do.appendChild(li);
    to_do_input.value = "";
});

delete_todo_btn.addEventListener("click", function() {
    ul_to_do.innerHTML = "";
});


























// function getWeather() {
//     const city = document.getElementById("citySelect").value;
//     const weatherInfoDiv = document.getElementById("weatherInfo");

//     const weatherData = {
//         karachi: { temp: 32, condition: 'Sunny' },
//         lahore: { temp: 35, condition: 'Hot' },
//         islamabad: { temp: 28, condition: 'Cloudy' },
//         peshawar: { temp: 34, condition: 'Partly Cloudy' },
//         quetta: { temp: 25, condition: 'Windy' },
//         faisalabad: { temp: 33, condition: 'Sunny' },
//         multan: { temp: 36, condition: 'Hot' },
//         rawalpindi: { temp: 27, condition: 'Rainy' },
//         sialkot: { temp: 31, condition: 'Cloudy' },
//         hyderabad: { temp: 30, condition: 'Sunny' }
//     };

//     const weather = weatherData[city];

//     if (weather) {
//         weatherInfoDiv.innerHTML = `<strong>Temperature:</strong> ${weather.temp}°C <br> <strong>Condition:</strong> ${weather.condition}`;
//     } else {
//         weatherInfoDiv.innerHTML = 'Weather information not available';
//     }
// }















