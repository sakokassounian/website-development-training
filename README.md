# gladiator
This is a solution for a JavaSctipt exercise for a concept on creating an RPG which I completed regarding my training in Simply technologies


## task1.js and tasks2.js
Create a class Person with the following properties (name, age). After creating an instance the age of a person should be incremented by 1 every second. Create 4 instances of a person and push them to an array. Write a function that checks every second the age of each person in the array and removes a person from the array whenever age >=40. Create another function that pushes to the array every 2-second new instance of a person with a random age between 1 and 50 and random name.


## gladiators.js
There are X gladiators with the following properties
1. Health - 80-100 (with step=1)
2. Power - 2-5 (with step=0.1)
3. Speed - 1-5 (with step=0.001). 1 means 5 second and 5 means the 1-second interval between each attack
4. Name - (use faker.js to generate random names)

All gladiators start fighting at the same time. Each gladiator hits random gladiator on his turn where his opponent’s health decreases by the amount of gladiator’s power. Whenever any of gladiator dies (health <=0) the battle stops and everybody waits for Caesar's decision: “Finish him” (gladiator leaves the arena) or “Live” (gladiator recovers and get +50 health points). After that battle continues. The attack speed of gladiators decreases with their health with following formula speed = initial_speed * (health/initial_health). When gladiator’s health is in range of 0 - 30 they get furious and their speed triples.

Write a Javascript program to emulate gladiators’ battle. Each attack should be logged in the console like the following line
[Patrick x 50] hits [Frank Smith x 10] with power 3.2
When some of the gladiators is dying log
[Roman Vinchi] dying
When Caesar makes a decision
Caesar showed 👍|👎 to [Roman Vinchi]
When there is a winner log to the console
[Frank Smith] won the battle with health x28

The program should run when calling start() function in the console.

## index.html
This html script runs the gladiators.js scripts and shows the result on the DOM





