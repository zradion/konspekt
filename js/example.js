// Список из массива.
var cars =['Saab', 'Volvo', 'BMW'];

var text = "<ul>";
cars.forEach(func);
text += "</ul>";
function func(elem) {text += `<li>${elem}</li>`};

// С помощью цикла for.
var text = "<ul>";
for (let i = 0; i < cars.length; i++) {
    text += `<li> ${cars[i]} </li>`
}
text += "</ul>"

document.querySelector('section#s5 #exp1').innerHTML = text;