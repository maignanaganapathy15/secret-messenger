
window.onload=function(){
    let inputtext=document.getElementById("userinput");
    let outputtext=document.getElementById("useroutput");
    let secretcode=document.getElementById("passcode");

    inputtext.oninput=function(){
        let temp2=inputtext.value;
        let output="";
        for(var i=0;i<temp2.length;i++){
          var character=temp2.charCodeAt(i)*(secretcode.value*12)+i;
          character=character+"|";
          output=output+character;
        }
        outputtext.value=output;
    } 
    
}
