let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();
exports.handler = function (event, context, callback) {
	ddb.put({
		TableName: 'hs_user',
		Item: {
            contact_number: event.contact_number,
            age: event.age,
            username: event.username,
            email: event.email,
            first_name: event.first_name,
            last_known_lat: event.last_known_lat,
            last_updated_timestamp: event.last_updated_timestamp,
            last_known_long: event.last_known_long,
            password: event.password,
            last_name: event.last_name,
            gender: event.gender,
            interested_in: event.interested_in,
            user_avatar: event.user_avatar
        }
	}, function (err, data) {
		if (err) {
		callback(err, null);
		} else {
			 callback(null, event);
		}
	});


	callback(null, 'Successfully executed');
}