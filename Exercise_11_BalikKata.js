
function balikKata(kata) {
    var newString = "";
    for (var i = kata.length - 1; i >= 0; i--) {
        newString += kata[i];
    }
    return newString;
}

console.log(balikKata('Hello World"))
