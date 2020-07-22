var budgetContorller = (function(){

    //some code
    
    var x=20;
    var add=function(a){
        return x+a;
    }
    return{
        publicTest:function(b){
           return add(b);
        }
    }

})();


var UIController =(function(){

    //some code

})();


var controller = (function(budgetCont , UICont){

    var z = budgetCont.publicTest(33);
    return{
        otherPublic : function(){
            console.log(z);
        }
    }

})(budgetContorller , UIController);