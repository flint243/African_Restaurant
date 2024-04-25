class ModalGroup{

    constructor(){
       
        $(".rezaHeures").click(this.showGroup.bind(this));
       
        $(".btConfirm").click(this.hideGroup.bind(this));
    }

    showGroup(){
        $("#selectedGroup").css({'display':'block'});
    }
    hideGroup(){
        $("#modalReza").css({'display':'none'});
    }
}
new ModalGroup();