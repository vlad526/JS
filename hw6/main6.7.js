function sortNums(nums,direction){
    if(direction === 'ascending') {
        return nums.sort((a, b) => a - b)
    }
    if(direction === 'descending') {
        return nums.sort((a, b) => b - a)
    }
}
console.log(sortNums([1,2,3,4],'descending'))