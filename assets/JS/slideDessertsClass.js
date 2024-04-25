class SlideShowDesserts{

		    //------ changement automatique ---------//
        constructor(){
          
          this.textImgDesserts = ['<h2>NOS DESSERTS DES TROPIQUES</h2><br><br><span style="font-weight:bold">Sorbet coco. 25EURO</span><br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus blanditiis repellendus quod minima corrupti <br><br><span style="font-weight:bold">Glace à la vanille. 10 EURO</span><br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus blanditiis repellendus quod minima corrupti <br><br><span style="font-weight:bold"> Glace au chocolat. 16 EURO</span><br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus blanditiis repellendus quod minima corrupti<br></br><span style="font-weight:bold">Tarte à l\'ananas. 25 EURO</span><br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus blanditiis repellendus quod minima corrupti.<br></br><span style="font-weight:bold">Salade de fruits. 10 EURO</span><br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus blanditiis repellendus quod minima corrupti.',]
                                  '<h2></h2><br><br><span style="font-weight:bold">Banana split. 8EURO</span><br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus blanditiis repellendus quod minima corrupti <br><br><span style="font-weight:bold">passion paradis. 5 EURO</span>br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus blanditiis repellendus quod minima corrupti <br><br><span style="font-weight:bold"> Crème de la passion. 16EURO</span><br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus blanditiis repellendus quod minima corrupti<br></br><span style="font-weight:bold">Saveur parfumée. 10EURO</span><br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus blanditiis repellendus quod minima corrupti.<br></br><span style="font-weight:bold">Honey suggar. 25 EURO</span><br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus blanditiis repellendus quod minima corrupti.';

          this.speed = 6000; //vitesse de defilement en milliseconds
          this.i = 0;
          this.interval = 1;

          $('#InfoSliderDesserts').css({'fontSize':'1em', 'padding':'30px'}).html(this.textImgDesserts[this.i]);
          $('#bandeauColorDesserts').css({'color':'black', 'backgroundColor':'rgb(2, 72, 81)', 'borderRadius':'10px'});
          this.slideShowAutoDesserts();
        }
 
        slideShowAutoDesserts(){
          this.interval = setInterval(()=>{this.next(); 
          }, this.speed);
        }

        //------------ fonction next() assure l'automatisme du slider ------------//
        next(){
          $('#InfoSliderDesserts').css({'fontSize':'1em'}).html(this.textImgDesserts[this.i]);
          $('bandeauColorDesserts').css({'color':'black', 'backgroundColor':'rgb(2, 72, 81)', 'borderRadius':'10px'});
          this.i += 1; // Augmenter l'index
            if( this.i == this.textImgDesserts.length){
              this.i = 0;
            }
        }
        /*
        prev(){
            $('#InfoSliderDesserts').css({'fontSize':'1em', 'color':'black', 'backgroundColor':'rgb(2, 72, 81)', 'borderRadius':'10px'}).html(this.textImgDesserts[this.i]);
            this.i -= 1; // baisser l'index
            if( this.i == this.textImgDesserts.length){
              this.i = 0;
            }
        }*/

        stop(){
           clearInterval(this.interval);
        }

        play(){
          this.slideShowAutoDesserts();
        }
}
new SlideShowDesserts();
