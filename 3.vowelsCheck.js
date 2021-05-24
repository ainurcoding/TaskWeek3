console.log("test");

let generator = () => {
   
    const inputAlphabet = document.getElementById("getvalue1").value.split("");
    const vowels = ["a","i","u","e","o"];
    
    console.log(inputAlphabet);

    inputAlphabet.forEach(alphabet => {
        if (vowels.includes(alphabet)) {
            console.log("true");
        }
    });

    // const getVowels = vowels.filter(vowel => (vowel === alphabet ? captionTrue: captionFalse));


    let status;

    if (vowels) {
        
    }
    
    // const getInput = inputAlphabet.map(alphabet => {
    //     for (let i = 0; i < vowels.length; i++) {
    //         if (alphabet === vowels[i]) {
    //             value1 = (alphabet +" merupakan huruf vokal");
    //             return true;
    //         }else {
    //             value1 = (alphabet + " bukan merupakan huruf vokal");
    //             return false;
    //         }
    //     }
    // });

    // document.getElementById("output1").innerHTML = (getInput);
}

generator();