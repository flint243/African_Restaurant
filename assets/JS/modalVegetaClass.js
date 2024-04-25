class ModalVegeta{

    constructor(){
       
        $("#btVegetas").click(this.showVegeta.bind(this));
       
        $("#closeVegetas").click(this.hideVegeta.bind(this));
    }

    showVegeta(){
        $("#vegetas").css({'display':'block'});
        $("#bandeauColorMenu").css({'display':'none'})
    }
    hideVegeta(){
        $("#vegetas").css({'display':'none'});
        $("#bandeauColorMenu").css({'display':'block'})

        $("#ensembleBoutons").css({'display':'none'})
    }
}
new ModalVegeta();