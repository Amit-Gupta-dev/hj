`use strict`




// variable declaration

let table_btn=document.querySelector(".btn");
let num;

// set even listener on btn
table_btn.addEventListener('click',function(){
    
 num=Number(document.querySelector("#get_no").value);
 
 if(num){
  
  let table=rev_table='';
  let v=10;
    for(let i=1;i<=10;i++)
      { 

       table+=num*i;
       table+='\n';
       rev_table+=(v*num)+'\n';v--;
   } 
   document.querySelector(".table_result").textContent=`Table is :\n ${table}`;
        document.querySelector(".reverse_table").textContent=`Reverse Tble is :\n${rev_table}`;
   
 }else{
    
    document.querySelector(".reverse_table").textContent="Please Enter Any No";
    document.querySelector(".table_result").textContent=``;
  

}

 

});