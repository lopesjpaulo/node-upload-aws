const fs = require('fs');
const AWS = require('aws-sdk');
require('dotenv-safe').config();

const s3 = new AWS.S3({
  accessKeyId: process.env.ID,
  secretAccessKey: process.env.SECRET
});

const uploadFile = (fileName) => {
  const fileContent = fs.readFileSync(fileName);

  const params = {
    Bucket: process.env.BUCKETNAME,
    Key: 'example.jpg',
    Body: fileContent
  };

  s3.upload(params, function(err, data) {
    if(err) {
      throw err;
    }
    console.log(`Arquivo carregado. ${data.Location}`);
  });
}

uploadFile('example.jpg');
