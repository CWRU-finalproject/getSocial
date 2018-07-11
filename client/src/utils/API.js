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
    // .then((data) => {

    //     while(array.length){
    //         array.pop();
    //     }

    //     data.data.forEach(function(element) {
            
    //         array.push(element);
    //     });
    //    // console.log(array);
    //     return array;
    // })
    // .catch((err) => {
    //     alert(err);
    // })
},

getFilteredEvents: function(array, filter){
   // return axios.get("api/events");

   return axios({
        url:"/api/events/" + filter,
        type:"get"
    })
    // .then((data) => {

    //     while(array.length){
    //         array.pop();
    //     }


    //     data.data.forEach(function(element) {
            
    //         array.push(element);
    //     });
    //    // console.log(array);
    //     return array;
    // })
    // .catch((err) => {
    //     alert(err);
    // })
},

postEvent: function(obj){
    return axios.post("/api/event", obj)
    .then((response) => {
        //console.log(response)
        console.log("successful");
    }).catch((err) => {
        alert(err);
    })
}

}