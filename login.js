var password=document.getElementById("Password");
var letter=document.getElementById("letter");
var capital=document.getElementById("capital");
var number=document.getElementById("number");
var length=document.getElementById("length");
var pattern=document.getElementById("pattern");

password.onfocus=function(){
    document.getElementById("message").style.display="block"
}
password.onblur=function(){
    document.getElementById("message").style.display="none"
}
password.onkeyup=function(){
    // 小寫判斷
    var lowerCaseLetters=/[a-z]/g;
    if(password.value.match(lowerCaseLetters)){
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    }else{
        letter.classList.add("invalid");
        letter.classList.remove("valid");
    }
    // 大寫判斷
    var upperCaseLetter=/[A-Z]/g;
    if(password.value.match(upperCaseLetter)){
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    }else{
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }

    var letterNumber=/[0-9]/g;
    if(password.value.match(letterNumber)){
        number.classList.remove("invalid");
        number.classList.add("valid");
    }else{
        number.classList.remove("valid");
        number.classList.add("invalid");
    }

    var letterLength=8;
    if(password.value.length>letterLength){
        length.classList.remove("invalid");
        length.classList.add("valid");
    }else{
        length.classList.remove("valid");
        length.classList.add("invalid");
    }

    var specialsign=/[!,@]/g;
    if(password.value.match(specialsign)){
        pattern.classList.remove("valid");
        pattern.classList.add("invalid");
    }else{
        pattern.classList.remove("invalid");
        pattern.classList.add("valid");
    }
}
$("#loginBtn").on('click',function(){
    alert($("#Email").val);
})