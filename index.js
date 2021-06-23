function clikme(value){
    var char = document.getElementById(value);
    var inp = document.getElementById("input-text");
    inp.value += char.value;
    //console.log(char.value)

}