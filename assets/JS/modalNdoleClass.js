class ModalNdole{

    constructor(){
       
        $("figure#fig1").click(this.showNdole.bind(this));
       
        $("#closeNdole").click(this.hideNdole.bind(this));
    }

    showNdole(event){
        event.preventDefault();
        $("#modalNdole").css({'display':'block'});
    }
    hideNdole(){
        $("#modalNdole").css({'display':'none'});
    }
}
new ModalNdole();