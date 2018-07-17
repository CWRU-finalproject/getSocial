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
        return user;
    }).catch((err) => {
        console.log(err);
    })
},
// Calls api route to create new user based on data input
postUser: function(obj){
    return axios.post("/api/user", obj)
    /*axios({
        url:"/api/user",
        type:"post",
        data: obj
    })*/.then((response) => {
        console.log("succesful");

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


getAllEvents: function(array){
   // return axios.get("api/events");

    return axios({
        url:"/api/events",
        type:"get"
    })

},

getFilteredEvents: function(array, filter){
   // return axios.get("api/events");

   return axios({
        url:"/api/events/" + filter,
        type:"get"
    })

},
    
getCurrentEvents: function(array, userId){
    return axios({
        url:"/api/events/current/" + userId,
        type:"get"
    })
},

getPastEvents: function(array, userId){
    return axios({
        url:"/api/events/past/" + userId,
        type:"get"
    })
},

postEvent: function(obj){
    return axios.post("/api/events", obj)
    .then((response) => {
        //console.log(response)
        console.log("successful");
    }).catch((err) => {
        alert(err);
    })
},

deleteEvent: function(id){
    return axios.delete("/api/event/" + id);
}


}