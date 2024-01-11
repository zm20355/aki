function determineLeapYear(){
 var year = Number(document.getElementById('year').value);
 var answer711;  
 if ((year % 4 == 0 && nenn % 100 != 0 )|| year % 400 == 0)
 {
   answer711='閏年';}else{answer711 = '平年';
 }  
 document.getElementById('answer7112').innerText = '西暦' + year + '年は' + answer711;
 alert('西暦' + year + '年は' + answer711);
}
