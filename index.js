var y=1;
function hider(){
    if(y==1){
        document.getElementById("side").style.display="flex";
        document.getElementById("side2").style.display="none";
        return y=0;
    }
    else{
        document.getElementById("side").style.display="none";
        return y=1;
    }
}
var x=1;
function login(){
    if(x==1){
        document.getElementById("login").style.display="flex";
         document.getElementById("side2").style.display="flex";
         document.getElementById("signin").style.display="none";
         document.getElementById("main").style.marginRight="0px";
         
        return x=1;
    }

}

var w=1;
function signin(){
    if(w==1){
        document.getElementById("signin").style.display="flex";
         document.getElementById("side2").style.display="flex";
         document.getElementById("login").style.display="none";
        return w=1;
    }
}
var w=1;
function close1(){
    if(w==1){
        document.getElementById("signin").style.display="none";
         document.getElementById("side2").style.display="none";
         document.getElementById("login").style.display="none";
        return w=1;
    }
}

var t=1;
function home(){
    if(t==1){
        document.getElementById("home").style.display="flex";
        document.getElementById("facebook").style.display="none";
        document.getElementById("astu").style.display="none";
        document.getElementById("about").style.display="none";
        document.getElementById("side").style.display="none";
        return t=1;
    }
}
var t=1;
function facebook(){
    if(t==1){
        document.getElementById("home").style.display="none";
        document.getElementById("facebook").style.display="flex";
        document.getElementById("astu").style.display="none";
        document.getElementById("about").style.display="none";
        document.getElementById("side").style.display="none";
        return t=1;
    }
}
var t=1;
function astu(){
    if(t==1){
        document.getElementById("home").style.display="none";
        document.getElementById("facebook").style.display="none";
        document.getElementById("astu").style.display="flex";
        document.getElementById("about").style.display="none";
        document.getElementById("side").style.display="none";
        return t=1;
    }
}
var t=1;
function about(){
    if(t==1){
        document.getElementById("home").style.display="none";
        document.getElementById("facebook").style.display="none";
        document.getElementById("astu").style.display="none";
        document.getElementById("about").style.display="flex";
        document.getElementById("side").style.display="none";
        return t=1;
    }
}
