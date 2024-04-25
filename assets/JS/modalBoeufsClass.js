class ModalBoeufs{

    constructor(){
       
        $("#btBoeufs").click(this.showBoeufs.bind(this));
       
        $("#closeBoeufs").click(this.hideBoeufs.bind(this));
    }

    showBoeufs(){
        $("#boeufs").css({'display':'block'});
        $("#bandeauColorMenu").css({'display':'none'})
    }
    hideBoeufs(){
        $("#boeufs").css({'display':'none'});
        $("#bandeauColorMenu").css({'display':'block'})

        $("#ensembleBoutons").css({'display':'none'})
    }
}
new ModalBoeufs();