// Budget Controller
var budgetController = (function(){
    //some code
    var Expense =function(id, description, value){
        this.id=id;
        this.description=description;
        this.value=value;
    };    

    var Income =function(id, description, value){
        this.id=id;
        this.description=description;
        this.value=value;
    };

    var data = {
            allItems : {
                exp : [],
                inc : []
            },
            totals : {
                exp : 0,
                inc : 0
            }    
    }

    return{
        addItem : function(type, des, val){
            var ID, newItem;
            console.log(type);
            if(data.allItems[type].length>0){
                ID=data.allItems[type][data.allItems[type].length-1].id+1;
            }else{
                ID= 0;
            }

            if(type ==='inc'){
                newItem= new Income(ID, des, val);
            }else if(type ==='exp'){
                newItem=new Expense(ID, des, val);
            }

            data.allItems[type].push(newItem);
            return newItem;
        },
        testing : function(){
            console.log(data);
        }
    };

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
                type:document.querySelector(DOMString.inputType).value,
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
        var input, newItem;
       
        input= UICrtl.getInput();
        console.log(input.type + " d");
        newItem = budgetCrtl.addItem(input.type, input.description, input.value);

        
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