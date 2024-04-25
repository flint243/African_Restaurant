class ModalFruits{

    constructor(){
       
        $("#btFruits").click(this.showFruits.bind(this));
       
        $("#closeFruits").click(this.hideFruits.bind(this));
    }

    showFruits(){
        $("#fruits").css({'display':'block'});
        $("#bandeauColorDesserts").css({'display':'none'})
        
    }
    hideFruits(){
        $("#fruits").css({'display':'none'});
        $("#bandeauColorDesserts").css({'display':'block'})

        $("#ensembleBoutons").css({'display':'none'})
    }
}
new ModalFruits();