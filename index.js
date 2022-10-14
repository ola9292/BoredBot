
const main = document.getElementById('main')
const activityBtn = document.getElementById('activity-btn')


activityBtn.addEventListener('click',function(){
    fetch('https://apis.scrimba.com/bored/api/activity')
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        main.innerHTML = `<h4>${data.activity}</h4>`
        document.getElementById('heading').innerHTML = `<h1>🤖 HappyBot 🤖</h1>`
    });
    
})