var Mosambi_price=120, Watermelon_price=150, Grapes_price=160, Avacoda_price=180;
var Mosambi_q=0; Watermelon_q=0; Grapes_q=0; Avacoda_q=0;

document.getElementById("name").addEventListener("keyup",function(){
document.getElementById("name2").innerHTML=this.value;
});

document.getElementById("email").addEventListener("keyup",function(){
document.getElementById("email2").innerHTML=this.value;
});


document.getElementById("Mosambi").addEventListener("keyup",function(){
    //if(this.value==""||this.value==0){
    //    document.getElementById("Billstatement").innerHTML="";
    //}else{

    Mosambi_q = this.value
    document.getElementById("Billstatement").innerHTML = "<tr><td>Mosambi</td><td>Rs.120</td><td>1</td><td>120x1 = 120 </td></tr>";
    //"+Mosambi_price+" </td><td>"+Mosambi_q+"</td><td>"+Mosambi_price+"x"+Mosambi_q+"="
    //+Mosambi_price*Mosambi_q+"</td></tr>";
    //}
 });



 var x = 0;
 var array = Array();
 
 function add_element_to_array()
 {
  array[x] = document.getElementById("amount").innerHTML;
  alert("Bill: " + array[x] + " Added at index " + x);
  x++;
  document.getElementById("amount").innerHTML = "";
 }
 
 function display_array()
 {
    var e = "<hr/>";   
     
    for (var y=0; y<array.length; y++)
    {
      e += "Bill" + y + " = " + array[y] + "<br/>";
    }
    document.getElementById("Result").innerHTML = e;   
 }

 onclick="dispData();" 

 var x = 0;
 var array = Array();

 function add_element_to_array() 
 {
  array[x] = document.getElementById("amount").innerHTML;
  alert("Bill: " + array[x] + " Added at index " + x);
  x++;
  document.getElementById("amount").innerHTML = "";
 }
 
 function display_array()
 {
    var e = "<hr/>";   
     
    for (var y=0; y<array.length; y++)
    {
      e += "Bill" + y + " = " + array[y] + "<br/>";
    }
    document.getElementById("Result").innerHTML = e;   
 }
 var