//hoisting: 선언전에 사용 ( 언어적 모호성 떄문에 let, const를 통해 버젼업)
//a=10;
//var a;

// scope
// global : 웹 브라우져에서는 window 
// local : function 안에서 var, let, const로 선언한 변수 
// block : 블럭({}) 안에서 var, let, const로 선언한 변수


//global: 웹페이지에서 코드를 읽을떄 생성 되었다가 다른 웹페이지로 이동하면 소멸
//var a;
//let b;
//const c= 10;

//local : function이 실행될때 생성 되었다가 리턴하면 소멸
//function f(){
//	var d;   //== f.d
//	let e;
//	const f= 10;
//}


//block: 블럭({}) 안에서 생성되었따가 블럭 밖에서 소멸
//{
//	var h;
//	let i;
//	const j= 10;
//	
//}

 
 a="a	";
 var b= "b";
 let c= "c";
 const d = "d";
 
 console.log("Global this=====>" +this);
 
 function f(g,h){
	i="i";
	var j = "j";
	let k = "k";
	const l="l";
	 console.log("function this=====>" +this);
}
f(3,4);


{
	m="m";
	var n = "n";
	let o = "o";
	const p  = "p";
		 console.log("block this=====>" +this);
}


var f2= function() {
	let q = 10;
	console.log(q);
	 console.log("f2 function this=====>" +this);
}
console.log(f2);
f2();
window.f2();
console.log(f2.q);











