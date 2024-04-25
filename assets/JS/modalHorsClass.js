class ModalHors{

    constructor(){
       
        $("#btHors").click(this.showHors.bind(this));
       
        $("#closeHors").click(this.hideHors.bind(this));
    }

    showHors(){
        $("#hors_d_oeuvres").css({'display':'block'});

        $("#ensembleBoutons").css({'display':'none'});
        $("#bandeauColorEntrees").css({'display':'none'});
    }
    hideHors(){
        $("#hors_d_oeuvres").css({'display':'none'});
        $("#bandeauColorEntrees").css({'display':'block'});

        $("#ensembleBoutons").css({'display':'none'});
       
    }
}
new ModalHors();