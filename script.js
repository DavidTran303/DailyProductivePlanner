

var textBlock = ""
var saveButton; // var used to use id = saveBtn

//display date
document.getElementById("text").innerHTML=moment().subtract(3, 'days').calendar();
document.getElementById("text1").innerHTML=moment().subtract(1, 'days').calendar();
document.getElementById("text2").innerHTML=moment().format('llll');
document.getElementById("text3").innerHTML=moment().startOf('day').fromNow(); 
document.getElementById("text4").innerHTML=moment().add(1, 'days').calendar();

//type in boxes
document.addEventListener("click", function(){

localStorage.setItem("LastWeek", document.getElementById("userText").value);
document.getElementById("userText").innerHTML = localStorage.getItem("LastWeek");

localStorage.setItem("Yesterday", document.getElementById("userText1").value);
document.getElementById("userText1").innerHTML = localStorage.getItem("Yesterday");

localStorage.setItem("Today", document.getElementById("userText2").value);
document.getElementById("userText2").innerHTML = localStorage.getItem("Today");

localStorage.setItem("Hours Ago", document.getElementById("userText3").value);
document.getElementById("userText3").innerHTML = localStorage.getItem("Hours Ago");

localStorage.setItem("Tomorrow", document.getElementById("userText4").value);
document.getElementById("userText4").innerHTML = localStorage.getItem("Tomorrow");
}
);



