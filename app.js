// create a class named Die 
var Die = function(value){
    //property named value
    this.value = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    this.div = document.createElement('div');
    this.h6 = document.createElement('h6');
    this.h6.innerText = this.value;
    this.div.appendChild(this.h6);
    document.getElementById('roll').addEventListener('click', this.rollDie.bind(this));
    this.div.addEventListener('click', this.rollDie.bind(this));
    document.getElementById('sum').addEventListener('click', this.sumDice.bind(this));
    this.div.addEventListener('dblclick', this.removeDice);
    document.body.appendChild(this.div);
}

//random assigns 1-6 to value and updates the div
Die.prototype.rollDie = function() {
    this.value = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    this.h6.innerText = this.value;
}
 
//clicking the generate die button to create a new die object
document.getElementById('create').addEventListener('click', function() {
    new Die();
});

//removes double clicked div
Die.prototype.removeDice = function() {
    this.value = 0;
    this.remove();
}

// alert sum of all dice- in progress
Die.prototype.sumDice = function(){
    alert('This die total is: ' + this.value);
}
