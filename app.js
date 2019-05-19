const setFrom = document.querySelector(".from-set");
const setTo = document.querySelector(".to-set");
const outputFrom = document.querySelector("#fromOutput")
const outputTo = document.querySelector("#toOutput")
const submit = document.querySelector(".submit");
const inputFrom = document.querySelector("#from");
const inputTo = document.querySelector("#to");
let from;
let to;

function regExpEscape(literal_string) {
    return literal_string.replace(/[-[\]{}()*+!<=:?.\/\\^$|#\s,]/g, '\\$&');
}

function parseText() {
    const text = document.querySelector("#input-area").value;
    var lines = text.split("\n");
    var result = '';
    let regexp = new RegExp(`^(>)(.*?${from})(.*)(${to}.*)$`);
    for (var i in lines) {
        result += lines[i].replace(regexp, "$1$3") + "\n";
    }
    document.querySelector('#output-area').innerText = result;
    inputFrom.textContent = '';
    inputTo.textContent = '';
}

setFrom.addEventListener("click", () => {
    from = new RegExp(regExpEscape(inputFrom.value)).toString().slice(1, -1);
    console.log(from);
    outputFrom.textContent = "Delete until: " + from.toString().replace("\\", "");
})

setTo.addEventListener("click", () => {
    to = new RegExp(regExpEscape(inputTo.value)).toString().slice(1, -1);
    console.log(to);
    outputTo.textContent = "Delete from: " + to.toString().replace("\\", "");
})


submit.addEventListener("click", parseText);