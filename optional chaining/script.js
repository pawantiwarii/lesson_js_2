

const user = {
    firstName: 'Pawan tiwari',
    age: 21,
    add:'bariswan',
    state: 'Bihar',
    getCity: function getCity(){
        return 'Name: ' + user.firstName + ' Age: ' + user.age
    }
}
// if(user.state){
    
//     console.log(user.state);
// }


       
console.log(user.getCity?.());
