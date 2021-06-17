/*
lets start with V.W webbage

 */
var name = "essam";
console . log (name)
console . log ('name')

var x=5
var y=12
var sum = x+y

console .log(sum)


alert("Welcome To A V.W Web")

 var car = prompt("Do you have any type of V.W ?(yes or no) ")

 if( car == "yes"){
   document . write("<p>"+"You are with our team"+"</p>")
 }

else{
  document . write ("<p>"+"We Hope to be one of V.W Owner"+"</p>")
}

if (confirm("Do you love v.w ?")) {
  document . write("<p>"+"And we love you "+"</p>")
} else {
  document . write("<p>"+"After you visit our web you will love it"+"</p>")
}


var x = prompt("which type of V.W you prefer from this ( beetle, golf, jetta, bassat, bus?")

while (x != "beetle" && x != "golf" && x != "jetta" && x != "passat" && x != "bus") {
  x = prompt("Wrong name plz try agin beetle, golf, jetta, bassat, bus")
}
if (x == "beetle") {
  var y = prompt("how many time you prefare to see beetle pic ?")

  for (var x = 0; x < y; x++) {
    document.write("<div>" +
      "<h3>" + "Beetle 1967" + "</h3>" + "<img src='https://barrettjacksoncdn.azureedge.net/staging/carlist/items/Fullsize/Cars/238082/238082_Front_3-4_Web.jpg' alt='beetle 1967'>" +
      "</div>")
  }

}
else if (x == "golf") {
  var y = prompt("how many time you prefare to see golf pic ?")
  for (var x = 0; x < y; x++) {
    document.write("<div>" +
      "<h3>" + "Golf mk1 1990" + "</h3>" + "<img src='https://images.honestjohn.co.uk/imagecache/file/crop/1000x660/media/12194366/Volkswagen~Golf~Cabriolet~Mk1~(1).jpg' alt='golf mk1 1990'>" +
      "</div>")
  }

}
else if (x == "jetta") {
  var y = prompt("how many time you prefare to see jetta pic ?")
  for (var x = 0; x < y; x++) {
    document.write("<div>" +
      "<h3>" + "Jetta 1992" + "</h3>" + " <img src='http://img.autoabc.lv/Volkswagen-Jetta/Volkswagen-Jetta_1986_Sedans_15121082220.jpg' alt='Jetta 1992'>" +
      "</div>")
  }
}
else if (x == "passat") {
  var y = prompt("how many time you prefare to see passat pic ?")
  for (var x = 0; x < y; x++) {
    document.write("<div>" +
      "<h3>" + " Passat 1980" + "</h3>" + "<img src='https://i.pinimg.com/originals/73/ff/bf/73ffbf1e8132b6e00cf1839758648525.jpg' alt='Passat 1980'>" +
      "</div>")
  }
}
else if (x == "bus") {
  var y = prompt("how many time you prefare to see bus pic ?")
  for (var x = 0; x < y; x++) {
    document.write("<div>" +
      "<h3>" + "Bus 1970" + "</h3>" + "<img src='https://i.pinimg.com/originals/cc/da/4a/ccda4aaa9aa5d4c0f0ba8161e6909e25.jpg' alt='Bus 1970'>" +
      "</div>")
  }
}

