import axios from "axios"

export default {
//----- Need to change from AJAX to AXIOS -----//
<<<<<<< HEAD

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
=======
// getUser: function(email,ps) {
//     $.ajax({
//         url: "/api/user",
//         type: "GET",
//         data: {
//             email:email,
//             password:ps
//         }
//     }).then((user) => {
//         return user;
//     }).catch((err) => {
//         console.log(err);
//     })


// },
postUser: function(userObj){
    return axios.post("/api/user", userObj);

    // $.ajax({
    //     url:"/api/user",
    //     type:"POST",
    //     data: obj
    // }).then(() => {
    //     alert("succesful")
    // }).catch((err) => {
    //     alert(err);
    // })
>>>>>>> 63464023999bb87a495909f10f3b6981c792038e
}
    
}