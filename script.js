

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

localStorage.setItem("Day", document.getElementById("userText").value);

document.getElementById("userText").innerHTML = localStorage.getItem("Day");
}
);


document.addEventListener("click", function(){

localStorage.setItem("Day", document.getElementById("userText1").value);

document.getElementById("userText1").innerHTML = localStorage.getItem("Day");
}
);
