class HeuresReza{
    constructor(){
        $('td').click(this.showHeure.bind(this));


    }

    showHeure(){
        $("#bandeauColorBoissons").css({'display':'block'});
    }
}new HeuresReza();