// Importeer het npm pakket express uit de node_modules map
import express from 'express'

// Importeer de zelfgemaakte functie fetchJson uit de ./helpers map
import fetchJson from './helpers/fetch-json.js'

// Maak een nieuwe express app aan
const app = express()

// Stel ejs in als template engine
app.set('view engine', 'ejs')

// Stel de map met ejs templates inx
app.set('views', './views')

// Gebruik de map 'public' voor statische resources, zoals stylesheets, afbeeldingen en client-side JavaScript
app.use(express.static('public'))

// Zorgt dat werken met request data makkelijker wordt
app.use(express.urlencoded({extended: true}))


//endpoints
const storiesAPI = await fetchJson('https://fdnd-agency.directus.app/items/tm_story');
const playlistsAPI = await fetchJson('https://fdnd-agency.directus.app/items/tm_playlist');
const audioAPI = await fetchJson('https://fdnd-agency.directus.app/items/tm_audio');

//rootes
//GET
//home
app.get('/', function(request, response) {
    // Render index.ejs uit de views map
	fetchJson( storiesAPI).then((storiesData) => {
		response.render('home')
    
	});
})

//Lessons 
app.get('/lessons', function(request, response) {
    // Render index.ejs uit de views map
response.render('index', {
    stories: storiesAPI.data, 
    playlist: playlistsAPI.data
    });
})

//playlsit/id
app.get('playlist/:id', function(request, response) {
    response.render('playlist', {
        playlist: playlistsAPI.data,
        stories: storiesAPI.data
    });
})

//POST 

// Stel het poortnummer in waar express op moet gaan luisteren
app.set('port', process.env.PORT || 8000)

// Start express op, haal daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function() {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`Application started on http://localhost:${app.get('port')}`)
})