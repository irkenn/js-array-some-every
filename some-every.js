
function hasOddNumber(arr) {
return arr.some(function(i){
    return i % 2 !== 0;
    })
}

function  hasAZero(num) {
    let arr = num.toString();
    arr = arr.split('');
    return arr.some(function(i){
        return i === "0";
    })

}

function hasOnlyOddNumbers(arr) {
    return arr.every(function(i){
        return i % 2 !== 0; 
    })
}

function hasNoDuplicates(arr){
    return arr.every(function(i){    
        return arr.indexOf(i) === arr.lastIndexOf(i);
    })   
}

function hasCertainKey(arr, key) {
    return arr.every(function(i){
        return i[key];
    })
}

function hasCertainValue(arr, key, searchValue) {
    return arr.every(function(i){
        return i[key] === searchValue;
    })
}
