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
}
    
}