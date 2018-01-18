let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();
exports.handler = function (event, context, callback) {
	ddb.get({
		TableName: 'hs_user_profile',
		Key: { 'username': event.queryStringParameters.username  }
	}, function (err, data) {
		if (err) {
		  callback(err, null);
		} else {
		 let response = {
        "statusCode": 200,
        "headers": {
            "my_header": "my_value",
			"Access-Control-Allow-Origin": "*"
        },
        "body": JSON.stringify(data),
        "isBase64Encoded": false
    };
           callback(null, response);
		}
	});
}