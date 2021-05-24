function generate() {
    let getLetter = [(document.getElementById("getvalue1").value)];
    let findLetter = document.getElementById("getvalue2").value;
    let resultCount = [];
    
    let count = 0;
    const countLetter = getLetter.filter(function(letter){
        letterString = letter.toString();
        for (let i = 0; i < letterString.length; i++) {
            if (letterString.toLowerCase().charAt(i) === findLetter) {
                count += 1;
                resultCount.push(count);
            } 
        }
        document.getElementById("output1").innerHTML = (letterString);
    });

    document.getElementById("output2").innerHTML =(resultCount.length);
}

// generate("ainur ridwan","a");





































// function generate(letter, findLetter) {
//     let getLetter = [letter]
//     let resultCount = [];
    
//     let count = 0;
//     const countLetter = getLetter.filter(function(letter){
//         letterString = letter.toString();
//         for (let i = 0; i < letterString.length; i++) {
//             if (letterString.toLowerCase().charAt(i) === findLetter) {
//                 count += 1;
//                 resultCount.push(count);
//             }
            
//         }
//         console.log(letterString);
//     });

//     console.log(resultCount.length);
// }

// generate("ainur ridwan","a");