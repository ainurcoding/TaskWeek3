function generate(){
    const inputNumber = document.getElementById("getvalue").value;

    let numberToArray = []

    let count = 0;
    for(i = 0; i < inputNumber; i++){
        count += 1;
        numberToArray.push(count);
    }

    const orderedNumbers = numberToArray.map((number)=>number);
    const squareNumber = numberToArray.map(number => number * number);
    const multipleThree = numberToArray.map(number => number * 3);


    document.getElementById("output1").innerHTML =  orderedNumbers;
    document.getElementById("output2").innerHTML = squareNumber;
    document.getElementById("output3").innerHTML = multipleThree;
}

