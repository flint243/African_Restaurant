class ModalSalades{

    constructor(){
       
        $("#btSalades").click(this.showSalades.bind(this));
       
        $("#closeSalades").click(this.hideSalades.bind(this));
    }

    showSalades(){
        $("#salades").css({'display':'block'});

        $("#ensembleBoutons").css({'display':'none'})
        $("#bandeauColorEntrees").css({'display':'none'})
    }
    hideSalades(){
        $("#salades").css({'display':'none'});
        $("#bandeauColorEntrees").css({'display':'block'})

        $("#ensembleBoutons").css({'display':'none'})
       
    }
}
new ModalSalades();