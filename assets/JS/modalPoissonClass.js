class ModalPoisson{

    constructor(){
       
        $("#fig2").click(this.showAPoisson.bind(this));
       
        $("#closePoisson").click(this.hideAPoisson.bind(this));
    }

    showAPoisson(event){
        event.preventDefault();
        $("#modalPoisson").css({'display':'block'});
    }
    hideAPoisson(){
        $("#modalPoisson").css({'display':'none'});        
    }
}
new ModalPoisson();