import axios from "axios"

export default {
//----- Need to change from AJAX to AXIOS -----//

// Gets one user based on email and password
getUser: function(email,ps) {
    axios.get({
        url: "/api/user",
        data: {
            email:email,
            password:ps
        }
    }).then((user) => {
        console.log(user)
        return user;
    }).catch((err) => {
        console.log(err);
    })
},
// Calls api route to create new user based on data input
postUser: function(obj){
    axios({
        url:"/api/user",
        type:"post",
        data: obj
    }).then((response) => {
        console.log(response)
        alert("succesful")
    }).catch((err) => {
        alert(err);
    })
},
getAllUsers: function(){
    axios({
        url:"/api/users",
        type:"get"
    })
    .then((response) => {
        return response;
    })
    .catch((err) => {
        alert(err);
    })
},
//************************************* */
//************************************* */
getAllEvents: function(){
    axios({
        url:"/api/events",
        type:"get",

    })
    .then((response) => {
        return response;
    })
    .catch((err) => {
        alert(err);
    })
},

postEvent: function(obj){
    axios({
        url:"/api/event",
        type:"post",
        data:obj
    })
    .then((response) => {
        console.log(response)
        alert("successful")
    })
    .catch((err) => {
        alert(err);
    })
},
}