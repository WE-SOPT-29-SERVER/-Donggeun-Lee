const members = require('./members').members;

// 배열을 무작위로 섞어주는 함수
const shuffle = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const temp = arr[i];
    arr[i] = arr[randomIndex];
    arr[randomIndex] = temp;
  }
};

// OB와 YB로 나누어주는 함수
const filterOBYB = (arr, OBs, YBs) => {
  arr.forEach((member) => {
    if (member.group === 'OB') {
      OBs.push(member);
    } else {
      YBs.push(member);
    }
  });
};

// 팀 개수에 따라 팀매칭
const matchingByTeamNumber = (numberOfTeam, OBs, YBs) => {
  const teams = [];
  for (let i = 0; i < numberOfTeam; i++) {
    teams.push([]);
  }

  let index = 0;
  for (let i = 0; i < OBs.length; i++) {
    teams[index].push(OBs[i]);
    index++;
    if (index === numberOfTeam) {
      index = 0;
    }
  }

  index = numberOfTeam - 1;
  for (let i = 0; i < YBs.length; i++) {
    teams[index].push(YBs[i]);
    index--;
    if (index === -1) {
      index = numberOfTeam - 1;
    }
  }

  return teams;
};

// 멤버수에 따라 팀매칭
const matchingByMemberNumber = (numberOfMember, OBs, YBs) => {
  const allMembers = OBs.length + YBs.length;
  const numberOfTeam = Math.floor(allMembers / numberOfMember);
  return matchingByTeamNumber(numberOfTeam, OBs, YBs);
};

// main
const OBs = [];
const YBs = [];

filterOBYB(members, OBs, YBs);
shuffle(OBs);
shuffle(YBs);

console.log(matchingByTeamNumber(5, OBs, YBs));
console.log(matchingByMemberNumber(4, OBs, YBs));
