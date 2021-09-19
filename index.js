// Code your solutions in this file
for (let age = 30; age < 40; age++){
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    //debugger;
}

function writeCards (names, giftType = 'surprise'){
    const namesList = [];
    let i = 0;
    while (i < names.length){
        namesList.push(`Thank you, ${names[i]}, for the wonderful ${giftType} gift!`)
        i++;
    }
    return namesList;

}

function countDown (number){
    if (number >= 0){
        while (number >= 0){
            console.log(number);
            number--;
        }
    }
    
}