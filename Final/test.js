
var text = document.getElementById("text");
var TLD = ".COM";

for (let i = 1; i < 100; i++) {
    if(((i % 3) == 0) && ((i % 5) == 0)) {
        text.textContent += "SCHEELS" + TLD + "<br>";
    } else if((i % 3) == 0) {
        text.textContent += "SCHEELS" + "<br>";
    } else if ((i % 5) == 0) {
        text.textContent += TLD + "<br>";
    } else {
        text.textContent += i + "<br>";
    }
}




// var text = "";
// var TLD = ".COM";

// for (let i = 1; i < 100; i++) {
//     if(((i % 3) == 0) && ((i % 5) == 0)) {
//         text += "SCHEELS" + TLD + "\n";
//     } else if((i % 3) == 0) {
//         text += "SCHEELS" + "\n";
//     } else if ((i % 5) == 0) {
//         text += TLD + "\n";
//     } else {
//         text += i + "\n";
//     }
// }

// console.log(text);