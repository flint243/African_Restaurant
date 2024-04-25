class ModalDesserts{

    constructor(){
       
        $("#btDessert").click(this.showDesserts.bind(this));

        $(".closeModal").click(this.hideDesserts.bind(this));
    }

    showDesserts(){
        $("#bandeauColorDesserts").css({'display':'block'});
        $("#ensembleBoutons").css({'display':'none'})
    }
    hideDesserts(){
        $("#bandeauColorDesserts").css({'display':'none'});
        $("#ensembleBoutons").css({'display':'block'})
    }
}
new ModalDesserts();