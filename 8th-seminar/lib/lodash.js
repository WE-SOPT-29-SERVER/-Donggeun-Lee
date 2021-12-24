const _ = require('lodash');

// _.groupBy: 어떤 배열들을 특정 기준으로 묶기
console.log(_.groupBy([6.1, 4.2, 6.3], Math.floor));
console.log(_.groupBy(['one', 'two', 'three'], 'length'));

// _.partition: 어떤 배열을 특정 기준으로 두 개의 배열로 나누기
const users = [
  { user: 'barney', age: 36, active: false },
  { user: 'fred', age: 40, active: true },
  { user: 'pebbles', age: 1, active: false },
];
const [activeUsers, inactiveUsers] = _.partition(users, (o) => o.active);
console.log(activeUsers);
console.log(inactiveUsers);
