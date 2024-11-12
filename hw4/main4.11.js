function minNumber(Array) {
    let sum = 0;
    for (let item of Array) {
        sum = sum + item;
    }
    console.log(sum);
    return sum;
}
minNumber([2,1,-5,5]);