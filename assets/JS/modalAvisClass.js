class ModalAvis{

    constructor(){
       
        $("#btAvis").click(this.showAvis.bind(this));
       
        $("#closeAvis").click(this.hideAvis.bind(this));
    }

    showAvis(){
        $("#btAvis").css({'display':'none'});
        $("#avisClients").css({'display':'block'})
    }
    hideAvis(){
        $("#avisClients").css({'display':'none'});
        $("#btAvis").css({'display':'block'});
        
    }
}
new ModalAvis();