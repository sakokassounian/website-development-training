/*
1st taks
--------
*/


function Person(name,age){
    this.name = name; 
    this.age = age;
}


let names =["Donald Trump","Vladimir Putin","Justin Bieber","Neymar da Silva Santos Júnior"]
let ages=[35,36,37,38]


let people = names.map((val,index) => new Person(val,ages[index]));

let timer=0;
function addAge() {
    
    console.log("t=",timer,"sec")
    people = people.filter((val) => {val.age++; if(val.age<40) { return val}});
    console.log(...people);    
    if (people.length>0) {setTimeout(addAge, 1000);}
    timer++;
}

addAge()




