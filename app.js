// Budget Controller
var budgetController = (function(){

    //some code
    


})();


// UI Controller
var UIController =(function(){

    var DOMString ={
        inputType : '.add__type',
        inputDescription : '.add__description',
        inputValue : '.add__value',
        addBtn : '.add__btn'
    };

    //get Inputs from UI
    return{
        getInput:function(){
            return {
                tpye:document.querySelector(DOMString.inputType).value,
                description : document.querySelector(DOMString.inputDescription).value,
                value : document.querySelector(DOMString.inputValue).value
            };
        },
        getDOMString : function(){
            return DOMString;
        }
    }; 

})();

// public Controller
var controller = (function(budgetCrtl , UICrtl){
    
    var setupEventListeners = function(){
        var DOM = UICrtl.getDOMString();
        document.querySelector(DOM.addBtn).addEventListener('click', ctrlAddEvent);
        document.addEventListener('keypress',function(e){
            if(e.keyCode===13){
                ctrlAddEvent();
            }
        });
    };

    function ctrlAddEvent(){        
        // 1 get the field input
        var input= UICrtl.getInput();
        console.log(input);
        
        // 2 add the item to budget controller
        // 3 add the item to UI
        // 4 calculate budget 
        // 5 display budget on UI
        
    };

    
    
    return{
        init : function(){
            console.log("started the APP")
            setupEventListeners();
        }
    };
    
})(budgetController , UIController);

controller.init();