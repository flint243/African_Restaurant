class ModalPoissons{

    constructor(){
       
        $("#btPoissons").click(this.showPoissons.bind(this));
       
        $("#closePoissons").click(this.hidePoissons.bind(this));
    }

    showPoissons(event){
        event.preventDefault();
        $("#poissons").css({'display':'block'});
        $("#bandeauColorMenu").css({'display':'none'})
    }
    hidePoissons(){
        $("#poissons").css({'display':'none'});
        $("#bandeauColorMenu").css({'display':'block'})

        $("#ensembleBoutons").css({'display':'none'})
    }
}
new ModalPoissons();