


function calculateTotal()
{
        num1 = document.getElementById("J1").value;
        num2 = document.getElementById("quantity1").value;
        num3 = document.getElementById("J2").value;
        num4 = document.getElementById("quantity2").value;
        num5 = document.getElementById("J3").value;
        num6 = document.getElementById("quantity3").value;
        num7 = document.getElementById("J4").value;
        num8 = document.getElementById("quantity4").value;
        document.getElementById("result").innerHTML = num1 * num2 + num3 * num4 + num5 * num6 + num7 * num8 ;
    }

    // //saving data locally 
    // function save() { 
    //         document.getElementById('result').value; 

    //     localStorage.setItem('int', fieldValue); 
    // } 

    // //reading data 
    // function get() { 
    //     var storedValue = localStorage.getItem('int'); 
    //     if (storedValue) { 

    //         document.getElementById( 
    //             'result').value = storedValue; 
    //     } 
    // } 

    
    // let invoice = [];
    // example {id:1592304983049, title: 'Deadpool', year: 2015}
    // const Juicein = (ev)=>{
    //     ev.preventDefault();  //to stop the form submitting
    //     let Juiceinvoice = {
    //         id: Date.now(),
    //         title: document.getElementById('J1').value,
    //         year: document.getElementById('Q1').value
    //     }
    //     Juiceinvoice.push(Juiceinvoice);
    //     document.forms[0].reset(); // to clear the form for the next entries
    //     //document.querySelector('form').reset();

    //     //for display purposes only
    //     console.warn('added' , {Juiceinvoice} );
    //     let pre = document.querySelector('#msg pre');
    //     pre.textContent = '\n' + JSON.stringify(movies, '\t', 2);

    //     //saving to localStorage
    //     localStorage.setItem('MyMovieList', JSON.stringify(movies) );
    // }
    // document.addEventListener('DOMContentLoaded', ()=>{
    //     document.getElementById('submit').addEventListener('click', addMovie);
    // });

    // Store  
localStorage.setItem("eName", "Mosambi"); 
 
// Retrieve  
document.getElementById("result").innerHTML = localStorage.getItem("eName");

var namesArr = [];  
namesArr.push('Mosambi'); //Add the text 'item1' to nameArr
localStorage.setItem('names', JSON.stringify(namesArr)); 


var storedNames = JSON.parse(localStorage.getItem("names")); 