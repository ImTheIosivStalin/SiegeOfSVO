function showCategory(category){

    document.querySelectorAll(".vehicle-filter button")
    .forEach(btn=>btn.classList.remove("active"));

    event.target.classList.add("active");

    document.querySelectorAll(".vehicle-card").forEach(card=>{

        if(category==="all"){

            card.style.display="block";
            return;

        }

        if(card.classList.contains(category))
            card.style.display="block";
        else
            card.style.display="none";

    });

}

showCategory("tank");