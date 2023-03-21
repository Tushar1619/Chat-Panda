
function postReq(){
    var name = document.getElementById("fname").value;
    var joke = document.getElementById("joke").value;
    console.log(name);

    axios.post('https://vast-pink-monkey-ring.cyclic.app/user', {
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
    axios.get('https://vast-pink-monkey-ring.cyclic.app/users')
    .then(function (response) {
        // handle success
        var darr = response.data;
        console.log(darr);
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