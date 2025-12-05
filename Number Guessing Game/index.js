let g=Math.ceil(Math.random()*100);

function clicked(){
    let x = document.getElementById("i").value;
    console.log(x)
    if(x==g){
        alert("YOU WIN!");
    }
    else if(x>g){
        alert("Guessed Number is Higher");
    }
    else{
        alert("Guessed Number is Lower");
    }
}