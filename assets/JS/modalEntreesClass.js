class ModalEntrees{

    constructor(){
        $("button#btEntrees").click(this.showEntreess.bind(this));
        
        $(".closeModal").click(this.hideEntrees.bind(this));
    }

    showEntreess(){
        $("#bandeauColorEntrees").css({'display':'block'});
        $("#ensembleBoutons").css({'display':'none'});
        $("#choixCategorie input").css({'color':'white'});
    }
    hideEntrees(){
        $("#bandeauColorEntrees").css({'display':'none'});
        $("#ensembleBoutons").css({'display':'block'})
    }
}
new ModalEntrees();