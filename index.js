let randomizeNumberOne = Math.ceil(Math.random() * 6);

let randomizeNumberTwo = Math.ceil(Math.random() * 6);

let imgSource = "./images/dice";

$("img").eq(0).attr("src",""+imgSource+randomizeNumberOne+".png");
$("img").eq(1).attr("src",imgSource+randomizeNumberTwo+".png");

if (randomizeNumberOne > randomizeNumberTwo){
    $("h1").text("🚩 Player 1 wins!");
}else if (randomizeNumberOne < randomizeNumberTwo){
    $("h1").text("Player 2 wins! 🚩");
}else{
    $("h1").text("Draw!");
}

setTimeout(()=>{$("h1").text("Refresh me")},5000);