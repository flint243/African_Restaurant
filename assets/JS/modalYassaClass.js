class ModalYassa{

    constructor(){
       
        $("#fig4").click(this.showYassa.bind(this));
       
        $("#closeYassa").click(this.hideYassa.bind(this));
    }

    showYassa(event){
        event.preventDefault();
        $("#modalYassa").css({'display':'block'});
    }
    hideYassa(){
        $("#modalYassa").css({'display':'none'});
    }
}
new ModalYassa();