var people = [
"Billy Ma",
"Carol Choi",
"Derek Yiu",
"Edward Ma",
"Eric Yu",
"Flora Ho",
"Gigi Tse",
"John Jin",
"Kelvin Lo",
"Kevin Ha",
"Kingsley Chan",
"Millie Chan",
"Polly Law",
"Ronald Chan",
"S C NG",
"Simon Cheng",
"Steve Wong",
"Tim Yau",
"Tom Tsui",
"Vincent Tso",
"Eric Wong",
"Jessie Yeung",
"Ryan Lee",
"Samuel Chan",
"Virilis Xiao",
]

var gift = [
"PS4 Slim 500GB",
"3D Pen + Haagen-Dazs $50 Coupon",
"Backjoy",
"LG 360 CAM",
"Fitbit Charge 2",
"Panasonic - 專業式低周波治療器 EW-6021",
"Logitech MX Master",
"3合1三文治/華夫/燒烤機 ",
"空氣清新機",
"BackBeat Go3",
"SanDisk Ultra II SSD 240GB ",
"Western Digital NEW My Passport ULTRA 2TB",
"Récolte Libre快煮壺 (紅色)",
"POWERUP 3.0 遙控紙飛機",
"暖腳寶 + 頸枕 (Sponsor)",
"Vitantonio Twistea 扭扭泡茶杯 + $50  CouponArome 東海堂",
"Pacific Coffee不倒杯 + StarBuck $25 ",
"Humana 人體工學腰墊",
"暖風機",
"頸枕 + Wellcome Coupon",
"BBQ Machine + $50 Welcome coupon",
"日本Soil珪藻土 one field",
"Instant Camera",
"LG PD261 Pocket Photo Printer",
"RFID Proof Notebook",
]


var Index = [
"0",
"0",
"0",
"0",
"0",
"0",
"0",
"0",
"0",
"0",
"0",
"0",
"0",
"0",
"0",
"0",
"0",
"0",
"0",
"0",
"0",
"-5",
"1",
"1",
"1",
]



console.log("Original Result:");
handSomePrint(shuffle(people),shuffle(gift));

console.log(" \n\n");
console.log("<-------------After replace--------------->")
moveIndex(gift,Index,0);
console.log(" \n\n");



console.log("Final Result:");
handSomePrint(people,gift);




function moveIndex(arrayToBeMoved,changeArray,start){;



	for(var i = 0; i < changeArray.length; i++){
	
		if(typeof changeArray[i] === 'string'){

			start += parseInt(changeArray[i]);	
			// console.log(locationShift);
		}else{
			start += changeArray[i];	
		}
		// 
	}

	console.log("Index Moved: "+start);
	rotate(arrayToBeMoved,start);
	  

}





function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


function rotate( array , times ){

if(times > 0){
  while( times-- ){
    var temp = array.pop();
    array.unshift( temp );
  }
}else if(times < 0){
	var posTime = times * -1;
	while( posTime-- ){
    var temp = array.shift();
    array.push( temp );
  }

}



}


function handSomePrint(people,gift){


	for(var i = 0; i < people.length; i++){

		console.log(people[i] + '---' + gift[i]);

	}

}