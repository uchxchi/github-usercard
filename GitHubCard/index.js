import axios from "axios";
console.log(axios)

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/uchxchi')
  .then(res => {
    const info = res.data
    const gitCard = myGitCard(info)
    console.log(gitCard)
    console.log(info)
    const div = document.querySelector('.cards')
    div.append(gitCard)

  })
  


/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['kip-guile', 'coremand', 'dmedunoye', 'justsml', ' bigknell'];
const getData = followersArray.forEach(str => {
  // axios.get('https://api.github.com/users/')
})
console.log(getData)

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
function myGitCard ({name, location, html_url, avatar_url, login, followers, following, bio}){
  const card = document.createElement('div')
  const img = document.createElement('img')
  const cardInfo = document.createElement('div')
  const h3 = document.createElement('h3')
  const username = document.createElement('p')
  const locati0n = document.createElement('p')
  const Profile = document.createElement('p')
  const address = document.createElement('a')
  const p = document.createElement('p')
  const p2 = document.createElement('p')
  const p3 = document.createElement('p')

  card.classList.add('card')
  img.src = avatar_url
  cardInfo.classList.add('card-info')
  h3.classList.add('name')
  username.classList.add('username')
  h3.textContent = `Name: ${name}`
  locati0n.textContent = `Location: ${location}`
  Profile.textContent = `Profile:`
  address.href = html_url
  address.textContent = html_url
  username.textContent = `Username: ${login}`
  p.textContent = `Followers: ${followers}`
  p2.textContent = `Following: ${following}`
  p3.textContent = `Bio: ${bio}`

  card.appendChild(img)
  card.appendChild(cardInfo)
  cardInfo.appendChild(h3)
  cardInfo.appendChild(username)
  cardInfo.appendChild(locati0n)
  cardInfo.appendChild(Profile)
  Profile.appendChild(address)
  cardInfo.appendChild (p)
  cardInfo.appendChild(p2)
  cardInfo.appendChild(p3)  
       return card
}


// const result = axios.get('https://api.github.com/users/uchxchi')
//   .then(res => {
//     const info = res.data
//     console.log(info)
  
//   })
 


/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
