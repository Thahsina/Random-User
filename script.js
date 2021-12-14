const result = document.getElementById('result')
const search = document.getElementById('search')
const listItems = []


search.addEventListener('input', (e)=> findUser(e.target.value) )

getData()

async function getData(){
    const res = await fetch('https://randomuser.me/api?results=100')
    const {results} = await res.json()
    console.log(results);
     
    result.innerHTML = ''
    results.forEach(user => {
        const li = document.createElement('li')


        listItems.push(li)

        li.innerHTML= `<img src="${user.picture.large}" alt="${user.name.first}">
        <div class="user-info">
            <h4>${user.name.first} ${user.name.last}</h4>
            <p>${user.location.city}, ${user.location.country}</p>
            <p>age: ${user.dob.age} </p>   <p> ${user.email}</p>
        </div>`
         result.appendChild(li)
    })
}


const findUser =(username) =>{
    listItems.forEach(item => {
        if(item.innerText.toLowerCase().includes(username.toLowerCase())){
            item.classList.remove('hide')
        }else {
            item.classList.add('hide')
        }
    })

}