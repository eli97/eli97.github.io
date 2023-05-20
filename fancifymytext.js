function helloWorld() {
    alert("Hello, world!");
}

function bigger() {
    document.getElementById("inputText-1").style.fontSize='2em';
    //const text = document.getElementById('inputText-1');
    //text.style.fontSize = '2em';
}

function fancify() {
    const text = document.getElementById('inputText-1');
    document.getElementById("inputText-1").style.fontWeight = "bold";
    document.getElementById("inputText-1").style.color = "blue";
    document.getElementById("inputText-1").style.textDecoration = "underline";
    this.checked = false;
}

function removeStyle() {
    const text = document.getElementById('inputText-1');
    text.style.fontSize = '1em';
    text.style.fontWeight = "normal";
    text.style.color = "black";
    text.style.textDecoration = 'none';
    this.checked = false;
}


function moo()
{
    var text = document.getElementById('inputText-1').value;
    text = text.toUpperCase();
    var parts = text.split(" ");
    for (var i = 0; i < parts.length - 1; i++){
        let word = parts[i].trim();
        word += "-Moo.";
        parts[i] = word;
    }
    text = parts.join(" ");
    document.getElementById("inputText-1").value = text;
}

