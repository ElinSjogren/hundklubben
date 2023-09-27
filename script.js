let rattLosen = "qwe123";
let anvandarNamn = "Bella";

window.onload = (event) =>{
  
    let namnRuta = document.getElementById('namn');
    let losenRuta = document.getElementById('losenord');
    const knappen = document.getElementById('loggaInKnapp');

    knappen.addEventListener("click", function(event){
      event.preventDefault();
      let inLosen = losenRuta.innerHTML;
      let inNamn = namnRuta.innerHTML;
      console.log(inLosen + inNamn); 
      localStorage.setItem("losen", losenRuta.innerHTML);
      localStorage.setItem("namn", namnRuta.innerHTML);
    });
};


console.log(localStorage);