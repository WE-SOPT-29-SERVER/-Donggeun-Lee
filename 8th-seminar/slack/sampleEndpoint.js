// import
const slackAPI = require('./slackAPI');

module.exports = async (req, res) => {
  const slackMessage = `[ERROR] [message]`;

  slackAPI.sendMessageToSlack(slackMessage, slackAPI.DEV_WEB_HOOK_ERROR_MONITORING);

  res.status(200);
};
