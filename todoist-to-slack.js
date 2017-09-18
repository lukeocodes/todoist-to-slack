const IncomingWebhook = require('@slack/client').IncomingWebhook;
const slackUrl = '';

module.exports = function (context, cb) {
  var webhook = new IncomingWebhook(slackUrl);
  webhook.send(
    'The ball and chain you another task ^_^ - ' + context.data.content, 
    function(err, header, statusCode, body) {
      if (err) {
        console.log(err);
      } else {
        console.log(statusCode);
      }
    }
  );

  cb(null, { task_created: context.data.content || 'no title' });
}