function openMenu(day) {
    function openMenu(day) {
        /*checking reference*/
        const monday = "monday";
        const tuesday = "tuesday";
        const wednesday = "wednesday";
        const thursday = "thursday";
        const friday = "friday";
  
        /*card content reference*/
        let titleClassic = document.getElementById("title-classic");
        let descClassic = document.getElementById("desc-classic");
        let titleVeggie = document.getElementById("title-veggie");
        let descVeggie = document.getElementById("desc-veggie");
  
        if(day === monday) {
          titleClassic.innerHTML="404 Menu Classique (Lundi)";
          titleVeggie.innerHTML = "404 Menu Végétarien (Lundi)";
          descClassic.innerHTML = "Menu Classique avec un plat classique et des ingredients classiques.";
          descVeggie.innerHTML = "Menu végétarien avec tout comme le menu classique mais végétarien.";
          console.log("click");
        } else if (day === tuesday) {
          titleClassic.innerHTML="404 Menu Classique (Mardi)";
          titleVeggie.innerHTML = "404 Menu Végétarien (Mardi)";
          descClassic.innerHTML = "Menu Classique avec un plat classique et des ingredients classiques.";
          descVeggie.innerHTML = "Menu végétarien avec tout comme le menu classique mais végétarien.";
          console.log("click");
  
        } else if (day === wednesday) {
          titleClassic.innerHTML="404 Menu Classique (Mercredi)";
          titleVeggie.innerHTML = "404 Menu Végétarien (Mercredi)";
          descClassic.innerHTML = "Menu Classique avec un plat classique et des ingredients classiques.";
          descVeggie.innerHTML = "Menu végétarien avec tout comme le menu classique mais végétarien.";
          console.log("click");
  
        } else if (day === thursday) {
          titleClassic.innerHTML="404 Menu Classique (Jeudi)";
          titleVeggie.innerHTML = "404 Menu Végétarien (Jeudi)";
          descClassic.innerHTML = "Menu Classique avec un plat classique et des ingredients classiques.";
          descVeggie.innerHTML = "Menu végétarien avec tout comme le menu classique mais végétarien.";
          console.log("click");
  
        } else if (day === friday) {
          titleClassic.innerHTML="404 Menu Classique (Vendredi)";
          titleVeggie.innerHTML = "404 Menu Végétarien (Vendredi)";
          descClassic.innerHTML = "Menu Classique avec un plat classique et des ingredients classiques.";
          descVeggie.innerHTML = "Menu végétarien avec tout comme le menu classique mais végétarien.";
          console.log("click");
        } 
      }
}
