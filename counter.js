let value = 0;
const increase = document.getElementById('increase');
document.body.style.Color = "increase";
const decrease = document.getElementById('decrease');
const reset = document.getElementById('reset');
const textHolder = document.getElementById("value");
textHolder.innerHTML = value;


increase.addEventListener('click', function() {

if (    textHolder.innerHTML = ++value){
    document.getElementById('value').style.color = "green";
}

});

decrease.addEventListener('click', function(){

    if (    textHolder.innerHTML = --value){
        document.getElementById('value').style.color = "red";
    }
    
    });


reset.addEventListener('click', function(){
    textHolder.innerHTML = 0;    
});


