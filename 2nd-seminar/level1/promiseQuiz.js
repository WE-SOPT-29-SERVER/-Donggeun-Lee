const members = require('./members');

const getOnline = (members) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = members.filter((member) => member.location === 'online');
      resolve(data);
    }, 500);
  });
};

const getOffline = (members) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = members.filter((member) => member.location === 'offline');
      resolve(data);
    }, 500);
  });
};

const getYB = (members) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = members.filter((member) => member.group === 'YB');
      resolve(data);
    }, 500);
  });
};

const getOB = (members) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = members.filter((member) => member.group === 'OB');
      resolve(data);
    }, 500);
  });
};

/*******************
 * Promise 방식 사용 *
 *******************/
getOnline(members).then(getOB).then(console.log); // 간결
getYB(members)
  .then((ybMembers) => getOffline(ybMembers))
  .then((ybOfflineMembers) => console.log(ybOfflineMembers)); // 명시적

/*************************
 * Async & Await 방식 사용 *
 *************************/
const asyncOnlineOB = async (members) => {
  const onlineMembers = await getOnline(members);
  const onlineObMembers = await getOB(onlineMembers);
  console.log(onlineObMembers);
};

const asyncYBoffline = async (members) => {
  const ybMembers = await getYB(members);
  const ybOfflineMembers = await getOffline(ybMembers);
  console.log(ybOfflineMembers);
};

asyncOnlineOB(members);
asyncYBoffline(members);
