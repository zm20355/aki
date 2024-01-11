function tosi(){
 var nenn = Number(document.getElementById('seirekinenn').value);
 var tosi2;  
 if ((nenn % 4 == 0 && nenn % 100 != 0 )|| nenn % 400 == 0)
 {
   tosi2='閏年';}else{tosi2 = '平年';
 }  
 alert('西暦' +nenn+ '年は' + tosi2);
}
