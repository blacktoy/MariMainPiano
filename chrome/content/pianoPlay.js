//let me know if someone knew a better alternative way to implement this than using switch statement
//TO DO
//

function playSound(audiourl){
	var adjustvol = document.getElementById('volRange');
	//var audio = new Audio(audiourl);
	var audio = document.createElement('audio');
	audio.src = audiourl;
	audio.play();
	audio.volume = adjustvol.value;
}

function displayTone(toneid){
	var displayKey = document.getElementById('Keys');
	if (displayKey.checked){
		document.getElementById(toneid).style.display = "block";
		setTimeout(function(){document.getElementById(toneid).style.display = "none";}, 200);
	}	
}

function fingerPrint(fingerid){
	document.getElementById(fingerid).style.display = 'block';
	setTimeout(function(){document.getElementById(fingerid).style.display ='none';}, 160);
}

function pressElement(e){
	var targ;
	if(!e){
		e = window.event;
	}
	if (e.target){
		targ = e.target;
	} else if (e.srcElement){
		targ=e.srcElement;
	}
	var tname = targ.id;
	switch (tname){
		case "C2":
		playSound("audio_src/beskhu__c2.wav");
		displayTone('1');
		break;

		case "Csharp2":
		playSound("audio_src/beskhu__csharp2.wav");
		displayTone('2');
		break;

		case "D2":
		playSound("audio_src/beskhu__d2.wav");
		displayTone('3');
		break;

		case "Dsharp2":
		playSound("audio_src/beskhu__dsharp2.wav");
		displayTone('4');
		break;

		case "E2":
		playSound("audio_src/beskhu__e2.wav");
		displayTone('5');
		break;

		case "F2":
		playSound("audio_src/beskhu__f2.wav");
		displayTone('6');
		break;

		case "Fsharp2":
		playSound("audio_src/beskhu__fsharp2.wav");
		displayTone('7');
		break;

		case "G2":
		playSound("audio_src/beskhu__g2.wav");
		displayTone('8');
		break;

		case "Gsharp2":
		playSound("audio_src/beskhu__gsharp2.wav");
		displayTone('9');
		break;

		case "A2":
		playSound("audio_src/beskhu__a2.wav");
		displayTone('10');
		break;

		case "Asharp2":
		playSound("audio_src/beskhu__asharp2.wav");
		displayTone('11');
		break;

		case "B2":
		playSound("audio_src/beskhu__b2.wav");
		displayTone('12');
		break;

		case "C3":
		playSound("audio_src/beskhu__c3.wav");
		displayTone('1');
		break;

		case "Csharp3":
		playSound("audio_src/beskhu__csharp3.wav");
		displayTone('2');
		break;

		case "D3":
		playSound("audio_src/beskhu__d3.wav");
		displayTone('3');
		break;

		case "Dsharp3":
		playSound("audio_src/beskhu__dsharp3.wav");
		displayTone('4');
		break;

		case "E3":
		playSound("audio_src/beskhu__e3.wav");
		displayTone('5');
		break;

		case "F3":
		playSound("audio_src/beskhu__f3.wav");
		displayTone('6');
		break;

		case "Fsharp3":
		playSound("audio_src/beskhu__fsharp3.wav");
		displayTone('7');
		break;

		case "G3":
		playSound("audio_src/beskhu__g3.wav");
		displayTone('8');
		break;

		case "Gsharp3":
		playSound("audio_src/beskhu__gsharp3.wav");
		displayTone('9');
		break;

		case "A3":
		playSound("audio_src/beskhu__a3.wav");
		displayTone('10');
		break;

		case "Asharp3":
		playSound("audio_src/beskhu__asharp3.wav");
		displayTone('11');
		break;

		case "B3":
		playSound("audio_src/beskhu__b3.wav");
		displayTone('12');
		break;

		case "C4":
		playSound("audio_src/beskhu__c4.wav");
		displayTone('1');
		break;
	}
}

window.addEventListener('keydown', detectKey, false);
function detectKey(anEvent){
	var keyInput = document.getElementById('Input-type');
	if(keyInput.checked){
		document.getElementById('Keys').checked = false;
		var keyx = anEvent.keyCode;
		switch(keyx){
			case 81:
			playSound('audio_src/beskhu__c2.wav');
			fingerPrint('notc2');
			break;

			case 87:
			playSound('audio_src/beskhu__csharp2.wav');
			fingerPrint('notcsharp2');
			break;

			case 69:
			playSound('audio_src/beskhu__d2.wav');
			fingerPrint('notd2');
			break;

			case 82:
			playSound('audio_src/beskhu__dsharp2.wav');
			fingerPrint('notdsharp2');
			break;

			case 84:
			playSound('audio_src/beskhu__e2.wav');
			fingerPrint('note2');
			break;

			case 89:
			playSound('audio_src/beskhu__f2.wav');
			fingerPrint('notf2');
			break;

			case 85:
			playSound('audio_src/beskhu__fsharp2.wav');
			fingerPrint('notfsharp2');
			break;

			case 73:
			playSound('audio_src/beskhu__g2.wav');
			fingerPrint('notg2');
			break;

			case 79:
			playSound('audio_src/beskhu__gsharp2.wav');
			fingerPrint('notgsharp2');
			break;

			case 80:
			playSound('audio_src/beskhu__a2.wav');
			fingerPrint('nota2');
			break;

			case 219:
			playSound('audio_src/beskhu__asharp2.wav');
			fingerPrint('notasharp2');
			break;

			case 221:
			playSound('audio_src/beskhu__b2.wav');
			fingerPrint('notb2');
			break;

			case 192:
			playSound('audio_src/beskhu__c3.wav');
			fingerPrint('notc3');
			break;

			case 49:
			playSound('audio_src/beskhu__csharp3.wav');
			fingerPrint('notcsharp3');
			break;

			case 50:
			playSound('audio_src/beskhu__d3.wav');
			fingerPrint('notd3');
			break;

			case 51:
			playSound('audio_src/beskhu__dsharp3.wav');
			fingerPrint('notdsharp3');
			break;

			case 52:
			playSound('audio_src/beskhu__e3.wav');
			fingerPrint('note3');
			break;

			case 53:
			playSound('audio_src/beskhu__f3.wav');
			fingerPrint('notf3');
			break;

			case 54:
			playSound('audio_src/beskhu__fsharp3.wav');
			fingerPrint('notfsharp3');
			break;

			case 55:
			playSound('audio_src/beskhu__g3.wav');
			fingerPrint('notg3');
			break;

			case 56:
			playSound('audio_src/beskhu__gsharp3.wav');
			fingerPrint('notgsharp3');
			break;

			case 57:
			playSound('audio_src/beskhu__a3.wav');
			fingerPrint('nota3');
			break;

			case 48:
			playSound('audio_src/beskhu__asharp3.wav');
			fingerPrint('notasharp3');
			break;

			case 173:
			playSound('audio_src/beskhu__b3.wav');
			fingerPrint('notb3');
			break;

			case 61:
			playSound('audio_src/beskhu__c4.wav');
			fingerPrint('notc4');
			break;

		}
	}
}