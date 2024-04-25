class ModalChaudes{

    constructor(){
       
        $("#btChaudes").click(this.showChaudes.bind(this));
       
        $("#closeChaudes").click(this.hideChaudes.bind(this));
    }

    showChaudes(){
        $("#chaudes").css({'display':'block'});
        $("#bandeauColorBoissons").css({'display':'none'})
    }
    hideChaudes(){
        $("#chaudes").css({'display':'none'});
        $("#bandeauColorBoissons").css({'display':'block'})

        $("#ensembleBoutons").css({'display':'none'})
    }
}
new ModalChaudes();