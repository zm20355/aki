function determineLeapYear(){
 var year = Number(document.getElementById('year').value);
 if ((X % 4 == 0 && X % 100 != 0) || (X % 400 == 0)) 
 {alert('西暦' + year + '年は閏年');}
 else
 {alert('西暦' + year + '年は平年');}
}

