class ModalGateaux{

    constructor(){
       
        $("#btGateaux").click(this.showGateaux.bind(this));
       
        $("#closeGateaux").click(this.hideGateaux.bind(this));
    }

    showGateaux(){
        $("#gateaux").css({'display':'block'});
        $("#bandeauColorDesserts").css({'display':'none'})
    }
    hideGateaux(){
        $("#gateaux").css({'display':'none'});
        $("#bandeauColorDesserts").css({'display':'block'})

        $("#ensembleBoutons").css({'display':'none'})
    }
}
new ModalGateaux();