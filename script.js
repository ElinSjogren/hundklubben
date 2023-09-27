let rattLosen = "qwe123";
let anvandarNamn = "Bella";

window.onload = (event) =>{
  
  
  let knappen = document.getElementById('loggaInKnapp');
  knappen.addEventListener("click", function(){
    
      let namnInmatning = document.getElementById('namn').innerText;
      let losenRutaInmatning = document.getElementById('losenord').innerText;

      console.dir(namnInmatning, losenRutaInmatning); 
      localStorage.setItem("losen", losenRutaInmatning);
      localStorage.setItem("namn", namnInmatning);
    });
};

// verkar inte funka att få ut väde ur input rutorna?
//eller så funkar inte funktionen alls. :C
