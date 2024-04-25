class ModalOption{

    constructor(){
       
        $("#personSelected").click(this.showConfirm.bind(this));
    }

    showConfirm(){
        $("#btConfirm").css({'display':'block'});
    }
}
new ModalOption();