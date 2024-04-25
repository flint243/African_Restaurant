class ModalConfirmer{

    constructor(){
       
        $("#btConfirm").click(this.showMessage.bind(this));       
    }

    showMessage(){
        $("#message").css({'display':'block'});
    }
}
new ModalConfirmer();