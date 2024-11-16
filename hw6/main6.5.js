
function StrToArr(string){
    if (string){
        const split = string.split(' ');
        return split;
    }
    return [''];
}
console.log(StrToArr('Ревуть воли як ясла повні'));


