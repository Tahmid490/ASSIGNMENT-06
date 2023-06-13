const search = prompt("search now");

//filter
const result = devs.filter(
  (item) =>
    item.skill === search ||
    item.age >= search ||
    item.location === search ||
    item.income >= search
);


//final data
const finalResult = [];

//get data
result.map((item, index) => {
  finalResult.push(item);
});

//show console

console.table(finalResult);
