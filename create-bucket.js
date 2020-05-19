const AWS = require('aws-sdk');
require('dotenv-safe').config();

const ID = process.env.ID;
const SECRET = process.env.SECRET;

const BUCKET_NAME = 'guig-bucket';

const s3 = new AWS.S3({
  accessKeyId: ID,
  secretAccessKey: SECRET
});

const params = {
  Bucket: BUCKET_NAME
};

s3.createBucket(params, function(err, data) {
  if(err) console.log(err, err.stack);
  else console.log('Bucket criado', data.Location);
});