function form(){
    var userName=document.getElementById("num1").value;
    var passWord=document.getElementById("num2").value;
if(userName=="" && passWord==""){
    alert("Enter username");
    return false;
}if(userName.length<8){
    alert("username should be of minimum 8 charecters")
    return false;
}if(passWord==""){
    alert("enter password");
    return false;
}if(passWord.length<6){
    alert("password should be of 6 charecters")
    return false;
}if(!document.getElementById('num3').checked){
    alert("checkbox not checked")
    return false;
}
else{
    alert("login succesfull")
    return true;
    
}
}