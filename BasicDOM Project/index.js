let h1=document.getElementById("h1");
let p=document.getElementById("p");


function btc(){
    p.textContent = "This is an Example of DOM ";
    h1.style.textDecoration = "line-through"; 
    h1.style.color = "red";
    p.style.color = "#8a09aeff";
}
function btr(){
    p.textContent = null;
    h1.style.textDecoration = "none";
    h1.style.color = "blue";
    
}

