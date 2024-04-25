class SlideShowBoissons{

		    //------ changement automatique ---------//
        constructor(){
          
          this.textImgBoissons = ['<h2>NOS BOISSONS PARADISIAQUES</h2><br><br><span style="font-weight:bold">Vin rouge. 25 EURO</span><br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus blanditiis repellendus quod minima corrupti <br><br><span style="font-weight:bold">Vin blanc. 25 EURO</span><br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus blanditiis repellendus quod minima corrupti <br><br> <span style="font-weight:bold">Vin rosé. 25 EURO</span><br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus blanditiis repellendus quod minima corrupti<br></br><span style="font-weight:bold">Bordeau. 25 EURO</span><br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus blanditiis repellendus quod minima corrupti.<br></br><span style="font-weight:bold">Cote du Rhone. 25 EURO</span><br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus blanditiis repellendus quod minima corrupti.',
                                  '<h2></h2><br><br><br><span style="font-weight:bold">Vin rouge. 25 EURO</span><br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus blanditiis repellendus quod minima corrupti <br><br><span style="font-weight:bold">Vin blanc. 25 EURO</span><br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus blanditiis repellendus quod minima corrupti <br><br> <span style="font-weight:bold">Vin rosé. 25 EURO</span><br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus blanditiis repellendus quod minima corrupti<br></br><span style="font-weight:bold">Bordeau. 25 EURO</span><br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus blanditiis repellendus quod minima corrupti.<br></br><span style="font-weight:bold">Cote du Rhone. 25 EURO</span><br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus blanditiis repellendus quod minima corrupti.',
                                  '<h2></h2><br><br><br><span style="font-weight:bold">Coca. 25 EURO</span><br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus blanditiis repellendus quod minima corrupti <br><br><span style="font-weight:bold">Coca zero. 25 EURO</span><br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus blanditiis repellendus quod minima corrupti <br><br><span style="font-weight:bold">Fanta. 25 EURO</span><br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus blanditiis repellendus quod minima corrupti<br></br><span style="font-weight:bold">Jus de pomme. 25 EURO</span><br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus blanditiis repellendus quod minima corrupti.<br></br><span style="font-weight:bold">Cote du Rhone. 25 EURO</span><br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus blanditiis repellendus quod minima corrupti.'];

          this.speed = 6000; //vitesse de defilement en milliseconds
          this.i = 0;
          this.interval = 1;

          $('#InfoSliderBoissons').css({'fontSize':'1em','padding':'30px', 'color':'white'}).html(this.textImgBoissons[this.i]);
          $('#bandeauColorBoissons').css({'color':'black', 'backgroundColor':'rgb(2, 2, 81)', 'borderRadius':'10px'});
          this.slideShowAutoBoissons();
        }
 
        slideShowAutoBoissons(){
          this.interval = setInterval(()=>{this.next(); 
          }, this.speed);
        }

        //------------ fonction next() assure l'automatisme du slider ------------//
        next(){
          $('#InfoSliderBoissons').css({'fontSize':'1em','padding':'30px', 'color':'white'}).html(this.textImgBoissons[this.i]);
          $('#bandeauColorBoissons').css({'color':'black', 'backgroundColor':'rgb(2, 2, 81)', 'borderRadius':'10px'});
            this.i += 1; // Augmenter l'index
            if( this.i == this.textImgBoissons.length){
              this.i = 0;
            }
        }
       /* prev(){
            $('#InfoSliderBoissons').css({'fontSize':'1em', 'paddingLeft':'150px' ,'paddingTop':'30px', 'paddingBottom':'50px', 'color':'white', 'backgroundColor':'rgb(2, 2, 81)'}).html(this.textImgBoissons[this.i]);
            this.i -= 1; // baisser l'index
            if( this.i == this.textImgBoissons.length){
              this.i = 0;
            }
          }
          */

        stop(){
           clearInterval(this.interval);
        }

        play(){
          this.slideShowAutoBoissons();
        }
}
new SlideShowBoissons();
