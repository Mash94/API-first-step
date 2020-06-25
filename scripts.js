var request = new XMLHttpRequest()

request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)

const app = document.getElementById('root')
const imagen = document.createElement('img')
imagen.src = 'logo.png'
const container = document.createElement('div')
container.setAttribute('class', 'container')
container.setAttribute('id', 'App')
app.appendChild(imagen)
app.appendChild(container)


request.onload = function() {
    var data = JSON.parse(this.response)
    if (request.status >= 200 && request.status < 400) {
        data.forEach(movie => {
            let app = document.getElementById('App')
            const card = document.createElement('div')
            card.setAttribute('class','card')
            const h1 = document.createElement('h1')
            h1.textContent = movie.title
            const p = document.createElement('p')
            movie.description = movie.description.substring(0,300)
            p.textContent = movie.description

            card.appendChild(h1)
            card.appendChild(p)
            app.appendChild(card)
        })
    } else {
        console.log('hola')
        let app = document.getElementById('App')
        const errorMessage = document.createElement('marquee')
        errorMessage.textContent = `Gah, it's not working!`
        app.appendChild(errorMessage)
    }

}
request.send()
