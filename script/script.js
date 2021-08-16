console.log('Js Added');

const h2 = document.getElementsByTagName('h2');

for (const item of h2) {
    item.style.color =  'Red';    
    item.style.fontWeight =  '600'; 
    if(item.innerText == "Backpack"){
        item.style.backgroundColor='Yellow'
    }   
};

const cards = document.getElementsByClassName('card')
// console.log(cards);
for (const item of cards) {
    item.style.borderRadius = '30px';
}


function logIt(item){
    const del = item.parentNode.parentNode.getElementsByClassName('card-title');
    console.log(del[0].innerText+' is Deleted');
    item.style.display='None';
}

const btn = document.getElementsByTagName('button');

for (const item of btn) {
    item.addEventListener('click',function(){
        logIt(item);
    });
}