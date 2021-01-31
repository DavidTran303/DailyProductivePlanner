

var textBlock = ""
var saveButton; // var used to use id = saveBtn


document.getElementById("text").innerHTML=moment().subtract(3, 'days').calendar();
document.getElementById("text1").innerHTML=moment().subtract(1, 'days').calendar();
document.getElementById("text2").innerHTML=moment().format('llll');
document.getElementById("text3").innerHTML=moment().startOf('day').fromNow(); 
document.getElementById("text4").innerHTML=moment().add(1, 'days').calendar();
