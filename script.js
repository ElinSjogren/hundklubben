let rattLosen = "qwe123";
let anvandarNamn = "bella";

window.onload = (event) =>{
  //checka om inloggning finns i localStorage?
if(localStorage.inloggad = true){
  console.log('true')
  inloggning();
} else console.log(':)')

  //när vi trycker på logga in ska vi kontrollera värdena
  let knappenIn = document.getElementById('loggaInKnapp');
  knappenIn.addEventListener('click', function(){
    
      let namnInmatning = document.getElementById('namn').value;
      let losenInmatning = document.getElementById('losenord').value;

      //OM lösen och namn är rätt spara dem i localStorageoch gör hemlisarna synliga
      if(losenInmatning==rattLosen && namnInmatning == anvandarNamn){

        localStorage.setItem('inloggad', true);
        inloggning();

      }
      else{
        //informera användaren att lösen eller användarnamn är fel
        let formular = document.getElementById('loggaInFormular');
        const pElem = document.createElement('p')
        pElem.innerHTML = "Fel användarnamn eller lösenord. :(";
        pElem.style.backgroundColor = 'red';
        pElem.style.color = 'white';
        pElem.style.padding = '1rem';
        pElem.style.borderRadius = '1rem';
        formular.appendChild(pElem);
      }
    
    });
    let knappenUt = document.getElementById('loggaUtKnapp');
    knappenUt.addEventListener('click', function(){
      localStorage.setItem('inloggad', false);
      taBort('loggaUtKnapp');
      taFram('loggaInFormular');
      taBort('informationsSomInloggad');
    })

};

//funktion för att göra innehåll synligt/osynligt
function inloggning(){
        taFram('informationSomInloggad');
        taBort('loggaInFormular');
        taFram('loggaUtKnapp');
}


function taFram(elemId){
  document.getElementById(elemId).classList.remove('osynlig');
}
function taBort(elemId){
  document.getElementById(elemId).classList.add('osynlig');
}

