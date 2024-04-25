class ModalQuiches{

    constructor(){
       
        $("#btQuiches").click(this.showQuiches.bind(this));
       
        $("#closeQuiches").click(this.hideQuiches.bind(this));
    }

    showQuiches(){
        $("#quiches").css({'display':'block'});

        $("#ensembleBoutons").css({'display':'none'});
        $("#bandeauColorEntrees").css({'display':'none'});
    }
    hideQuiches(){
        $("#quiches").css({'display':'none'});
        $("#bandeauColorEntrees").css({'display':'block'});

        $("#ensembleBoutons").css({'display':'none'});
       
    }
}
new ModalQuiches();