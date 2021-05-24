function generate(){
    const rawSentences = "hello world oke lorem ipsum dolor. Aku mau belajar react.js. Hey kamu mau kemana?. Kapan kita jalan bareng lagi. Hello all."
    const displayToScreen = document.getElementById("rawSentence").innerHTML= rawSentences;
    const splitSentences = rawSentences.split(". ");

    let input = document.getElementById("getInput").value;
    const getSentences = splitSentences.filter(function(sentence){
        if(sentence.toLowerCase().indexOf(input) !== -1){
            return true;
        }
    });
    document.getElementById("getOutput").innerHTML = getSentences;
    console.log(getSentences);
    // console.log(splitSentences);
}
generate();