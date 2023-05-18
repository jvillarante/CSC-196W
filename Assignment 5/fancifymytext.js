function showAlert() {
    alert("Hello, world!");
}

function biggerText() {
    var textArea = document.getElementById("textArea");
    textArea.style.fontSize = "24pt";
}

function fancyShmancy() {
    var textArea = document.getElementById("textArea");
    textArea.style.fontWeight = "bold";
    if (document.getElementById("fancyRadio").checked) {
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    }
}

function boringBetty() {
    var textArea = document.getElementById("textArea");
    if (document.getElementById("boringRadio").checked) {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

function moo() {
    var textArea = document.getElementById("textArea");
    var text = textArea.value.toUpperCase();
    var sentences = text.split(".");
    var modifiedSentences = sentences.map(function(sentence) {
        var words = sentence.split(" ");
        if (words.length > 0) {
            var lastWord = words[words.length - 1];
            words[words.length - 1] = lastWord + "-Moo";
        }
        return words.join(" ");
    });
    textArea.value = modifiedSentences.join(".");
}