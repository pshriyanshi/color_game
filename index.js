var colors= generateRandomColors(6);
//[

// "rgb(255, 0, 0)",
// "rgb(255, 255, 0)",
// "rgb(0, 255, 0)",
// "rgb(0, 255, 255)",
// "rgb(0, 0, 255)",
// "rgb(255, 0, 255)"

// ]

var square=document.querySelectorAll(".square");
var pickedColor=pickColor();
var colorDisp=document.getElementById("colorDisp");
var messageDisplay=document.querySelector("#message");
var h1= document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var eastBtn= document.querySelector("#easyBtn");
var hardBtn= document.querySelector("#hardBtn");
var noOfSq=6;



easyBtn.addEventListener("click",function(){

hardBtn.classList.remove("selected");
easyBtn.classList.add("selected");
noOfSq=3;
colors=generateRandomColors(noOfSq);
pickedColor=pickColor();

colorDisp.textContent=pickedColor;

for (var i = 0; i < square.length; i++) {
   if(colors[i])
   {
       square[i].style.background=colors[i];
   }
   else
   {
       square[i].style.display="none";
   }
}
});


hardBtn.addEventListener("click",function(){

hardBtn.classList.add("selected");
noOfSq=6;
easyBtn.classList.remove("selected");
colors=generateRandomColors(noOfSq);
pickedColor=pickColor();

colorDisp.textContent=pickedColor;

for (var i = 0; i < square.length; i++) {
   
   
       square[i].style.background=colors[i];
   
   
   
       square[i].style.display="block";
   
}
});


resetButton.addEventListener("click",function(){

   colors=generateRandomColors(6);
   pickedColor=pickColor();
   colorDisp.textContent=pickedColor;
   messageDisplay.textContent="";

   for(var i=0;i<square.length;i++)
{
   square[i].style.backgroundColor=colors[i];
}
h1.style.background="steelblue";
resetButton.textContent="New Colors";
});

colorDisp.textContent=pickedColor;

for(var i=0;i<square.length;i++)
{
   square[i].style.backgroundColor=colors[i];




   square[i].addEventListener("click",function(){

   var clickedColor=	this.style.backgroundColor;

   if(clickedColor===pickedColor)
   {
      message.textContent="Correct";
      colorChange(clickedColor);
      resetButton.textContent="Play Again?";
      h1.style.background=pickedColor;
   }
   
   else{
           this.style.backgroundColor= "#232323";
           message.textContent="Try again";
   }





   });
}

function colorChange(color)
{
   for(var i=0;i<square.length;i++)
{
   square[i].style.backgroundColor=color;
}

 
}

function pickColor()
{
   var rand=Math.floor(Math.random() *colors.length);
   return colors[rand];
}



function generateRandomColors(num)
{
   var arr=[];
   for(var i=0;i<num;i++)
   {
    arr.push(randomColor())
   }
   return arr;
}

function randomColor()
{
   var r=Math.floor(Math.random()*256);
   var g=Math.floor(Math.random()*256);
   var b=Math.floor(Math.random()*256);

   return "rgb(" +r+ ", " +g+ ", " +b+ ")";
}






































// var stLI=document.querySelectorAll("li");

// for(var i=0;i<stLI.length;i++)
// {


// stLI[i].addEventListener("mouseover",function(){

//     this.classList.add("selected");

// });

// stLI[i].addEventListener("mouseout",function(){

// 	this.classList.remove("selected");
// });


// stLI[i].addEventListener("click",function(){

// 	this.classList.toggle("done");
// });

// }
