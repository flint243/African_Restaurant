class ModalReza{

    constructor(){
       
        $(".btReza").click(this.showReza.bind(this));
       
        $("#closeReza").click(this.hideReza.bind(this));
    }

    showReza(){
        $("#modalReza").css({'display':'block'});
        $("#btAvis").css({'display':'none'});
        //$(".navToggle").css({'display':'none'});
    }
    hideReza(){
        $("#modalReza").css({'display':'none'});
        $("#btAvis").css({'display':'block'});
    }
}
new ModalReza();