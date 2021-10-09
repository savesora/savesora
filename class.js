// origin
// var user={
//     id:"id01",
//     pass:5555,
//     SayHi:function(){
//         return "Hello = "+this.name
//     }
// }
// console.log(user.SayHi());

// function user(name,age){
//     this.name=name
//     this.age=age
// }
// user.prototype.SayHi=function(){
//     console.log("Hello = "+this.name +"age ="+this.age)
// }
// var user1=new user("savesora",28);
// user1.SayHi()
class User {
    constructor(name,age){
        this.name=name
        this.age=age
    }
    Sayhi(){
        console.log("hello ="+this.name +"age="+this.age)
    }
}
let user1=new User("savesora",28)
user1.Sayhi()