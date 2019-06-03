
var button = document.querySelector('.button');
var point = document.querySelector('.name');
var stat = document.querySelector('.status');
var boxes = document.querySelectorAll('.box');
var temp;
var p=0;
var sorted;

button.onclick = execute;

function execute(){
    var errorCount=3;
    var turns = document.querySelector('.turns');
    turns.innerHTML = 'Turns Left:' + errorCount;
    button.disabled = true;
    var names = ['SUBHAM','SAM','MIKE','RANJAN','AASHU','SHIVA','RAGINI'];
    var x ='';
    temp = names.slice();
    var index = Math.floor(Math.random()*temp.length);
    var search = temp[index];
    stat.innerHTML = 'Game Started';
    point.innerHTML = 'Search for "' + search +'"';
    names.sort(function(a,b){
        return 0.5 - Math.random();
    });
    sorted = names.slice();
    for(var i=0;i<names.length;i++){
        names[i] = sortString(names[i]);
    };
    for(i=0;i<names.length;i++){
        boxes[i].onmouseover = function(){
            this.innerHTML = names[this.id];
            x = sorted[this.id];
        };
        boxes[i].onmouseout = function(){
            this.innerHTML = "Hidden";
        }
    }
    for(i=0;i<names.length;i++){
       boxes[i].onclick = function(){
        if(errorCount > 1){
            if(x == search){
                temp.splice(index,1);
                index = Math.floor(Math.random()*temp.length);
                search = temp[index];                
                point.innerHTML = 'Search for "' + search +'"';
                this.parentNode.removeChild(this);
            }else{
                errorCount--;
                turns.innerHTML = 'Turns Left:' + errorCount;
            }
            if(temp.length == 0){
                point.innerHTML = 'Game Over';
                var button = document.querySelector('.reset');
                button.textContent = 'Restart';
                stat.parentNode.removeChild(stat);
            }
        }else{
            point.innerHTML = 'Game Over';
            var parent = document.querySelector('.boxes');
            parent.parentNode.removeChild(parent);
            turns.innerHTML = 'Turns Left: 0'
        }
    }
    };
};

function sortString(str){
    var arr = str.split('');
    var sorted = arr.sort(function(a,b){
        return 0.5 - Math.random();
    });
    return sorted.join('');
};

function reset(){
    window.location = "index.html";
}
