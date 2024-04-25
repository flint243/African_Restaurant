class ModalGlaces{

    constructor(){
       
        $("#btGlaces").click(this.showGlaces.bind(this));
       
        $("#closeGlaces").click(this.hideGlaces.bind(this));
    }

    showGlaces(){
        $("#glaces").css({'display':'block'});
        $("#bandeauColorDesserts").css({'display':'none'})
    }
    hideGlaces(){
        $("#glaces").css({'display':'none'});
        $("#bandeauColorDesserts").css({'display':'block'})

        $("#ensembleBoutons").css({'display':'none'})
    }
}
new ModalGlaces();