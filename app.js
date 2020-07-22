// Budget Controller
var budgetController = (function(){

    //some code
    


})();


// UI Controller
var UIController =(function(){

    //some code

})();

// public Controller
var controller = (function(budgetCont , UICont){

    function ctrlAddEvent(){
        // 1 get the field input
        // 2 add the item to budget controller
        // 3 add the item to UI
        // 4 calculate budget 
        // 5 display budget on UI
        console.log("heh");
    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddEvent);

    document.addEventListener('keypress',function(e){
        if(e.keyCode===13){
            ctrlAddEvent();
        }
    });
    
})(budgetController , UIController);