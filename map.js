let map1 = new Map();
map1.set('a',10 );
map1.set('b',20)
map1.set('c',30)
map1.set('d',40)

// console.log(map.size)
// console.log(map.get('a'))
// map.delete('a');
// console.log("////////")
// map.delete('b');

// console.log(map);

for(let [key,value] of map1){
    console.log(`${ key } :--> ${value}`);
}