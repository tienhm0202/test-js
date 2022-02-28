var url = "https://webhook.site/7bcbf5bc-3e0c-442e-9fab-14423c6c3aa9";
var Collector = {
	endpoint: window.location.hostname,
	action: "default",
	service: "facebook",
	userId: "user_id",

	send: function(action) {
		var xmlhttp = new XMLHttpRequest();
		this.action = action;
		var body = JSON.stringify(this);
		console.log(body);
		xmlhttp.open("POST", url);
		xmlhttp.setRequestHeader("Content-Type","application/json");
		xmlhttp.send(body);
	},

	init: function(service, userId) {
		this.service = service;
		this.userId = userId;
	},
}
