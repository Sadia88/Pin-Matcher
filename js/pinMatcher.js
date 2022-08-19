function getPin(){
    const pin= generatePin()
    const pinString= pin+''
    if(pinString.length===4){
        return pin
    }
    else {
        return getPin()
    }
}

function generatePin(){
    const random=Math.round(Math.random()*10000)
    return random
}
document.getElementById('generate-pin').addEventListener('click',function(){
    const pin= getPin() ;
    const showPin=document.getElementById('show-pin')
    showPin.value=pin
})
document.getElementById('calculator').addEventListener('click',function(event){
const number=event.target.innerText
const showNumber=document.getElementById('show-number')

if(isNaN(number)){

if(number==='C'){
    showNumber.value=" "
}
else if(number==='<'){
    
 const digits=(showNumber.value).split('');
 digits.pop();
 const remainingDigits=digits.join('')
 showNumber.value=remainingDigits
}
}


else{ 
    newValue=showNumber.value+number
    showNumber.value=newValue
}
})


document.getElementById('submit-btn').addEventListener('click',function(){

    const showPin=document.getElementById('show-pin').value
   const showNumber=document.getElementById('show-number').value
   const MatchedMassage=document.getElementById('Matched')
   const notMatchedMassage=document.getElementById('notMatched')
    
    if(showPin==showNumber){
        
        MatchedMassage.style.display='block'
        notMatchedMassage.style.display='none'


    }
    else{
        
   
       
        notMatchedMassage.style.display='block'
        MatchedMassage.style.display='none'

    
    }
})