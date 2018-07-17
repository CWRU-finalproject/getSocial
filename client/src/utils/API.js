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
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://cwrugroup.auth0.com/dbconnections/signup",
        "method": "POST",
        "headers": {
          "content-type": "application/json"
        },
        "processData": false,
        "data": {
            client_id:"tD0l71PNOSeWwWqwLE3VawPTzDo2Ak37",
            email: obj.email,
            password: obj.password,
            connection:"Username-Password-Authentication",
            user_metadata:{
                firstname:obj.firstName,
                lastname:obj.lastName,
                major:obj.major,
                year:obj.year
            }
        }
      }
    return axios(settings)
    /*axios({
        url:"/api/user",
        type:"post",
        data: obj
    })*/.then((response) => {
        console.log(response);

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