const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');
const Movie = require('../models/Movie');

const dbName = 'awesome-project';
mongoose.connect(`mongodb://localhost/${dbName}`);




/*const celebrities = [
    {
        name: "Celeb1",
        occupation: "Singing",
        catchPhrase: "Hello",
    },
    {
        name: "Celeb2",
        occupation: "Music",
        catchPhrase: "Goodbye",
    },
    {
        name: "Celeb3",
        occupation: "Nothing",
        catchPhrase: "NoPhrase",
    },
]


Celebrity.create(celebrities, (err) => {
    if (err) { throw(err) }
    console.log(`Created ${celebrities.length} celebrities`)
    mongoose.connection.close()
  });
  
  */


 const movies = [
    {
        title: "Inception 2",
        genre: "Science Fiction",
        plot: "Cool plot",
    },
    {
        title: "Inception 3",
        genre: "Science Fiction",
        plot: "Very Cool plot",
    },
    {
        title: "Inception 4",
        genre: "Science Fiction",
        plot: "Coolest plot ever",
    },
]


Movie.create(movies, (err) => {
    if (err) { throw(err) }
    console.log(`Created ${movies.length} movies`)
    mongoose.connection.close()
  });