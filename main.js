


function getPosts(userId){
  fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
  .then(response =>{ 
    if(response.ok){
     return response.json()
    }
    })
  .then(posts => {
   
     var data = "";
     for(post of posts){
      data += 
      `

         <div class="box">
         <h4>${post.title}</h4>
         <hr />
         <p>
         ${post.body}
         </p>
       </div>
         `
     }
     document.querySelector(".end-side").innerHTML = data

  })
}

function getUsers(){

  return new Promise((resolve,reject) => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response =>{ 
      if(response.ok){
       return response.json()
      } else {
        reject("error with users request")
      }
      })
    .then(users => {
     
       var data = "";
       for(user of users){
        data += 
        `
        <div class="info " onclick="userClicked(${user.id},this)" >
        <h3>${user.name}</h3>
        <p>${user.email}</p>
      </div>
        
        `
       }
       document.querySelector(".start-side").innerHTML = data
       resolve()
  
    })
  })
  
}

getUsers().then(() => {
getPosts(1)
}).catch(error => alert(error))




function userClicked(id,ele){
getPosts(id)
document.querySelectorAll(".info").forEach(e => {
  e.classList.remove("selected")
  })
ele.classList.add("selected")
// document.querySelectorAll(".info")[id-1].classList.add("selected")
}
























