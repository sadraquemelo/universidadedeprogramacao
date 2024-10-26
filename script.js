function trocardeCor () {

    if(document.body.style.backgroundColor === "white") {

        document.body.style.background = "black";
        document.body.style.color = "white"
        
        document.getElementById("cor").textContent = "modo noturno";
    }
     else {
        document.body.style.background = "white";
        document.body.style.color = "black"

        document.getElementById("cor").textContent = "modo claro";
        
    }
}