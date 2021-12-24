const dayjs = require('dayjs');

console.log(dayjs().format());
console.log(dayjs('1997-02-02').format('[YYYYescape] YYYY-MM-DDTHH:mm:ssZ[Z]'));
console.log(dayjs('1997-02-02').format('DD/MM/YYYY'));
