$(function() {
	$("#btn").click(function(e) {
		console.log("btn target>>>" + e.target);
		console.log("btn bubbles>>>" + e.bubbles);
		console.log("btn cancelable>>>" + e.cancelable);
		console.log("btn currentTarget>>>" + e.currentTarget);
		console.log("btn defaultPreveneted>>>" + e.defaultPreveneted);
		console.log("btn eventPhase>>>" + e.eventPhase);
		console.log("btn timeStamp>>>" + e.timeStamp);
		console.log("btn type>>>" + e.type);
		//e.stopPropagation();



	});
	$("#inner").click(function(e) {
		console.log("btn target>>>" + e.target);
		console.log("btn bubbles>>>" + e.bubbles);
		console.log("btn cancelable>>>" + e.cancelable);
		console.log("btn currentTarget>>>" + e.currentTarget);
		console.log("btn defaultPreveneted>>>" + e.defaultPreveneted);
		console.log("btn eventPhase>>>" + e.eventPhase);
		console.log("btn timeStamp>>>" + e.timeStamp);
		console.log("btn type>>>" + e.type);

	});
	$("#wrapper").click(function(e) {
		console.log("btn target>>>" + e.target);
		console.log("btn bubbles>>>" + e.bubbles);
		console.log("btn cancelable>>>" + e.cancelable);
		console.log("btn currentTarget>>>" + e.currentTarget);
		console.log("btn defaultPreveneted>>>" + e.defaultPreveneted);
		console.log("btn eventPhase>>>" + e.eventPhase);
		console.log("btn timeStamp>>>" + e.timeStamp);
		console.log("btn type>>>" + e.type);

	});

	$("#alink").click(function(e) {
		e.preventDefault();
		location.href = "http://google.com"

	});
});














