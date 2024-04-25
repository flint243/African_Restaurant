class ModalTieb{

    constructor(){
       
        $("#fig3").click(this.showTieb.bind(this));
       
        $("#closeTieb").click(this.hideTieb.bind(this));
    }

    showTieb(event){
        event.preventDefault();
        $("#modalTieb").css({'display':'block'});
    }
    hideTieb(){
        $("#modalTieb").css({'display':'none'});
    }
}
new ModalTieb();