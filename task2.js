


/*
2nd taks
--------
*/
function Person(name,age){
    this.name = name; 
    this.age = age;
}




let randomPeople=[];
const upperLimit= 50;
let anotherTimer=0;
const population=10;
const letters= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const nameLength= 7;
const timeBin=2;



function createPeople() {        
    
    console.log("t=",anotherTimer,"sec");
    let randomList= generateNumber(letters.length,nameLength);    
    let randomLetters=randomList.map((val)=>letters[val-1]);
    let randomName=randomLetters.reduce((a,b)=> a+b,'');

    let randomAge=generateNumber(upperLimit,1)
    let randomPerson = new Person(randomName,randomAge[0]); 

    randomPeople.push(randomPerson);

    anotherTimer=anotherTimer+2;
    if (anotherTimer<=timeBin*population) {setTimeout(createPeople, timeBin*1000);}
    
}


createPeople();


function generateNumber(maxVal,num) {
    let arr=[];
    
    for (let i=0; i<num; i++){
        let randomDecimal = Math.random(); // between 0 and 0.99999999999999999999
        let decimalValue = (randomDecimal*maxVal)+1; // between 1.00000000000 and 49.999999999999999
        let roundedValue = Math.floor(decimalValue); // between 1 and 50     
        arr.push(roundedValue)
    }    
    return arr;
}