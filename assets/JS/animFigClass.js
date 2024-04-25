class AnimFig{
	constructor(){
		$('#fig1').mouseover(this.anim1.bind(this));
		$('figcaption1').mouseover(this.anim1.bind(this));

		$('#fig1').mouseout(this.noAnim1.bind(this));
		$('figcaption1').mouseout(this.noAnim1.bind(this));

		$('#fig2').mouseover(this.anim2.bind(this));
		$('figcaption2').mouseover(this.anim2.bind(this));

		$('#fig2').mouseout(this.noAnim2.bind(this));
		$('figcaption2').mouseout(this.noAnim2.bind(this));

		$('#fig3').mouseover(this.anim3.bind(this));
		$('figcaption3').mouseover(this.anim3.bind(this));

		$('#fig3').mouseout(this.noAnim3.bind(this));
		$('figcaption3').mouseout(this.noAnim3.bind(this));

		$('#fig4').mouseover(this.anim4.bind(this));
		$('figcaption4').mouseover(this.anim4.bind(this));

		$('#fig4').mouseout(this.noAnim4.bind(this));
		$('figcaption4').mouseout(this.noAnim4.bind(this));
	}

	anim1(){
		$('#fig1').css({'width':'200px', 'height':'150px', 'transform':'scale(1.7)', 'transition':'all 2s'});
		$('.image1').css({'transform':'scale(1.3)'});
	}

	noAnim1(){
		$('#fig1').css({'width':'200px', 'height':'150px', 'transform':'scale(1)','transition':'all 2s'});
		$('.image1').css({'transform':'scale(1)'});
	}

	anim2(){
		//if(this.figure = 1){
		$('#fig2').css({'width':'200px', 'height':'150px', 'transform':'scale(1.7)','transition':'all 2s'});
		$('.image2').css({'transform':'scale(1.3)'});
	//}
	}

	noAnim2(){
		$('#fig2').css({'width':'200px', 'height':'150px', 'transform':'scale(1)', 'transition':'all 2s'});
		$('.image2').css({'transform':'scale(1)'});
	}

	anim3(){
		//if(this.figure = 1){
		$('#fig3').css({'width':'200px', 'height':'150px', 'transform':'scale(1.7)', 'transition':'all 2s'});
		$('.image3').css({'transform':'scale(1.3)'});
	//}
	}

	noAnim3(){
		$('#fig3').css({'width':'200px', 'height':'150px', 'transform':'scale(1)', 'transition':'all 2s'});
		$('.image3').css({'transform':'scale(1)'});
	}

	anim4(){
		//if(this.figure = 1){
		$('#fig4').css({'width':'200px', 'height':'150px', 'transform':'scale(1.7)', 'transition':'all 2s'});
		$('.image4').css({'transform':'scale(1.3)'});
	//}
	}

	noAnim4(){
		$('#fig4').css({'width':'200px', 'height':'150px', 'transform':'scale(1)', 'transition':'all 2s'});
		$('.image4').css({'transform':'scale(1)'});
	}
}

animfig = new AnimFig();