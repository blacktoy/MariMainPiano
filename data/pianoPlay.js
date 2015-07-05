
$(document).ready(function(){
	
	$('#C2').mousedown(function(){
		var audio = new Audio("audio_src/beskhu__c2.wav");
		audio.play();
		if($('#Keys').is(':checked')){
			$('#1').fadeIn();//css({ display: 'block'});
			$('#1').fadeOut(200);
		}
		if ($('#Input-type').is(':checked')){
			$(document).on('keyup',function(e){
			var keyx=(e.which==81) ? true : false;
			if(keyx){
				var audio = new Audio("audio_src/beskhu__c2.wav");
				audio.play();
			}
			keyx=false;
			$('#Keys').prop('checked', false);
			});
		} else {
			$(document).off('keyup');
		}
	});
	
	$('#Csharp2').mousedown(function(){
		var audio = new Audio("audio_src/beskhu__csharp2.wav");
		audio.play();
		if($('#Keys').is(':checked')){
			$('#2').fadeIn();//css({ display: 'block'});
			$('#2').fadeOut(200);
		}
		if ($('#Input-type').is(':checked')){
			$(document).on('keyup',function(e){
			var keyx=(e.which==87) ? true : false;
			if(keyx){
				var audio = new Audio("audio_src/beskhu__csharp2.wav");
				audio.play();
			} 
			keyx=false;
			$('#Keys').prop('checked', false);
			});
		} else {
			$(document).off('keyup');
		}
	});
	
	$('#D2').mousedown(function(){
		var audio = new Audio("audio_src/beskhu__d2.wav");
		audio.play();
		if( $('#Keys').is(':checked')){
			$('#3').fadeIn();
			$('#3').fadeOut(200);
		} 
		if ($('#Input-type').is(':checked')){
			$(document).on('keyup',function(e){
			var keyx=(e.which==69) ? true : false;
			if(keyx){
				var audio = new Audio("audio_src/beskhu__d2.wav");
				audio.play();
			} 
			keyx=false;
			$('#Keys').prop('checked', false);
			});
		} else {
			$(document).off('keyup');
		}
	});
	
	$('#Dsharp2').mousedown(function(){
		var audio = new Audio("audio_src/beskhu__dsharp2.wav");
		audio.play();
		if( $('#Keys').is(':checked')){
			$('#4').fadeIn();
			$('#4').fadeOut(200);
		}
		if ($('#Input-type').is(':checked')){
			$(document).on('keyup',function(e){
			var keyx=(e.which==82) ? true : false;
			if(keyx){
				var audio = new Audio("audio_src/beskhu__dsharp2.wav");
				audio.play();
			} 
			keyx=false;
			$('#Keys').prop('checked', false);
			});
		} else {
			$(document).off('keyup');
		}
	});
	
	$('#E2').mousedown(function(){
		var audio = new Audio("audio_src/beskhu__e2.wav");
		audio.play();
		if( $('#Keys').is(':checked')){
			$('#5').fadeIn();
			$('#5').fadeOut(200);
		} 
		if ($('#Input-type').is(':checked')){
			$(document).on('keyup',function(e){
			var keyx=(e.which==84) ? true : false;
			if(keyx){
				var audio = new Audio("audio_src/beskhu__e2.wav");
				audio.play();
			}
			keyx=false;			
			$('#Keys').prop('checked', false);
			});
		} else {
			$(document).off('keyup');
		}
	});
	
	$('#F2').mousedown(function(){
		var audio = new Audio("audio_src/beskhu__f2.wav");
		audio.play();
		if( $('#Keys').is(':checked')){
			$('#6').fadeIn();
			$('#6').fadeOut(200);
		}
		if ($('#Input-type').is(':checked')){
			$(document).on('keyup',function(e){
			var keyx=(e.which==89) ? true : false;
			if(keyx){
				var audio = new Audio("audio_src/beskhu__f2.wav");
				audio.play();
			} 
			keyx=false;
			$('#Keys').prop('checked', false);
			});
		} else {
			$(document).off('keyup');
		}
	});
	
	$('#Fsharp2').mousedown(function(){
		var audio = new Audio("audio_src/beskhu__fsharp2.wav");
		audio.play();
		if( $('#Keys').is(':checked')){
			$('#7').fadeIn();
			$('#7').fadeOut(200);
		}
		if ($('#Input-type').is(':checked')){
			$(document).on('keyup',function(e){
			var keyx=(e.which==85) ? true : false;
			if(keyx){
				var audio = new Audio("audio_src/beskhu__fsharp2.wav");
				audio.play();
			}
			keyx=false;
			$('#Keys').prop('checked', false);
			});
		} else {
			$(document).off('keyup');
		}
	});
	
	$('#G2').mousedown(function(){
		var audio = new Audio("audio_src/beskhu__g2.wav");
		audio.play();
		if( $('#Keys').is(':checked')){
			$('#8').fadeIn();
			$('#8').fadeOut(200);
		}
		if ($('#Input-type').is(':checked')){
			$(document).on('keyup',function(e){
			var keyx=(e.which==73) ? true : false;
			if(keyx){
				var audio = new Audio("audio_src/beskhu__g2.wav");
				audio.play();
			}
			keyx=false;
			$('#Keys').prop('checked', false);
			});
		} else {
			$(document).off('keyup');
		}
	});
	
	$('#Gsharp2').mousedown(function(){
		var audio = new Audio("audio_src/beskhu__gsharp2.wav");
		audio.play();
		if( $('#Keys').is(':checked')){
			$('#9').fadeIn();
			$('#9').fadeOut(200);
		}
		if ($('#Input-type').is(':checked')){
			$(document).on('keyup',function(e){
			var keyx=(e.which==79) ? true : false;
			if(keyx){
				var audio = new Audio("audio_src/beskhu__gsharp2.wav");
				audio.play();
			}
			keyx=false;
			$('#Keys').prop('checked', false);
			});
		} else {
			$(document).off('keyup');
		}
	});
	
	$('#A2').mousedown(function(){
		var audio = new Audio("audio_src/beskhu__a2.wav");
		audio.play();
		if( $('#Keys').is(':checked')){
			$('#10').fadeIn();
			$('#10').fadeOut(200);
		}
		if ($('#Input-type').is(':checked')){
			$(document).on('keyup',function(e){
			var keyx=(e.which==80) ? true : false;
			if(keyx){
				var audio = new Audio("audio_src/beskhu__a2.wav");
				audio.play();
			}
			keyx=false;
			$('#Keys').prop('checked', false);
			});
		} else {
			$(document).off('keyup');
		}
	});
	
	$('#Asharp2').mousedown(function(){
		var audio = new Audio("audio_src/beskhu__asharp2.wav");
		audio.play();
		if( $('#Keys').is(':checked')){
			$('#11').fadeIn();
			$('#11').fadeOut(200);
		}
		if ($('#Input-type').is(':checked')){
			$(document).on('keyup',function(e){
			var keyx=(e.which==219) ? true : false;
			if(keyx){
				var audio = new Audio("audio_src/beskhu__asharp2.wav");
				audio.play();
			}
			keyx=false;
			$('#Keys').prop('checked', false);
			});
		} else {
			$(document).off('keyup');
		}
	});
	
	$('#B2').mousedown(function(){
		var audio = new Audio("audio_src/beskhu__b2.wav");
		audio.play();
		if( $('#Keys').is(':checked')){
			$('#12').fadeIn();
			$('#12').fadeOut(200);
		}
		if ($('#Input-type').is(':checked')){
			$(document).on('keyup',function(e){
			var keyx=(e.which==221) ? true : false;
			if(keyx){
				var audio = new Audio("audio_src/beskhu__b2.wav");
				audio.play();
			}
			keyx=false;
			$('#Keys').prop('checked', false);
			});
		} else {
			$(document).off('keyup');
		}
	});
	
	$('#C3').mousedown(function(){
		var audio = new Audio("audio_src/beskhu__c3.wav");
		audio.play();
		if( $('#Keys').is(':checked')){
			$('#1').fadeIn();
			$('#1').fadeOut(200);
		}
		if ($('#Input-type').is(':checked')){
			$(document).on('keyup',function(e){
			var keyx=(e.which==192) ? true : false;
			if(keyx){
				var audio = new Audio("audio_src/beskhu__c3.wav");
				audio.play();
			}
			keyx=false;
			$('#Keys').prop('checked', false);
			});
		} else {
			$(document).off('keyup');
		}
	});
	
	$('#Csharp3').mousedown(function(){
		var audio = new Audio("audio_src/beskhu__csharp3.wav");
		audio.play();
		if( $('#Keys').is(':checked')){
			$('#2').fadeIn();
			$('#2').fadeOut(200);
		}
		if ($('#Input-type').is(':checked')){
			$(document).on('keyup',function(e){
			var keyx=(e.which==49) ? true : false;
			if(keyx){
				var audio = new Audio("audio_src/beskhu__csharp3.wav");
				audio.play();
			}
			keyx=false;
			$('#Keys').prop('checked', false);
			});
		} else {
			$(document).off('keyup');
		}
	});
	
	$('#D3').mousedown(function(){
		var audio = new Audio("audio_src/beskhu__d3.wav");
		audio.play();
		if ($('#Keys').is(':checked')){
			$('#3').fadeIn();
			$('#3').fadeOut(200);
		}
		if ($('#Input-type').is(':checked')){
			$(document).on('keyup',function(e){
			var keyx=(e.which==50) ? true : false;
			if(keyx){
				var audio = new Audio("audio_src/beskhu__d3.wav");
				audio.play();
			}
			keyx=false;
			$('#Keys').prop('checked', false);
			});
		} else {
			$(document).off('keyup');
		}
	});
	
	$('#Dsharp3').mousedown(function(){
		var audio = new Audio("audio_src/beskhu__dsharp3.wav");
		audio.play();
		if ($('#Keys').is(':checked')){
			$('#4').fadeIn();
			$('#4').fadeOut(200);
		}
		if ($('#Input-type').is(':checked')){
			$(document).on('keyup',function(e){
			var keyx=(e.which==51) ? true : false;
			if(keyx){
				var audio = new Audio("audio_src/beskhu__dsharp3.wav");
				audio.play();
			}
			keyx=false;
			$('#Keys').prop('checked', false);
			});
		} else {
			$(document).off('keyup');
		}
	});
	
	$('#E3').mousedown(function(){
		var audio = new Audio("audio_src/beskhu__e3.wav");
		audio.play();
		if ($('#Keys').is(':checked')){
			$('#5').fadeIn();
			$('#5').fadeOut(200);
		}
		if ($('#Input-type').is(':checked')){
			$(document).on('keyup',function(e){
			var keyx=(e.which==52) ? true : false;
			if(keyx){
				var audio = new Audio("audio_src/beskhu__e3.wav");
				audio.play();
			}
			keyx=false;
			$('#Keys').prop('checked', false);
			});
		} else {
			$(document).off('keyup');
		}
	});
	
	$('#F3').mousedown(function(){
		var audio = new Audio("audio_src/beskhu__f3.wav");
		audio.play();
		if ($('#Keys').is(':checked')){
			$('#6').fadeIn();
			$('#6').fadeOut(200);
		}
		if ($('#Input-type').is(':checked')){
			$(document).on('keyup',function(e){
			var keyx=(e.which==53) ? true : false;
			if(keyx){
				var audio = new Audio("audio_src/beskhu__f3.wav");
				audio.play();
			}
			keyx=false;
			$('#Keys').prop('checked', false);
			});
		} else {
			$(document).off('keyup');
		}
	});
	
	$('#Fsharp3').mousedown(function(){
		var audio = new Audio("audio_src/beskhu__fsharp3.wav");
		audio.play();
		if ($('#Keys').is(':checked')){
			$('#7').fadeIn();
			$('#7').fadeOut(200);
		}
		if ($('#Input-type').is(':checked')){
			$(document).on('keyup',function(e){
			var keyx=(e.which==54) ? true : false;
			if(keyx){
				var audio = new Audio("audio_src/beskhu__fsharp3.wav");
				audio.play();
			}
			keyx=false;
			$('#Keys').prop('checked', false);
			});
		} else {
			$(document).off('keyup');
		}
	});
	
	$('#G3').mousedown(function(){
		var audio = new Audio("audio_src/beskhu__g3.wav");
		audio.play();
		if ($('#Keys').is(':checked')){
			$('#8').fadeIn();
			$('#8').fadeOut(200);
		}
		if ($('#Input-type').is(':checked')){
			$(document).on('keyup',function(e){
			var keyx=(e.which==55) ? true : false;
			if(keyx){
				var audio = new Audio("audio_src/beskhu__g3.wav");
				audio.play();
			}
			keyx=false;
			$('#Keys').prop('checked', false);
			});
		} else {
			$(document).off('keyup');
		}
	});
	
	$('#Gsharp3').mousedown(function(){
		var audio = new Audio("audio_src/beskhu__gsharp3.wav");
		audio.play();
		if ($('#Keys').is(':checked')){
			$('#9').fadeIn();
			$('#9').fadeOut(200);
		}
		if ($('#Input-type').is(':checked')){
			$(document).on('keyup',function(e){
			var keyx=(e.which==56) ? true : false;
			if(keyx){
				var audio = new Audio("audio_src/beskhu__gsharp3.wav");
				audio.play();
			}
			keyx=false;
			$('#Keys').prop('checked', false);
			});
		} else {
			$(document).off('keyup');
		}
	});
	
	$('#A3').mousedown(function(){
		var audio = new Audio("audio_src/beskhu__a3.wav");
		audio.play();
		if ($('#Keys').is(':checked')){
			$('#10').fadeIn();
			$('#10').fadeOut(200);
		}
		if ($('#Input-type').is(':checked')){
			$(document).on('keyup',function(e){
			var keyx=(e.which==57) ? true : false;
			if(keyx){
				var audio = new Audio("audio_src/beskhu__a3.wav");
				audio.play();
			}
			keyx=false;
			$('#Keys').prop('checked', false);
			});
		} else {
			$(document).off('keyup');
		}
	});
	
	$('#Asharp3').mousedown(function(){
		var audio = new Audio("audio_src/beskhu__asharp3.wav");
		audio.play();
		if ($('#Keys').is(':checked')){
			$('#11').fadeIn();
			$('#11').fadeOut(200);
		}
		if ($('#Input-type').is(':checked')){
			$(document).on('keyup',function(e){
			var keyx=(e.which==48) ? true : false;
			if(keyx){
				var audio = new Audio("audio_src/beskhu__asharp3.wav");
				audio.play();
			}
			keyx=false;
			$('#Keys').prop('checked', false);
			});
		} else {
			$(document).off('keyup');
		}
	});
	
	$('#B3').mousedown(function(){
		var audio = new Audio("audio_src/beskhu__b3.wav");
		audio.play();
		if ($('#Keys').is(':checked')){
			$('#12').fadeIn();
			$('#12').fadeOut(200);
		}
		if ($('#Input-type').is(':checked')){
			$(document).on('keyup',function(e){
			var keyx=(e.which==173) ? true : false;
			if(keyx){
				var audio = new Audio("audio_src/beskhu__b3.wav");
				audio.play();
			}
			keyx=false;
			$('#Keys').prop('checked', false);
			});
		} else {
			$(document).off('keyup');
		}
	});
	
	$('#C4').mousedown(function(){
		var audio = new Audio("audio_src/beskhu__c4.wav");
		audio.play();
		if ($('#Keys').is(':checked')){
			$('#1').fadeIn();
			$('#1').fadeOut(200);
		}
		if ($('#Input-type').is(':checked')){
			$(document).on('keyup',function(e){
			var keyx=(e.which==61) ? true : false;
			if(keyx){
				var audio = new Audio("audio_src/beskhu__c4.wav");
				audio.play();
			}
			keyx=false;
			$('#Keys').prop('checked', false);
			});
		} else {
			$(document).off('keyup');
		}
	});
});