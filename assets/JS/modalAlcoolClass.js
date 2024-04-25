class ModalAlcools{

    constructor(){
       
        $("#btAlcools").click(this.showAlcool.bind(this));
       
        $("#closeAlcools").click(this.hideAlcool.bind(this));
    }

    showAlcool(){
        $("#alcools").css({'display':'block'});
        $("#bandeauColorBoissons").css({'display':'none'})
    }
    hideAlcool(){
        $("#alcools").css({'display':'none'});
        $("#bandeauColorBoissons").css({'display':'block'})

        $("#ensembleBoutons").css({'display':'none'})
        
    }
}
new ModalAlcools();