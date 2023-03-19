
function postReq(){
    var name = document.getElementById("fname").value;
    var joke = document.getElementById("joke").value;
    console.log(name);

    axios.post('http://localhost:3000/user', {
    "firstName": name,
    "joke": joke
})
.then(function (response) {
    console.log(response.data);
})
.catch(function (error) {
    console.log(error);
});
}

function getUsers(){
    axios.get('http://localhost:3000/user')
    .then(function (response) {
        // handle success
        var darr = response.data;
        document.getElementById("allUsers").innerHTML=null;
        for(var i=0;i<darr.length;i++){
            document.getElementById("allUsers").innerHTML+=darr[i].firstName+" :"+darr[i].joke+"<br>";
        }
        
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
}