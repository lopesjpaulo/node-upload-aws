const AWS = require('aws-sdk');
require('dotenv-safe').config();

const s3 = new AWS.S3({
  accessKeyId: process.env.ID,
  secretAccessKey: process.env.SECRET
});

const params = {
  Bucket: process.env.BUCKETNAME
};

s3.createBucket(params, function(err, data) {
  if(err) console.log(err, err.stack);
  else console.log('Bucket criado', data.Location);
});