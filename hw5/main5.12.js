let swap = (arr,index1,index2) =>{
    let temp = arr[index1]
    arr[index1] = arr[index2];
    arr[index2] = temp;
    console.log(arr)
    return arr;
}
swap([1,2,3,4],2,1)