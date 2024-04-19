const { S3 } = require('aws-sdk');
const fs = require('fs');

async function getSchema(filename) {
    const s3 = new S3({
      accessKeyId: 'AKIAQGAEIIYEBEORORPT',
      secretAccessKey: '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',
      region: 'us-east-1',
    });
    const getObjectParams = {
      Bucket: 'anitsedusphere',
      Key: filename,
    };
  
    try {
      const response = await s3.getObject(getObjectParams).promise();
      console.log(response.Body);
      fs.writeFileSync('schema.js', response.Body.toString())
      console.log('Download completed successfully.');
    } catch (error) {
      console.error('Error downloading object from S3:', error);
    }
  }


module.exports = getSchema;