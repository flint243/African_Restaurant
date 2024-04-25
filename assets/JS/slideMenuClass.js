class SlideShowMenu{

		    //------ changement automatique ---------//
        constructor(){
          
          this.textImg = ['<h2>NOTRE MENU DELICE</h2><img src="assets/images/plats/MENUS/PLATS/YASSAS/yassa1.jpg" width="80px" class="imgSlide"><br><span style="font-weight:bold">POULET YASSA. 25 EURO</span><br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus blanditiis repellendus quod minima corrupti <br><br><img src="assets/images/plats/MENUS/PLATS/YASSAS/yassa1.jpg" width="80px" class="imgSlide"><br><span style="font-weight:bold">TIEBOUDIEN. 25 EURO</span><br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus blanditiis repellendus quod minima corrupti <br><br><img src="assets/images/plats/MENUS/PLATS/YASSAS/yassa1.jpg" width="80px" class="imgSlide"><br><span style="font-weight:bold"> FRITURE DE PAPAYE. 25 EURO</span><br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus blanditiis repellendus quod minima corrupti<br><br><img src="assets/images/plats/MENUS/PLATS/YASSAS/yassa1.jpg" width="80px" class="imgSlide"><br><span style="font-weight:bold">ATIEKE. 25 EURO</span><br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus blanditiis repellendus quod minima corrupti.<br><br>',
                        '<h2>NOTRE MENU DELICE PAGE 2</h2><img src="assets/images/plats/MENUS/PLATS/YASSAS/yassa1.jpg" width="80px" class="imgSlide"><br><span style="font-weight:bold">RAGOUT. 30EURO</span><br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus blanditiis repellendus quod minima corrupti <br><br><img src="assets/images/plats/MENUS/PLATS/YASSAS/yassa1.jpg" width="80px" class="imgSlide"><br><span style="font-weight:bold">MAFE. 50EURO</span><br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus blanditiis repellendus quod minima corrupti <br><br><img src="assets/images/plats/MENUS/PLATS/YASSAS/yassa1.jpg" width="80px" class="imgSlide"><br><span style="font-weight:bold"> EPINARD AUX CHAMPIGNOS. 25EURO</span><br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus blanditiis repellendus quod minima corrupti<br><br><img src="assets/images/plats/MENUS/PLATS/YASSAS/yassa1.jpg" width="80px" class="imgSlide"><br><span style="font-weight:bold">ATIEKE SAUCE ROUGE. 20EURO</span><br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus blanditiis repellendus quod minima corrupti.<br><br>',
                        '<h2>NOTRE MENU DELICE PAGE 3</h2><img src="assets/images/plats/MENUS/PLATS/YASSAS/yassa1.jpg" width="80px" class="imgSlide"><br><span style="font-weight:bold">ESCARGOT GARNIE. 40EURO</span><br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus blanditiis repellendus quod minima corrupti <br><img src="assets/images/plats/MENUS/PLATS/YASSAS/yassa1.jpg" width="80px" class="imgSlide"><br><span style="font-weight:bold">LEGUME A LA VAPEUR. 20EURO</span><br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus blanditiis repellendus quod minima corrupti <br><br><img src="assets/images/plats/MENUS/PLATS/YASSAS/yassa1.jpg" width="80px" class="imgSlide"><br><span style="font-weight:bold"> CANARD AUX CHAMPIGNOS. 25EURO</span><br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus blanditiis repellendus quod minima corrupti<br><br><img src="assets/images/plats/MENUS/PLATS/YASSAS/yassa1.jpg" width="80px" class="imgSlide"><br><span style="font-weight:bold">semoule SAUCE ROUGE. 22EURO</span><br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus blanditiis repellendus quod minima corrupti.<br><br>'];

          this.speed = 6000; //vitesse de defilement en milliseconds
          this.i = 0;
          this.interval = 1;

          $('#InfoSliderMenu').css({'fontSize':'1em','padding':'30px', 'color':'rgb(240, 115, 6)'}).html(this.textImg[this.i]);
          $('#bandeauColorMenu').css({'color':'black', 'backgroundColor':'rgba(2, 66, 2, 0.993)', 'borderRadius':'10px'});
          $('.imgSlide').css({'borderRadius':'5px'});
          this.slideShowAuto();
        }
 
        slideShowAuto(){
          this.interval = setInterval(()=>{this.next(); 
          }, this.speed);
        }

        //------------ fonction next() assure l'automatisme du slider ------------//
        next(){
          $('#InfoSliderMenu').css({'fontSize':'1em','padding':'30px', 'color':'rgb(240, 115, 6)'}).html(this.textImg[this.i]);
          $('#bandeauColorMenu').css({'color':'black', 'backgroundColor':'rgba(2, 66, 2, 0.993)', 'borderRadius':'10px'});            $('.imgSlide').css({'borderRadius':'5px'});
            this.i += 1; // Augmenter l'index
            if( this.i == this.textImg.length){
              this.i = 0;
            }
            
        }
        /*prev(){
            $('#InfoSliderMenu').css({'fontSize':'1em',  'paddingLeft':'150px', 'paddingTop':'30px', 'paddingBottom':'50px', 'color':'rgb(240, 115, 6)', 'backgroundColor':'rgba(2, 66, 2, 0.993)', 'borderRadius':'10px'}).html(this.textImg[this.i]);
            $('.imgSlide').css({'borderRadius':'5px'});
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
new SlideShowMenu();
