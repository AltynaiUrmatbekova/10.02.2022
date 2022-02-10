let example2Button = document.getElementById('example2');
example2Button.onclick = function() {
    alert("Nice to meet you!");
}

let example3Button = document.getElementById('example3');
example3Button.addEventListener('click', function() {
    alert("Nice to meet you!");
})

example3Button.addEventListener('click', function() {
    alert("Bye!")
})

let example4Button = document.getElementById('example4');
example4Button.addEventListener('click', function() {
    example4Button.textContent = "Nice to meet you!";
})
