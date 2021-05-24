let generate = () => {
    let input = document.getElementById("getvalue1").value;
    let inputArray = input.split("")

    let removeArray = document.getElementById("getvalue2").value;

    const getInputArray = inputArray.filter(function(value/** ,index,arr*/){
        return value !== removeArray;
    })

    /**Note : linter */

    document.getElementById("output1").innerHTML = (getInputArray);
}

generate();