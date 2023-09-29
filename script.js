let rattLosen = "qwe123";
let anvandarNamn = "bella";

//funktion för att göra innehåll synligt/osynligt
function taFram(elemId){
  document.getElementById(elemId).classList.remove('osynlig');
}
function taBort(elemId){
  document.getElementById(elemId).classList.add('osynlig');
}

//när 
window.onload = (event) =>{
  //element som vi ska hantera
  let inloggningsText = document.getElementById('inloggadText');
  let knappenIn = document.getElementById('loggaInKnapp');
  let knappenUt = document.getElementById('loggaUtKnapp');
  let formular = document.getElementById('loggaInFormular');
  let p1 = document.createElement('p');
  const pElem = document.createElement('p');
  
  
  
  //checka om inloggning finns i localStorage?
  if(localStorage.inloggad){
    valkommenText();
    inloggning();
  }  
  //när vi trycker på logga in ska vi kontrollera värdena
  knappenIn.addEventListener('click', function(){
    
    let namnInmatning = document.getElementById('namn').value;
    let losenInmatning = document.getElementById('losenord').value;
    
    //OM lösen och namn är rätt spara resultat i localStorage och gör hemlisarna synliga
    if(losenInmatning==rattLosen && namnInmatning == anvandarNamn){
      
      localStorage.setItem('inloggad', 'true');
      valkommenText();
      inloggning(); 
        
    }
    else{
      //informera användaren att lösen eller användarnamn är fel
      pElem.innerHTML = "Fel användarnamn eller lösenord. :(";
      pElem.style.backgroundColor = 'red';
      pElem.style.color = 'white';
      pElem.style.padding = '1rem';
      pElem.style.borderRadius = '1rem';
      formular.appendChild(pElem);
    }
  });

  //ta bort varningstexten om användaren börjar skriva igen
  const inmatning = document.querySelector('input');
  inmatning.addEventListener('input', function(){
    if(pElem.parentNode){
      pElem.parentNode.removeChild(pElem);
    }
  })
  
  //när man trycker på knappen logga ut ska hemlisarna göras osynliga och 
  //texten som meddelat att man var inloggad ska tas bort.
  knappenUt.addEventListener('click', function(){
    localStorage.setItem('inloggad', 'false');
    p1.remove();
    taFram('loggaInFormular');
    taBort('informationSomInloggad');
    taBort('loggaUtKnapp');
  });
  
  
  function inloggning(){
    taFram('informationSomInloggad');
    taBort('loggaInFormular');
    taFram('loggaUtKnapp');
  }
  
  function valkommenText(){
    p1.innerHTML = "Välkommen, du är inloggad :)";
    p1.style.backgroundColor = 'rgb(106, 150, 116)';
    p1.style.display= "block";
    p1.style.width = "fit-content";
    p1.style.padding = "1rem";
    p1.style.color= "white";
    p1.style.borderRadius = "1rem";
    p1.style.margin = "auto";
    p1.id='valkommenText';
    inloggningsText.appendChild(p1);
  }
  
};
  
  
  
  