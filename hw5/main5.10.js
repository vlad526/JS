let minNumber = (Array) => {
    let min = Array[0];
    for (let i = 1; i < Array.length; i++) {
        let number = Array[i];
        if (number < min) {
            min = number;
        }
    }
    document.write(min)
    return min;
}
minNumber([2,3,4,1,-5,6,0]);