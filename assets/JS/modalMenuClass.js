class ModalMenu{

    constructor(){
        $("button#btMenu").click(this.showMenus.bind(this));
        /*$("#btBoisson").click(this.showBoissons.bind(this));
        $("#btDessert").click(this.showDesserts.bind(this));
        */
        $(".closeModal").click(this.hideMenu.bind(this));
        /*$(".closeModal").click(this.hideBoissons.bind(this));
        $(".closeModal").click(this.hideDesserts.bind(this));
        */
    }

    showMenus(){
        $("#bandeauColorMenu").css({'display':'block'});
        $("#ensembleBoutons").css({'display':'none'})
    }
    hideMenu(){
        $("#bandeauColorMenu").css({'display':'none'});
        $("#ensembleBoutons").css({'display':'block'})
    }
/*
    showBoissons(){
        $("#bandeauColorBoissons").css({'display':'block'});
        $("#ensembleBoutons").css({'display':'none'})
    }
    hideBoissons(){
        $("#bandeauColorBoissons").css({'display':'none'});
        $("#ensembleBoutons").css({'display':'block'})
    }

    showDesserts(){
        $("#bandeauColorDesserts").css({'display':'block'});
        $("#ensembleBoutons").css({'display':'none'})
    }
    hideDesserts(){
        $("#bandeauColorDesserts").css({'display':'none'});
        $("#ensembleBoutons").css({'display':'block'})
    }
    */
}
new ModalMenu();