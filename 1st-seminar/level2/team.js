// 팀원의 정보가 담긴 json array
const myTeam = [
  { name: '이동근', live: '경기도 안산', age: 25, hobby: ['누워있기'] },
  { name: '주효식', live: '인천 미추홀구', age: 23, hobby: ['헬스', '영화보기'] },
  { name: '오예원', live: '경기도 수원', age: 18, hobby: ['협곡가기'] },
];

// 팀원의 정보를 출력하는 함수
const introduceTeam = (teamInfo) =>
  teamInfo.forEach((member) => {
    const name = member.name;

    console.log(`팀원의 이름은 ${name}입니다.`);
    console.log(`${name}이 사는 곳은 ${member.live}입니다.`);
    console.log(`${name}의 나이는 ${member.age}살 입니다.`);
    console.log(`${name}의 취미는 ${member.hobby.join(', ')}입니다.`);

    // 마지막 멤버가 아니라면 구분선 추가
    if (member != teamInfo[teamInfo.length - 1]) {
      console.log('*************************');
    }
  });

introduceTeam(myTeam);
