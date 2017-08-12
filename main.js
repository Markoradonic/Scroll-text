
function sleep (){
        i++;
        if(i > 2){
          i = 0;
            ar = makeText(); // reset
        }
        scroll.innerHTML = "";
        start();
    }

function makeText(){
var text = 'Sublime Text';
var text1 = 'Brackets';
var text2 = 'Atom'
// dobili smo tri Arrays-a od nase tri varijable
var stext = text.split(''); // zelomo da podelomo praznim stringom.
var stext1 = text1.split('');
var stext2 = text2.split('');
var nasArrays = [stext,stext1,stext2];
return  nasArrays;
}

var ar = makeText();
var scroll = document.getElementById('scroll'); // treba nam nas div
var loop; // moramo u memoriji da imamo nasu loop varijablu

var i = 0;
//
function start(){
    if(ar[i].length > 0){
        scroll.innerHTML += ar[i].shift();
        loop = setTimeout(start,200); //  dodelili smo vrednost nasoj loop varijabli.
    }else{
      var ss = setTimeout(sleep,2000);
}
}
start();
