var date=new Date();  
var day=date.getDate();  
var month=date.getMonth()+1;  
var year=date.getFullYear();  

document.getElementById('footer-Year').innerHTML=`${day}.${month}.${year}`
