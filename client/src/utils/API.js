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
    axios.post({
        url:"/api/user",
        data: obj
    }).then((response) => {
        console.log(response.json + "line 28")
        alert("succesful")
    })
    .catch((err) => {
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
//adds an event to the database
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
//remove needs user authentication
removeEvent: function(id){
    axios({
        url:"/api/event/"+id,
        type:"delete"
    })
    .then((response) => {
        console.log(response);
        alert("successful delete")
    })
    .catch((err) => {
        alert(err)
    })
},
//update needs user authentication
updateEvent: function(id,obj){
    axios({
        url:"/api/event/"+id,
        type:"put",
        data: obj
    })
    .then((response) => {
        console.log(response);
        alert("update successful")
    })
    .catch((err) => {
        alert(err);
    })
}
}