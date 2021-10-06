const { members } = require('./members');

let yb = []; // yb들만 담길 array
let ob = []; // ob들만 담길 array
let teams = []; // 매칭 된 팀들이 담길 array

// 모든 member가 담겨있는 배열을 yb와 ob로 분리
members.forEach((member) => {
  if (member.group === 'YB') {
    yb.push(member);
  } else {
    ob.push(member);
  }
});

// 비율 비교를 위한 STANDARD_RATIO, numYb, numOb 선언
const STANDARD_RATIO = ob.length / yb.length;
let numYb = 2;
let numOb = 2;

// 반복조건: YB와 OB를 나누기 위한 최소의 수가 보장될 때 까지
while (yb.length >= numYb && ob.length >= numOb) {
  let team = [];

  // numYb에 도달할 때 까지 random으로 pop & push
  for (let i = 0; i < numYb; i++) {
    const ybIndex = Math.floor(Math.random() * yb.length);
    team.push(yb[ybIndex]);
    yb.splice(ybIndex, 1);
  }

  // numOb에 도달할 때 까지 random으로 pop & push
  for (let i = 0; i < numOb; i++) {
    const obIndex = Math.floor(Math.random() * ob.length);
    team.push(ob[obIndex]);
    ob.splice(obIndex, 1);
  }

  // 완성 된 팀을 teams에 push
  teams.push(team);

  // 현재 팀의 YB & OB 비율을 기준 비율(STANDARD_RATIO)과 비교하여, numOb 조절
  const currentRatio = numOb / numYb;
  if (currentRatio > STANDARD_RATIO) {
    numOb -= 1;
  } else if (currentRatio < STANDARD_RATIO) {
    numOb += 1;
  }
}

// 반복문 수행 후 남은 사람들을 마지막 조에 배정
yb.push(...ob);
teams.push(yb);

console.log(teams);
