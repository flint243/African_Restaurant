class ModalPoulets{

    constructor(){
       
        $("#btPoulets").click(this.showPoulets.bind(this));
       
        $("#closePoulets").click(this.hidePoulets.bind(this));
    }

    showPoulets(){
        $("#modalPoulets").css({'display':'block'});
        $("#bandeauColorMenu").css({'display':'none'})
    }
    hidePoulets(){
        $("#modalPoulets").css({'display':'none'});
        $("#bandeauColorMenu").css({'display':'block'})

        $("#ensembleBoutons").css({'display':'none'})
    }
}
new ModalPoulets();