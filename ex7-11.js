function determineLeapYear(){
 var year = Number(document.getElementById('year').value);
 if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) 
 {alert('西暦' + year + '年は閏年');}
 else
 {alert('西暦' + year + '年は平年');}
}

