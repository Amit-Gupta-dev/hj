`use strict`

let rand1,rand2;

let submit=document.querySelector("#btn");
let birth=['lower-birth','middle-birth','upper-birth','lower-birth','middle-birth','upper-birth','side-lower-birth','side-upper-birth'];
function rand(){
 rand1=Math.trunc(Math.random()*100);

rand2=Math.trunc(Math.random()*100);

document.querySelector(".rand_1").textContent=rand1;
document.querySelector(".rand_2").textContent=rand2;
}
rand();
document.querySelector(".refresh").addEventListener('click',function(){
rand();

});

submit.addEventListener('click',function(){
let result=Number( document.querySelector("#input").value);
if((rand1+rand2)===result) { 
    console.log("ticket booked")

    
let seat=Math.trunc(Math.random()*73)
let n=0;
for(let i=0;i<result;i++){
    n++;
    n>8?n=1:"";
}

document.querySelector(".seat_no").textContent=`Your Seat No is :: ${seat} ${birth[n-1]}`;
document.querySelector("#ggg").click();
}
 else  { 

document.querySelector("#input").value='';

if(result){document.querySelector(".seat_no").textContent='Wrong Input.. Try Again!';
 document.querySelector("#ggg").click();
 rand();
}else{alert("please enter result");}
}}
);

document.querySelector("#chk_b").addEventListener('click',function(){

   let seat_number=Number(document.querySelector("#seat_number").value);

if(seat_number && seat_number<73)
{  let n=1;
for(let i=1;i<seat_number;i++)
{

    n++;
    n>8?n=1:"";
}
document.querySelector('#birth_detail').textContent=` Your Seat Birth is :: ${birth[n-1]}`;
}
else{document.querySelector('#birth_detail').textContent="Enter Valid Preferred Seat No";}

});

