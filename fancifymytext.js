function helloWorld() {
    alert("Hello, world!");
}

function bigger() {
    const text = document.getElementById('inputText-1');
    text.style.fontSize = "2em";
}

function fancyify() {
    const text = document.getElementById('inputText-1');
    text.style.fontWeight = 'bold';
    text.style.color = 'blue';
    text.style.textDecoration = 'underline';
    this.checked = false;
}

function removeStyle() {
    const text = document.getElementById('inputText-1');
    text.style.fontSize = "1em";
    text.style.fontWeight = 'normal';
    text.style.color = 'black';
    text.style.textDecoration = 'none';
    this.checked = false;
}