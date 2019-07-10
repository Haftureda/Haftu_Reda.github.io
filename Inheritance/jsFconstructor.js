
var objectCreators=(function(){
    "use strict";
 function CreateBicyclePrototype(){
     
     this.speed=0;
 }
    CreateBicyclePrototype.prototype.applyBrake=function(x){
            this.speed=this.speed-x;
            
        };
    CreateBicyclePrototype.prototype.speedUp=function(x)
        {
        this.speed=this.speed+x;
    };
    
    

    
var createMountainBikePrototype=new CreateBicyclePrototype();
    
createMountainBikePrototype.gear=1;
    createMountainBikePrototype.setGear=function(x){
    this.gear=x;

};






var start=function(){
    
    
    var bicycle= new createBicyclePrototype();
    console.log(bicycle.speed);
    bicycle.speedUp(5);
    bicycle.applyBrake(2);
     console.log(bicycle.speed);
    var mountainBike=Object.create(createMountainBikePrototype);
    mountainBike.setGear(13);
     console.log(mountainBike.gear);
    
}

start();

})();