//Dom elements
const resultEl =document.getElementById('result')
const lengthEl =document.getElementById('length')
const uppercaseEl =document.getElementById('uppercase')
const lowercaseEl =document.getElementById('lowercase')
const numbersEl =document.getElementById('numbers')
const symbolsEl =document.getElementById('symbols')

const genereateEl =document.getElementById('genereate')
const clipboradEl =document.getElementById('clipborad')


const randomFun={
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol:getRandomSymbols
}
console.log(typeof randomFun)
//generate Btn
genereateEl.addEventListener('click',() =>{
    //+ symbol here to parse the string to number
     const length = +lengthEl.value;
     const haslower = lowercaseEl.checked
     const hasupper = uppercaseEl.checked
     const hasnum = numbersEl.checked
     const hasSymbol = symbolsEl.checked

    resultEl.innerHTML = gereratePssword(hasupper,haslower,hasnum,hasSymbol,length)
})




function gereratePssword(upper,lower,number,symbol,length){
        //init pw var
        let generatedPassword = ''
        const typesCount = lower + upper + number + symbol;
          //  console.log('type of count',typesCount)

            //array of object to get every value with key: lower:true etc
        const typesArr = [{upper}, {lower}, {number}, {symbol}].filter(
            item => Object.values(item)[0]
        )
     


            if(typesCount === 0){
                return '';
            }

   
        for(let i =0; i < length ; i += typesCount){
            
        typesArr.forEach(type =>{
    const funcName = Object.keys(type)[0]
  //  console.log('func name',funcName)

    generatedPassword += randomFun[funcName]()
})
}
//console.log('pw', generatedPassword)
    const finalPW =generatedPassword.slice(0,length)
    return finalPW


}


 //getting captial litters //getting small litters 
    //string.fromcharcode is methed to het chars litters or symbols etc
   //multplying it in 26 (numbers of letters) plus the started code.
function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random()* 26) + 97)
}
function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random()* 26) + 65)
}

function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbols(){
    const symbols = '@#$%^*(){}[]<>/,.+'
    return symbols[Math.floor(Math.random() * symbols.length)]
}

//console.log(getRandomLower())
//console.log(getRandomUpper())
//console.log(getRandomNumber())
//console.log(getRandomSymbols())