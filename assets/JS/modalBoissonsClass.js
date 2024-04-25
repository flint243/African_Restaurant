class ModalBoissons{

    constructor(){
       
        $("#btBoisson").click(this.showBoissons.bind(this));
       
        $(".closeModal").click(this.hideBoissons.bind(this));
    }

    showBoissons(){
        $("#bandeauColorBoissons").css({'display':'block'});
        $("#ensembleBoutons").css({'display':'none'})
    }
    hideBoissons(){
        $("#bandeauColorBoissons").css({'display':'none'});
        $("#ensembleBoutons").css({'display':'block'})
    }
}
new ModalBoissons();