function minMaxArray(arr) {
    const obj = {
        min: arr[0],
        max: arr[0]
    }
    for (let key in arr) {
        if (arr[key] > obj.max)
            obj.max = arr[key]
        if (arr[key] < obj.min)
            obj.min = arr[key]
    }
    return obj
}

console.log(minMaxArray([4,3,1,5,6,2]))

/////////////////////////////////////////////////////////////////////////////////////////////////

const repeatCount1 = (arr) => {
    let obj = {}
    for (let key in arr) {
        if(obj[arr[key]])
        {
            obj[arr[key]]++;
        }
        else{
            obj[arr[key]] = 1;
        }
    }
    return obj;
}
console.log(repeatCount1([1,1,2,3,4,5]))

/////////////////////////////////////////////////////////////////////////////////////////////////

const repeatCount2 = (arr) => {
    return arr.reduce(function (prev , current) {
        prev[current] = !prev[current] ? 1 : prev[current] + 1;
        return prev
    } , {})
}
const arr = [1,2,3,4,2,3,4,1,5,6,6,7]
console.log(repeatCount2(arr));

/////////////////////////////////////////////////////////////////////////////////////////////////

const printCount = (number) => {
    const arr = [];
    while(number > 0)
    {
        let digit = number%10;
        number = (number - digit)/10;
        arr.push(digit);
    }
    for (let i = arr.length - 1 ; i >= 0 ; i--) {
        let printed = 0;
        for (let j=0 ; j < arr[i] ; j++)
        {
            printed = printed*10 + arr[i];
        }
        console.log("'" + arr[i] + "' : " + printed)
    }
}

printCount(53291);

/////////////////////////////////////////////////////////////////////////////////////////////////

const stringInside = (string1 , string2) => {
    if (typeof string1 !== 'string' || typeof string2 !== 'string')
        return -1
    if(string2.length > string1.length)
        return -1
    for (let i = 0 ; i <= string1.length - string2.length ; i++) {
        let temp = string1.substr(i , string2.length);
        if (temp === string2) {
            return i;
        }
    }
    return -1
}

console.log(stringInside('abababcdefg' , 'cde'))

/////////////////////////////////////////////////////////////////////////////////////////////////

function starSquare (number) {
    let string = "";
    let newString = "";
    for (let i = 0; i < number; i++) {
        newString = newString + "*"
    }
    string = string + newString + "\n"
    newString = ""
    for (let i = 1; i < number - 1; i++) {
        newString = newString + "*"
        for (let j = 1; j < number - 1; j++) {
            newString = newString + " "
        }
        newString = newString + "*" + "\n"
    }
    string = string + newString + "\n"
    newString = ""
    for (let i = 0; i < number; i++) {
        newString = newString + "*"
    }
    string = string + newString + "\n"
    return string;
}

console.log(starSquare(5))

///////////////////////////////////////////////////////////////////////////////////////////////

function arrayDiff (arr1 , arr2) {
    const diff = [];
    for (let i in arr1)
    {
        let isEqual = false;
        for (let j in arr2)
        {
            if(arr1[i] === arr2[j])
                isEqual = true
        }
        if (!isEqual)
            diff.push(arr1[i])
    }
    return diff
}

const arrayDiff2=  (arr1 , arr2) => {
    return arr1.filter((item) => arr2.indexOf(item) === -1)
}

console.log(arrayDiff([1,2,3,4,5] , [3,5]))
console.log(arrayDiff2([1,2,3,4,5] , [3,5]))

////////////////////////////////////////////////////////////////////////////////////////////////

const moveElement = (arr, index, offset) => {
    if (index + offset > arr.length - 1 || index + offset < 0)
        return -1
    let temp = arr[index]
    arr.splice(index , 1)
    arr.splice(index+offset , 0 , temp)
    return arr
}

console.log(moveElement([1,2,3,4,5] , 3 , -2))

////////////////////////////////////////////////////////////////////////////////////////////////

const reverseString = (string) => {
    return (string.length-1 > 0) ? string[string.length-1] + reverseString(string.substr(0 , string.length-1)) : string[string.length-1]
}
console.log(reverseString("hello"))

////////////////////////////////////////////////////////////////////////////////////////////////

const removeRepeats = (str) => {
    let temp = ""
    for (let i in str) {
        if(temp[temp.length-1] !== str[i])
            temp = temp + str[i]
    }
    return temp
}
console.log(removeRepeats("aaaabbbbbssssb"))

////////////////////////////////////////////////////////////////////////////////////////////////