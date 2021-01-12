var Mosambi_price=120, Watermelon_price=150, Grapes_price=160;
var Mosambi_q=0;

document.getElementById("name").addEventListener("keyup",funtion(){
    document.getElementById("name2").innerHTML=this.value;
});

document.getElementById("email").addEventListener("keyup",funtion(){
    document.getElementById("email2").innerHTML=this.value;
});


document.getElementById("Mosambi").addEventListener("keyup",funtion(){
    Mosambi_q = this.value
    //if(this.value==""||this.value==0)
    document.getElementById("Billstatement").innerHTML = "<tr><td>Mosambi</td><td>Rs. "+Mosambi_price+" </td><td>"+Mosambi_q+"</td><td>"+Mosambi_price+"x"+Mosambi_q+"="
    +Mosambi_price*Mosambi_q+"</td></tr>";
 
 });
