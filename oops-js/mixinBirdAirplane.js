let bird = {
    name: "Donald"
};

let airplane ={
    company:"Boeing"
}

// Inheritance can't be used for the fly() property as bird and airplane are not same kind of objects.
// Use a Mixin to Add Common Behavior Between Unrelated Objects

let flyMixin = function(obj){
    obj.fly= function(){
        return "I'm flying woosh!"
    }
}

flyMixin(bird);
flyMixin(airplane);

console.log('bird.fly() :', bird.fly());
console.log('airplane.fly() :', airplane.fly());