    var kontrol_saniye
    var t = new Date();
    var saniye=t.getSeconds();
    kontrol_saniye=saniye+10;
    

function reklamKaldir(){

    
    
    var d = new Date();
    var saniye=d.getSeconds();    
    
    console.log(saniye);
    console.log(kontrol_saniye);
    if(saniye>=kontrol_saniye){ 
    document.getElementById("reklam").style.display="none";
    }
    setInterval(reklamKaldir,1000);
        
   }