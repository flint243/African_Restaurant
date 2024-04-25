class SlideShowEntrees{

		    //------ changement automatique ---------//
        constructor(){
          
          this.textImg = ['<h2>NOS ENTREES ET HORS D\'OUVRES</h2><br><br><span style="font-weight:bold">TARTE A L\'ANANAS. 25 EURO</span><br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus blanditiis repellendus quod minima corrupti <br><br><span style="font-weight:bold">TIEBOUDIEN. 25 EURO</span><br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus blanditiis repellendus quod minima corrupti <br><br><span style="font-weight:bold"> PAPAYE GARNIE. 25 EURO</span><br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus blanditiis repellendus quod minima corrupti<br></br><span style="font-weight:bold">GLACE VANILLE. 25 EURO</span><br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus blanditiis repellendus quod minima corrupti.<br></br><span style="font-weight:bold">BANANE FLAMBEE. 25 EURO</span><br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus blanditiis repellendus quod minima corrupti.<br><br><span style="font-weight:bold">TAPIOKA AU SUCRE DE CANE. 25 EURO</span><br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus blanditiis repellendus quod minima corrupti',
                        'page 2<h2>NOS ENTREES ET HORS D\'OUVRES </h2> <br><br><span style="font-weight:bold">RAGOUT. 30EURO</span><br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus blanditiis repellendus quod minima corrupti <br><br><span style="font-weight:bold">MAFE. 50EURO</span><br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus blanditiis repellendus quod minima corrupti <br><br><span style="font-weight:bold"> EPINARD AUX CHAMPIGNOS. 25EURO</span><br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus blanditiis repellendus quod minima corrupti<br></br><span style="font-weight:bold">ATIEKE SAUCE ROUGE. 20EURO</span><br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus blanditiis repellendus quod minima corrupti.<br></br><span style="font-weight:bold">POULET MARINE. 25EURO</span><br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus blanditiis repellendus quod minima corrupti.<br><br><span style="font-weight:bold">CRABE FARCIE. 40EURO</span><br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus blanditiis repellendus quod minima corrupti',
                        'page 3<h2>NOS ENTREES ET HORS D\'OUVRES </h2><br><br><span style="font-weight:bold">ESCARGOT GARNIE. 40EURO</span><br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus blanditiis repellendus quod minima corrupti <br><br><span style="font-weight:bold">LEGUME A LA VAPEUR. 20EURO</span><br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus blanditiis repellendus quod minima corrupti <br><br><span style="font-weight:bold"> CANARD AUX CHAMPIGNOS. 25EURO</span><br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus blanditiis repellendus quod minima corrupti<br></br><span style="font-weight:bold">semoule SAUCE ROUGE. 22EURO</span><br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus blanditiis repellendus quod minima corrupti.<br></br><span style="font-weight:bold">SAUTERELLE GRILLEES. 35EURO</span><br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus blanditiis repellendus quod minima corrupti.<br><br><span style="font-weight:bold">GAMBASSES FARCIE. 60EURO</span><br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus blanditiis repellendus quod minima corrupti'];

          this.speed = 6000; //vitesse de defilement en milliseconds
          this.i = 0;
          this.interval = 1;

          $('#InfoSliderEntrees').css({'fontSize':'1em', 'padding':'30px'}).html(this.textImg[this.i]);
          $('#bandeauColorEntrees').css({'color':'black', 'backgroundColor':'rgb(190, 101, 5)', 'borderRadius':'10px'});  
          this.slideShowAuto();
        }
 
        slideShowAuto(){
          this.interval = setInterval(()=>{this.next(); 
          }, this.speed);
        }

        //------------ fonction next() assure l'automatisme du slider ------------//
        next(){
          $('#InfoSliderEntrees').css({'fontSize':'1em', 'padding':'30px'}).html(this.textImg[this.i]);
          $('#bandeauColorEntrees').css({'color':'black', 'backgroundColor':'rgb(190, 101, 5)', 'borderRadius':'10px'});             
            this.i += 1; // Augmenter l'index
            if( this.i == this.textImg.length){
              this.i = 0;
            }
            
        }
        /*prev(){
            $('#InfoSliderEntrees').css({'fontSize':'1em',  'paddingLeft':'150px' ,'paddingTop':'30px', 'paddingBottom':'50px', 'color':'white', 'backgroundColor':' rgb(190, 101, 5)', 'borderRadius':'10px'}).html(this.textImg[this.i]);
          
            this.i -= 1; // baisser l'index
            if( this.i == this.textImg.length){
              this.i = 0;
            }
        }
*/
        stop(){
           clearInterval(this.interval);
        }

        play(){
          this.slideShowAuto();
        }
}
new SlideShowEntrees();
