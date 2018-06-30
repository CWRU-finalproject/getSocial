import axios from "axios"

export default {
//----- Need to change from AJAX to AXIOS -----//
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
}
    
}