
window.onload=function(){
    let inputtext=document.getElementById("userinput");
    let outputtext=document.getElementById("useroutput");
    let secretcode=document.getElementById("passcode");

    inputtext.oninput=function(){
       
      let temp2=inputtext.value;
      const temp=temp2.split("|");
      let output="";
        for(var i=0;i<temp.length-1;i++){
          let n=(temp[i]-i)/(secretcode.value*12);
          var character=String.fromCharCode(n);
          output=output+character;
        }
      
        outputtext.value=output;
    } 
    
}
