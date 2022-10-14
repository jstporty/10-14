window.onload = function() {

	let ipaddress = document.getElementById("ipaddress");
	let koreaid = document.getElementById("koreaid");
	let cpnum = document.getElementById("cpnum");
	let yok = document.getElementById("yok");
	let isbn = document.getElementById("isbn");
	
	


	let ipaddressBtn = document.getElementById("ipaddressBtn");
	let koreaidBtn = document.getElementById("koreaidBtn");
	let cpnumBtn = document.getElementById("cpnumBtn");
	let yokBtn = document.getElementById("yokBtn");
	let isbnBtn = document.getElementById("isbnBtn");

	ipaddressBtn.addEventListener("click", function() {
		// 모두숫자
		// ㅁㅁㅁ.ㅁㅁㅁ.ㅁㅁㅁ.ㅁㅁㅁ
		//각 ㅁㅁㅁ은 1~255까지의 숫자

		let ipaddressRegExp =/^((\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])\.){3}(\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])$/
		console.log(ipaddressRegExp.test(ipaddress.value));
	});

	koreaidBtn.addEventListener("click", function() {
		// 모두숫자
		// ㅁㅁㅁㅁㅁㅁ-ㅁㅁㅁㅁㅁㅁㅁ
		// 3~4번째는 월(01~12)
		// 5~6번째는 일(01~31)
		// - 바로뒤의 ㅁ는 1~4 숫자 중 하나
		let koreaidRegExp = /\d{2}(0[1-9]|1[0-2])(0[1-9]|[1-2]\d|3[0-1])-[1-4]\d{6}$/;
		console.log(koreaidRegExp.test(koreaid.value));
	});

	cpnumBtn.addEventListener("click", function() {
		// 모두숫자
		// ㅁㅁㅁ-ㅁㅁㅁㅁ-ㅁㅁㅁㅁ
		// 1~3번째는 010 또는 011
		let cpnumRegExp = /^(010|011)-\d{4}-\d{4}$/;
		console.log(cpnumRegExp.test(cpnum.value));
	});

	yokBtn.addEventListener("click", function() {
		// 바보, 멍청이, 똥개 는 허용하지 않는다.
		let yokRegExp = /(바보)|(멍청이)|(똥개)$/;  // /바보+|멍청이+|똥개&/
		console.log(yokRegExp.test(yok.value));
	});
	
	isbnBtn.addEventListener("click", function() {
		// 바보, 멍청이, 똥개 는 허용하지 않는다.
		let isbnRegExp = / \""  \d{3}-\d{2}=\d-([1][9]\d\d|[2][0][0-2][0-2])-\""-\\d{2}$/; 
		console.log(isbnRegExp.test(isbn.value));
	});


}






