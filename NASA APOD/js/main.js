//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

// click on this button

// NOTE  const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita'

// NOTE can specify query parameters to specify stuff from server using key value pairs. How do you request multiple quert pareamters in url use & sign)

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)
  // it grabs value out of this input
  const url = `https://api.nasa.gov/planetary/apod?api_key=WZ0RWVnBV9I77tx9tof8SxFGz4qDdygMgvjwLS54&date=${choice}`

// plugs vlue into url
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        if (data.media_type === 'image'){
          document.querySelector('img').src = data.url

      }else if (data.media_type=== 'video'){
        document.querySelector('iframe').src = data.url
      }
        //media type === image will not ork because it is tied to the data object
      
     
        // selecting the image tag and changing the source of it to the DOM
        document.querySelector('h3').innerText = data.explanation

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

// gets the fetch


// clear pokemon image. Add other APIS find cool stuff to play around with. make it your own