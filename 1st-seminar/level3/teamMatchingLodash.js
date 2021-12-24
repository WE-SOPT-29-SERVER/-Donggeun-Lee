const _ = require('lodash');
const members = require('./members');

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

let [YBs, OBs] = _.partition(members, (member) => member.group === 'YB');
YBs = _.shuffle(YBs);
OBs = _.shuffle(OBs);
console.log(matchingByTeamNumber(5, OBs, YBs));
console.log(matchingByMemberNumber(4, OBs, YBs));
