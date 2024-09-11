function PopUp(){
    alert("A7la fedi")
}



var TableaubtnsPlus = document.querySelectorAll('.btnPlus')


for(let i = 0; i<TableaubtnsPlus.length;i++){
    TableaubtnsPlus[i].addEventListener('click',function(){
        TableaubtnsPlus[i].previousElementSibling.innerText++
    })
}


var btnsMoins = document.querySelectorAll(".btnMoins")


for(let i = 0; i<btnsMoins.length;i++){
    btnsMoins[i].addEventListener('click',function(){
        
        if(btnsMoins[i].nextElementSibling.innerText>0){
            btnsMoins[i].nextElementSibling.innerText--
        }

    })
}