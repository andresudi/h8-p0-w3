function groupAnimals(animals) {
    animals.sort();
    var arr_res = [];
    var first_alphabet = animals[0][0];
    var arr_temp = [];
    for (var i = 0; i < animals.length; i++) {
        if (animals[i][0] === first_alphabet) {
            arr_temp.push(animals[i]);
        } else {
            arr_res.push(arr_temp);
            arr_temp = [];
            first_alphabet = animals[i][0];
            arr_temp.push(animals[i]);
            //console.log(arr_res)
        }
    }
    //return arr_res
    if (i === animals.length-1) {
      arr_res.push(arr_temp);
    }
  return arr_res;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]

// bikin a dulu baru sisa nya