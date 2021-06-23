function toText(value) {
  var char = document.getElementById(value);
  var inp = document.getElementById("input-icon");
  inp.value += char.value;
}
function iconDetect(data) {
  var img = document.createElement("img");
  img.className = "btn";
  img.src = `./img/${data}.svg`;
  var icon = document.getElementById("icon-field");
  icon.appendChild(img);
}

function toIcon() {
  var text = document.getElementById("input-text").value;
  for (var i = 0; i < text.length; i++) {
    switch (text[i]) {
      case "a":
        iconDetect("a");
        break;

      case "b":
        iconDetect("b");
        break;

      case "c":
        iconDetect("c");
        break;

      case "d":
        iconDetect("d");
        break;

      case "e":
        iconDetect("e");
        break;

      case "f":
        iconDetect("f");
        break;

      case "g":
        iconDetect("g");
        break;

      case "h":
        iconDetect("h");
        break;

      case "i":
        iconDetect("i");
        break;

      case "k":
        iconDetect("k");
        break;

      case "l":
        iconDetect("l");
        break;

      case "m":
        iconDetect("m");
        break;

      case "n":
        iconDetect("n");
        break;

      case "o":
        iconDetect("o");
        break;

      case "p":
        iconDetect("p");
        break;

      case "q":
        iconDetect("q");
        break;

      case "r":
        iconDetect("r");
        break;

      case "s":
        iconDetect("s");
        break;

      case "t":
        iconDetect("t");
        break;

      case "u":
        iconDetect("u");
        break;

      case "v":
        iconDetect("v");
        break;

      case "w":
        iconDetect("w");
        break;

      case "x":
        iconDetect("x");
        break;

      case "y":
        iconDetect("y");
        break;

      case "z":
        iconDetect("z");
        break;

      case " ":
        var space = document.createElement("span");
        space.textContent = "  .";
        space.style = "font-size: 30px";
        var icon = document.getElementById("icon-field");
        icon.appendChild(space);
        break;

      default:
        break;
    }
  }
}
