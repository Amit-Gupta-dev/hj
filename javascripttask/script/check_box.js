`use strict`


let checkall= document.querySelectorAll(".check_uncheck");

let selectall=document.querySelector("#check_all");

for(let i=0;i<checkall.length;i++)
{let check=0
    checkall[i].addEventListener('change',function(){
       this.checked==false?selectall.checked=false:"";   
    
       if(this.checked==true)
       {

        for(let j=0;j<checkall.length;j++)
        {
            checkall[j].checked==true?check++:"";
           
        }
         check==checkall.length?selectall.checked=true:"";
check=0;
        }
      

    });
}


selectall.addEventListener('change',function(){

    
    if(this.checked==true)
    {
       for(let i=0;i<checkall.length;i++){
     
        checkall[i].checked=true;
       }
    }else 
        {
            for(let i=0;i<checkall.length;i++){
     
                checkall[i].checked=false;
               }   
        }

  
});