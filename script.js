let rattLosen = "qwe123";
let anvandarNamn = "Bella";

window.onload = (event) =>{
  //checka om inloggning finns i localStorage?


  //när vi trycker på logga in ska vi kontrollera värdena
  let knappen = document.getElementById('loggaInKnapp');
  knappen.addEventListener("click", function(){
    
      let namnInmatning = document.getElementById('namn').value;
      let losenInmatning = document.getElementById('losenord').value;

      //OM lösen och namn är rätt spara dem i localStorageoch gör hemlisarna synliga
      if(losenInmatning==rattLosen && namnInmatning == anvandarNamn){

        localStorage.setItem("losen", losenInmatning);
        localStorage.setItem("namn", namnInmatning);
        taFram();
      }
      else{
        //informera användaren att lösen eller användarnamn är fel
        let formular = document.getElementById('loggaInFormular');
        const pElem = document.createElement('p')
        pElem.innerHTML = "Fel användarnamn eller lösenord. :(";
        formular.appendChild(pElem);
      }
    
    });
};

//funktion för att göra innehåll synligt/osynligt
function taFram(){
  document.getElementById('informationSomInloggad').classList.remove('osynlig');
}