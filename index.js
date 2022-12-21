function writeCards(arrayOfNames, eventName) {
    let newArray = []
    for (let i = 0; i < arrayOfNames.length; i++) {
        newArray.push(`Thank you, ${arrayOfNames[i]}, for the wonderful ${eventName} gift!`)
    }

    return newArray;
}

function countDown(number){
    while (0 < number) {
        console.log(number);
        number--;
    }

    console.log(number);
}

// countdown(10);
