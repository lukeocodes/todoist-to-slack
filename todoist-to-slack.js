
module.exports = function(context, cb) {
  cb(null, { task: context.data.content || ' No title' });
};