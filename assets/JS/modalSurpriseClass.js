class ModalSurprise{

    constructor(){
       
        $("#btSurprises").click(this.showSurprise.bind(this));
       
        $("#closeSurprises").click(this.hideSurprise.bind(this));
    }

    showSurprise(){
        $("#surprises").css({'display':'block'});
    }
    hideSurprise(){
        $("#surprises").css({'display':'none'});
    }
}
new ModalSurprise();