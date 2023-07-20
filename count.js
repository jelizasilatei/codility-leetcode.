function compareStrings(arr) {
    const string1 = arr[0];
    const string2 = arr[1];
    let count = 0;

    for (i = 0; i < string1.length; i++){
        if (string1[i] === string2[i]){
            count ++;
        }
    }

    return count;
}

console.log(compareStrings(["Jeliza", "Jettza"]));