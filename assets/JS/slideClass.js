class SlideShow{

		    //------ changement automatique ---------//
        constructor(){
          this.myPix =[
            'assets/images/FOND_RESTO/1.jpg',
            'assets/images/FOND_RESTO/2.jpg',
            'assets/images/FOND_RESTO/3.jpg',
            'assets/images/FOND_RESTO/4.jpg',
            'assets/images/FOND_RESTO/5.jpg'
          ];
          this.textImg = [
            'Bienvenue chez <h1 id="deliceTropic" style="color:orange">Délice Tropical</h1><p>Nous sommes ravis de vous accueillir dans ce cadre somptueux</p> Profitez des délices gastronomiques tropicaux ainsi que des saveurs épicées.',
           
          '<h1></h1></h1>Consultez nos menus et voyagez au bout du monde<br> Nos cartes vous embarque dans une aventure gustative sans pareil.', 
         
          '<h1></h1>Réservez votre table ainsi que votre jour et "Validez" en cliquant sur le bouton en haut à droite.',
         
          'Après votre réservation vous avez tout de même la possibilité de vous désister à votre convenance 48h avant.', 
         
          '<h1 id="deliceTropic" style="color:orange">Délice Tropical</h1> vous souhaites une bonne ballade culinaire !'
        ];
          
          this.speed = 3000; //vitesse de defilement en milliseconds
          this.i = 1;
          this.interval = 0;

          $('#InfoSlider').html(this.textImg[0]);
          $('#slider').children('img').attr('src', this.myPix[0]).fadeIn();
          
          this.slideShowAuto();
        }
 
        slideShowAuto(){
          this.interval = setInterval(()=>{this.autoPlay(); 
          }, this.speed);
        }

        //------------ fonction autoPlay() assure l'automatisme du slider ------------//
        autoPlay(){
          $('#InfoSlider').html(this.textImg[this.i]);
            $('#slider').children('img').attr('src', this.myPix[this.i]);
            
            this.i += 1; // Augmenter l'index
            if( this.i == this.myPix.length){
              this.i = 0;
            }
        }
}
new SlideShow();
