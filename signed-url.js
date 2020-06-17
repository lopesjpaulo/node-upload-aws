const AWS = require('aws-sdk');
require('dotenv-safe').config();

const s3 = new AWS.S3({
  accessKeyId: process.env.ID,
  secretAccessKey: process.env.SECRET
});

const params = {
  Bucket: process.env.BUCKETNAME,
  Key: 'example.jpg'
};

s3.getSignedUrl('getObject', params, function (err, url) {
  console.log('Your generated pre-signed URL is', url);
});