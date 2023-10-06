document.addEventListener('DOMContentLoaded', function() {


const btn=document.querySelectorAll("input")[1]


//handleSearch function starts
function handleSearch(event){
    event.preventDefault()
    const inputUsername=document.getElementById("search").value
    //console.log(inputUsername)
    //fetch the data from an api
    fetch(`https://api.github.com/search/users?q=${inputUsername}`)
    .then(response=>response.json())
    .then((data)=>{
        const items = data.items
        items.forEach(item => {
            //username
            console.log(item)
            const user=item.login
            //console.log(user)
            if (user!==inputUsername){
                //console.log("hello")
                const userli= document.createElement("li")//create li element
                const link=document.createElement('a')//create a tag
                link.setAttribute('href',item.html_url+'?tab=repositories')//setattribtes and pass url
                link.textContent=user
                //Now lets append a tag(link) inside the li
                userli.appendChild(link)
                //then append the li containing user into ul
                const ul=document.getElementById("user-list")//get ul to contain our li's
                //append child to ul
                ul.appendChild(userli)              
            }         
        });



    })//.then ends here

}
//handleSearch function ends

btn.addEventListener("click",handleSearch)
})