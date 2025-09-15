function colorchanger() {

var hexcode = ["0","1","2" ,"3","4","5","6","7","8","9","a","b","c","d","e","f"]
var color ="#"

for(var i=0; i<6 ; i++){
    var hexIndex = Math.floor(Math.random() * hexcode.length)
    var color = color + hexcode[hexIndex]
    console.log(hexIndex)
}
console.log(color)
document.body.style.backgroundColor = color;
document.getElementById("hexcode").innerText  = "Your page is now shining with color  : "  +  color ;
}
