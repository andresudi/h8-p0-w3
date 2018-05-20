
function mengelompokkanAngka(arr) {
    var newArr = []
    for (var j = 0; j < 3; j++) {
        newArr.push([])
    }
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0 && arr[i] % 3 !== 0) {
            newArr[0].push(arr[i])
        } else if (arr[i] % 2 !== 0 && arr[i] % 3 !== 0) {
            newArr[1].push(arr[i])
        } else if (arr[i] % 3 === 0) {
            newArr[2].push(arr[i])
        }
    }
    return newArr;
} 

console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]

// CARA LAIN
// MAININ URUTAN

/* function mengelompokkanAngka(arr) {
    var newArray = [];

    for (var i = 0; i < 3; i++) {
        newArray.push([]);
    }

    for (var j = 0; j < arr.length; j++) {
        if (arr[j] % 3 === 0) {
            newArray[2].push(arr[j]);
        } else if (arr[j] % 2 !== 0) {
            newArray[1].push(arr[j]);
        } else if (arr[j] % 2 === 0) {
            newArray[0].push(arr[j]);
        }
        // console.log(arr[j]);
    }

    return newArray;
} */

// BUAT NGERTIIN .push

/* var a = []

a.push([25])
a[0].push(26)
a.push([27])
a[0].push(28)
a.push([])
a[2].push(29)
console.log(a) */