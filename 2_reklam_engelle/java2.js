var t = new Date();
var saniye=t.getSeconds();
var reklamSure= saniye+10;

function reklamKaldir(){
    var d = new Date();
    var saniye=d.getSeconds();
   
     
    console.log(saniye);
    console.log(reklamSure);
    if(saniye >= reklamSure){ 
    document.getElementById("reklam").style.display="none";
    }
    
    setInterval(reklamKaldir,1000);
   }