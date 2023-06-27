
let map=new Map();
console.log(map);
map.set('a',11);
map.set('b',222);
console.log(map);
console.log(map.get('a'));
//map['hi']="helo";
//map[2]="say"; not recommended
console.log(map);
map.delete(2);
console.log("after delete 2",map);
console.log(map.has(2));
console.log(map.has("a"));
map.forEach((value, key) => {
    console.log(`${key} = ${value}`);
  });
