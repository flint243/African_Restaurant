class ModalSansAlcool{

    constructor(){
       
        $("#btSansAlcools").click(this.showSansAlcool.bind(this));
       
        $("#closeSansAlcools").click(this.hideSansAlcool.bind(this));
    }

    showSansAlcool(){
        $("#sansAlcools").css({'display':'block'});
        $("#bandeauColorBoissons").css({'display':'none'})
    }
    hideSansAlcool(){
        $("#sansAlcools").css({'display':'none'});

        $("#bandeauColorBoissons").css({'display':'block'})

        $("#ensembleBoutons").css({'display':'none'})
        
    }
}
new ModalSansAlcool();