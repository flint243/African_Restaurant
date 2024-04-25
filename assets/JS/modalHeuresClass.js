class ModalHeures{

    constructor(){
       
        $("td").click(this.showHeures.bind(this));
       
        $(".rezaHeures").click(this.hideHeures.bind(this));
    }

    showHeures(){
        $("#heuresReza").css({'display':'block'});
        $(".elegant-calencar").css({'display':'none'})
    }
    hideHeures(){
        $("#Heures").css({'display':'none'});
        $("#bandeauColorMenu").css({'display':'block'})
    }
}
new ModalHeures();