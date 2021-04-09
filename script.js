function clearOutput(){
    document.getElementById("output").innerHTML="0";
}
function removeZero(){
    var value = document.getElementById("output").innerHTML;
    if (value=="0"){
        value = " "
        document.getElementById("output").innerHTML=value;
         
    }  
}
function fordisplay(myvalue){
    removeZero()
    document.getElementById("output").innerHTML+=myvalue
}  
function solve(){
    removeZero()
    var equation = document.getElementById("output").innerHTML;
    var solved = eval(equation);
    document.getElementById("output").innerHTML=solved;
}