//let me know if someone knew a better alternative way to implement this than using switch statement
//TO DO
//Help page
function pressElement(e){
	var displayKey = document.getElementById('Keys');
	
	var targ;
	if(!e){
		e = window.event;
	}
	if (e.target){
		targ = e.target;
	} else if (e.srcElement){
		targ=e.srcElement;
	}
	var tname;
	tname = targ.id;
	switch (tname){
		case "C2":
		var audio = new Audio("audio_src/beskhu__c2.wav");
		audio.play();
		if (displayKey.checked){
			document.getElementById('1').style.display = "block";
			setTimeout(function(){document.getElementById('1').style.display = "none";}, 200);
		}
		break;

		case "Csharp2":
		var audio = new Audio("audio_src/beskhu__csharp2.wav");
		audio.play();
		if (displayKey.checked){
			document.getElementById('2').style.display = "block";
			setTimeout(function(){document.getElementById('2').style.display = "none";}, 200);
		}
		break;

		case "D2":
		var audio = new Audio("audio_src/beskhu__d2.wav");
		audio.play();
		if (displayKey.checked){
			document.getElementById('3').style.display = "block";
			setTimeout(function(){document.getElementById('3').style.display = "none";}, 200);
		}
		break;

		case "Dsharp2":
		var audio = new Audio("audio_src/beskhu__dsharp2.wav");
		audio.play();
		if (displayKey.checked){
			document.getElementById('4').style.display = "block";
			setTimeout(function(){document.getElementById('4').style.display = "none";}, 200);
		}
		break;

		case "E2":
		var audio = new Audio("audio_src/beskhu__e2.wav");
		audio.play();
		if (displayKey.checked){
			document.getElementById('5').style.display = "block";
			setTimeout(function(){document.getElementById('5').style.display = "none";}, 200);
		}
		break;

		case "F2":
		var audio = new Audio("audio_src/beskhu__f2.wav");
		audio.play();
		if (displayKey.checked){
			document.getElementById('6').style.display = "block";
			setTimeout(function(){document.getElementById('6').style.display = "none";}, 200);
		}
		break;

		case "Fsharp2":
		var audio = new Audio("audio_src/beskhu__fsharp2.wav");
		audio.play();
		if (displayKey.checked){
			document.getElementById('7').style.display = "block";
			setTimeout(function(){document.getElementById('7').style.display = "none";}, 200);
		}
		break;

		case "G2":
		var audio = new Audio("audio_src/beskhu__g2.wav");
		audio.play();
		if (displayKey.checked){
			document.getElementById('8').style.display = "block";
			setTimeout(function(){document.getElementById('8').style.display = "none";}, 200);
		}
		break;

		case "Gsharp2":
		var audio = new Audio("audio_src/beskhu__gsharp2.wav");
		audio.play();
		if (displayKey.checked){
			document.getElementById('9').style.display = "block";
			setTimeout(function(){document.getElementById('9').style.display = "none";}, 200);
		}
		break;

		case "A2":
		var audio = new Audio("audio_src/beskhu__a2.wav");
		audio.play();
		if (displayKey.checked){
			document.getElementById('10').style.display = "block";
			setTimeout(function(){document.getElementById('10').style.display = "none";}, 200);
		}
		break;

		case "Asharp2":
		var audio = new Audio("audio_src/beskhu__asharp2.wav");
		audio.play();
		if (displayKey.checked){
			document.getElementById('11').style.display = "block";
			setTimeout(function(){document.getElementById('11').style.display = "none";}, 200);
		}
		break;

		case "B2":
		var audio = new Audio("audio_src/beskhu__b2.wav");
		audio.play();
		if (displayKey.checked){
			document.getElementById('12').style.display = "block";
			setTimeout(function(){document.getElementById('12').style.display = "none";}, 200);
		}
		break;

		case "C3":
		var audio = new Audio("audio_src/beskhu__c3.wav");
		audio.play();
		if (displayKey.checked){
			document.getElementById('1').style.display = "block";
			setTimeout(function(){document.getElementById('1').style.display = "none";}, 200);
		}
		break;

		case "Csharp3":
		var audio = new Audio("audio_src/beskhu__csharp3.wav");
		audio.play();
		if (displayKey.checked){
			document.getElementById('2').style.display = "block";
			setTimeout(function(){document.getElementById('2').style.display = "none";}, 200);
		}
		break;

		case "D3":
		var audio = new Audio("audio_src/beskhu__d3.wav");
		audio.play();
		if (displayKey.checked){
			document.getElementById('3').style.display = "block";
			setTimeout(function(){document.getElementById('3').style.display = "none";}, 200);
		}
		break;

		case "Dsharp3":
		var audio = new Audio("audio_src/beskhu__dsharp3.wav");
		audio.play();
		if (displayKey.checked){
			document.getElementById('4').style.display = "block";
			setTimeout(function(){document.getElementById('4').style.display = "none";}, 200);
		}
		break;

		case "E3":
		var audio = new Audio("audio_src/beskhu__e3.wav");
		audio.play();
		if (displayKey.checked){
			document.getElementById('5').style.display = "block";
			setTimeout(function(){document.getElementById('5').style.display = "none";}, 200);
		}
		break;

		case "F3":
		var audio = new Audio("audio_src/beskhu__f3.wav");
		audio.play();
		if (displayKey.checked){
			document.getElementById('6').style.display = "block";
			setTimeout(function(){document.getElementById('6').style.display = "none";}, 200);
		}
		break;

		case "Fsharp3":
		var audio = new Audio("audio_src/beskhu__fsharp3.wav");
		audio.play();
		if (displayKey.checked){
			document.getElementById('7').style.display = "block";
			setTimeout(function(){document.getElementById('7').style.display = "none";}, 200);
		}
		break;

		case "G3":
		var audio = new Audio("audio_src/beskhu__g3.wav");
		audio.play();
		if (displayKey.checked){
			document.getElementById('8').style.display = "block";
			setTimeout(function(){document.getElementById('8').style.display = "none";}, 200);
		}
		break;

		case "Gsharp3":
		var audio = new Audio("audio_src/beskhu__gsharp3.wav");
		audio.play();
		if (displayKey.checked){
			document.getElementById('9').style.display = "block";
			setTimeout(function(){document.getElementById('9').style.display = "none";}, 200);
		}
		break;

		case "A3":
		var audio = new Audio("audio_src/beskhu__a3.wav");
		audio.play();
		if (displayKey.checked){
			document.getElementById('10').style.display = "block";
			setTimeout(function(){document.getElementById('10').style.display = "none";}, 200);
		}
		break;

		case "Asharp3":
		var audio = new Audio("audio_src/beskhu__asharp3.wav");
		audio.play();
		if (displayKey.checked){
			document.getElementById('11').style.display = "block";
			setTimeout(function(){document.getElementById('11').style.display = "none";}, 200);
		}
		break;

		case "B3":
		var audio = new Audio("audio_src/beskhu__b3.wav");
		audio.play();
		if (displayKey.checked){
			document.getElementById('12').style.display = "block";
			setTimeout(function(){document.getElementById('12').style.display = "none";}, 200);
		}
		break;

		case "C4":
		var audio = new Audio("audio_src/beskhu__c4.wav");
		audio.play();
		if (displayKey.checked){
			document.getElementById('1').style.display = "block";
			setTimeout(function(){document.getElementById('1').style.display = "none";}, 200);
		}
		break;
	}
}

window.addEventListener('keyup', detectKey, false);
function detectKey(anEvent){
	var keyInput = document.getElementById('Input-type');
	if(keyInput.checked){
		document.getElementById('Keys').checked = false;
		var keyx = anEvent.keyCode;
		switch(keyx){
			case 81:
			var audio = new Audio('audio_src/beskhu__c2.wav');
			audio.play();
			document.getElementById('notc2').style.display = 'block';
			setTimeout(function(){document.getElementById('notc2').style.display ='none';}, 160);
			break;

			case 87:
			var audio = new Audio('audio_src/beskhu__csharp2.wav');
			audio.play();
			document.getElementById('notcsharp2').style.display = 'block';
			setTimeout(function(){document.getElementById('notcsharp2').style.display ='none';}, 160);
			break;

			case 69:
			var audio = new Audio('audio_src/beskhu__d2.wav');
			audio.play();
			document.getElementById('notd2').style.display = 'block';
			setTimeout(function(){document.getElementById('notd2').style.display ='none';}, 160);
			break;

			case 82:
			var audio = new Audio('audio_src/beskhu__dsharp2.wav');
			audio.play();
			document.getElementById('notdsharp2').style.display = 'block';
			setTimeout(function(){document.getElementById('notdsharp2').style.display ='none';}, 160);
			break;

			case 84:
			var audio = new Audio('audio_src/beskhu__e2.wav');
			audio.play();
			document.getElementById('note2').style.display = 'block';
			setTimeout(function(){document.getElementById('note2').style.display ='none';}, 160);
			break;

			case 89:
			var audio = new Audio('audio_src/beskhu__f2.wav');
			audio.play();
			document.getElementById('notf2').style.display = 'block';
			setTimeout(function(){document.getElementById('notf2').style.display ='none';}, 160);
			break;

			case 85:
			var audio = new Audio('audio_src/beskhu__fsharp2.wav');
			audio.play();
			document.getElementById('notfsharp2').style.display = 'block';
			setTimeout(function(){document.getElementById('notfsharp2').style.display ='none';}, 160);
			break;

			case 73:
			var audio = new Audio('audio_src/beskhu__g2.wav');
			audio.play();
			document.getElementById('notg2').style.display = 'block';
			setTimeout(function(){document.getElementById('notg2').style.display ='none';}, 160);
			break;

			case 79:
			var audio = new Audio('audio_src/beskhu__gsharp2.wav');
			audio.play();
			document.getElementById('notgsharp2').style.display = 'block';
			setTimeout(function(){document.getElementById('notgsharp2').style.display ='none';}, 160);
			break;

			case 80:
			var audio = new Audio('audio_src/beskhu__a2.wav');
			audio.play();
			document.getElementById('nota2').style.display = 'block';
			setTimeout(function(){document.getElementById('nota2').style.display ='none';}, 160);
			break;

			case 219:
			var audio = new Audio('audio_src/beskhu__asharp2.wav');
			audio.play();
			document.getElementById('notasharp2').style.display = 'block';
			setTimeout(function(){document.getElementById('notasharp2').style.display ='none';}, 160);
			break;

			case 221:
			var audio = new Audio('audio_src/beskhu__b2.wav');
			audio.play();
			document.getElementById('notb2').style.display = 'block';
			setTimeout(function(){document.getElementById('notb2').style.display ='none';}, 160);
			break;

			case 192:
			var audio = new Audio('audio_src/beskhu__c3.wav');
			audio.play();
			document.getElementById('notc3').style.display = 'block';
			setTimeout(function(){document.getElementById('notc3').style.display ='none';}, 160);
			break;

			case 49:
			var audio = new Audio('audio_src/beskhu__csharp3.wav');
			audio.play();
			document.getElementById('notcsharp3').style.display = 'block';
			setTimeout(function(){document.getElementById('notcsharp3').style.display ='none';}, 160);
			break;

			case 50:
			var audio = new Audio('audio_src/beskhu__d3.wav');
			audio.play();
			document.getElementById('notd3').style.display = 'block';
			setTimeout(function(){document.getElementById('notd3').style.display ='none';}, 160);
			break;

			case 51:
			var audio = new Audio('audio_src/beskhu__dsharp3.wav');
			audio.play();
			document.getElementById('notdsharp3').style.display = 'block';
			setTimeout(function(){document.getElementById('notdsharp3').style.display ='none';}, 160);
			break;

			case 52:
			var audio = new Audio('audio_src/beskhu__e3.wav');
			audio.play();
			document.getElementById('note3').style.display = 'block';
			setTimeout(function(){document.getElementById('note3').style.display ='none';}, 160);
			break;

			case 53:
			var audio = new Audio('audio_src/beskhu__f3.wav');
			audio.play();
			document.getElementById('notf3').style.display = 'block';
			setTimeout(function(){document.getElementById('notf3').style.display ='none';}, 160);
			break;

			case 54:
			var audio = new Audio('audio_src/beskhu__fsharp3.wav');
			audio.play();
			document.getElementById('notfsharp3').style.display = 'block';
			setTimeout(function(){document.getElementById('notfsharp3').style.display ='none';}, 160);
			break;

			case 55:
			var audio = new Audio('audio_src/beskhu__g3.wav');
			audio.play();
			document.getElementById('notg3').style.display = 'block';
			setTimeout(function(){document.getElementById('notg3').style.display ='none';}, 160);
			break;

			case 56:
			var audio = new Audio('audio_src/beskhu__gsharp3.wav');
			audio.play();
			document.getElementById('notgsharp3').style.display = 'block';
			setTimeout(function(){document.getElementById('notgsharp3').style.display ='none';}, 160);
			break;

			case 57:
			var audio = new Audio('audio_src/beskhu__a3.wav');
			audio.play();
			document.getElementById('nota3').style.display = 'block';
			setTimeout(function(){document.getElementById('nota3').style.display ='none';}, 160);
			break;

			case 48:
			var audio = new Audio('audio_src/beskhu__asharp3.wav');
			audio.play();
			document.getElementById('notasharp3').style.display = 'block';
			setTimeout(function(){document.getElementById('notasharp3').style.display ='none';}, 160);
			break;

			case 173:
			var audio = new Audio('audio_src/beskhu__b3.wav');
			audio.play();
			document.getElementById('notb3').style.display = 'block';
			setTimeout(function(){document.getElementById('notb3').style.display ='none';}, 160);
			break;

			case 61:
			var audio = new Audio('audio_src/beskhu__c4.wav');
			audio.play();
			document.getElementById('notc4').style.display = 'block';
			setTimeout(function(){document.getElementById('notc4').style.display ='none';}, 160);
			break;

		}
	}
}