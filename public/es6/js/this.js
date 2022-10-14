console.log("1번"+this);

function f(){
	console.log("2번"+this);
}
f();
var person={
	name:"홍길동",
	age:25,
	getName: function(){
		console.log("3번"+this);
		
		return this.name;
	}
};

person.getName();

console.log("4번"+typeof this);
console.log("4번"+typeof person);
console.log("5번"+person instanceof Object);
console.log("6번"+this instanceof Window);


/*
//DOM Event handling
function clickLog() {
	console.log("버튼이 클릭되었습니다	");
}

window.onload = function() {
	let btn = document.getElementById("btn");
	btn.addEventListener("click", clickLog);

	let btn2 = document.getElementById("btn2");
	btn2.addEventListener("click", function() {
		btn.removeEventListener("click", clickLog) ;
	});
}
*/

//window.onload = function() {
//
//}
//
//window.addEventListener("load", function() {
//	let btn = document.getElementById("btn");
//	btn.addEventListener("click", function() {
//		console.log(this);
//	})
//});


/* //제이쿼리 방식 
$(function() {
	$("#btn").click(function() {


	})
});
*/













