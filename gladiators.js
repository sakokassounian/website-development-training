
class Gladiator {
    constructor() {
        this.health  = 80;
        this.originalHealth = 80;
        this.power = generateNumber(2,5,1,1)[0];
        this.speed = generateNumber(1,5,1,3)[0];
        this.OriginalSpeed = this.speed
        this.originalPower = this.power
        this.name = faker.name.firstName()+" "+faker.name.lastName();
    }
}





(function () {
    if (!console) {
        console = {};
    }
    var old = console.log;
    var logger = document.getElementById('log');
    console.log = function (message) {
        if (typeof message == 'object') {
            logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : String(message)) + '<br />';
        } else {
            logger.innerHTML += message + '<br />';
        }
    }
})();





let gladNum = prompt("Hail Ceasar! .... Your Majesty! How many  galdiators would you like to see fighting?");
let gladiatorList=[];
let gladIndex=[];

//generate gladiators
for (let i=0;i<gladNum;i++) {
    const gladiator = new Gladiator();
    gladiatorList.push(gladiator);
    gladIndex.push(i);   
}

let temp='';

let timer=0;



gladiatorList.forEach((val,index)=> console.log(index+1+" - "+val.name));
console.log("\n");


while(gladiatorList.length > 1) {


    console.log("------------ time= "+timer+" seconds ------------");
    console.log("\n");

    for (let i=0; i<gladiatorList.length; i=i+2) {
        
     
        
        glad1= gladiatorList[i];
        glad2= gladiatorList[i+1];

        
        let waiter;

        if (glad1===undefined || glad2===undefined) {
        	glad1 ===undefined ? waiter = glad2.name : waiter = glad1.name;     
        	console.log(waiter+" is waiting for an opponent");
        	continue;
        }


        console.log("Gladiators: "+glad1.name+' vs '+ glad2.name)
                
        attacker1 = attack(glad1,glad2);
        glad1=attacker1[0];
        glad2=attacker1[1];

	    
    
        if(glad2.health <= 0 && glad1.health > 0) {
            gladiatorList.splice(i+1,1);
			console.log('Remaining galadiators: '+gladiatorList.length);    
       }


  
       	if (glad2.health > 0 && glad1.health > 0) {
        	attacker2 = attack(glad2,glad1);
        	glad2=attacker2[0];
        	glad1=attacker2[1];
        }



        if(glad1.health <= 0 && glad2.health > 0 ) {
            gladiatorList.splice(i,1);
            console.log('Remaining galadiators: '+gladiatorList.length);       
        }


   
        console.log("\n");
    }

	
    timer++; 
    console.log("\n");
    


}

const winner = gladiatorList[0]
console.log("#######################");
console.log("### Summary of Battle: ###");
console.log("#######################");
console.log("Number of gladiators:"+gladNum);
console.log("winner is: "+winner.name+ " with health of "+winner.health.toFixed(3));





function generateNumber(minVal,maxVal,num,decimalOrder) {
    let arr=[];
    
    for (let i=0; i<num; i++){
        
        arr.push((Math.random() * (minVal - maxVal) + maxVal).toFixed(decimalOrder))
    }    
    return arr.map((x)=>Number(x));
}


function generateName(namelength){
    const letters= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let randomList= generateNumber(1,letters.length,namelength,0);    
    let randomLetters=randomList.map((val)=>letters[val-1]);
    let randomName=randomLetters.reduce((a,b)=> a+b,'');

    return randomName;    

}    





function attack(person1,person2) {

    console.log('['+person1.name+' x '+person1.health.toFixed(1)+']'+' hits ['+person2.name+' x '+person2.health.toFixed(1)+'] with: \n speed:'+person1.speed.toFixed(3)+'\n power:'+person1.power.toFixed(3));        
    //person2.originalHealth = person2.health;
    person2.health = person2.health - person1.power*person1.speed;
    person2.speed  = person2.OriginalSpeed*(person2.health/(person2.originalHealth));


 
    if (person2.health <= 30 && person2.health > 0 ) {person2.speed = 3*person2.speed;}
 
    if (person2.health <= 0) {   
        if (generateNumber(0,1,1,0)[0])  {
            
            person2.health = 50;
            //person2.originalHealth=50;
            person2.speed = person2.OriginalSpeed *(50/80)
            person2.power = person2.originalPower 	 
            console.log("Ceasar shows: 👍 -->"+ person2.name+ " Lives!");

        }

        else{ 
        	console.log("Ceasar shows: 👎 -->"+ person2.name+" Dies!");
            person2.health = 0;
            person2.speed = 0
            person2.power = 0	 

            
        } 
    }
        return [person1,person2];
}













