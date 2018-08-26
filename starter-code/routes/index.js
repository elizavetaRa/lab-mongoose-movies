const express = require('express');
const router = express.Router();
const Celebrity = require("../models/Celebrity");
const Movie = require("../models/Movie");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


//Iteration 2
router.get("/celebrities", (req, res, next) => {
  Celebrity.find().then(celebrities => {
    console.log("Celebs", celebrities)
    res.render("celebrities", { celebrities })
  }).catch(err => {
    console.log(err)
  })

})

//Interation 3
router.get("/celebrities/:id", (req, res, next) => {
  let id = req.params.id;
  Celebrity.findById(id).then(celeb => {
    res.render("show-celeb", celeb)
  })

})

//Iteration 4
router.get("/new-celeb", (req, res, next) => {
  res.render("new-celeb")
})


router.post("/new-celeb", (req, res, next) => {

  let newCeleb = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  }

  Celebrity.create(newCeleb).then(celeb => {
    res.redirect("/celebrities")
  })

})

//Iteration 5
router.post("/celebrities/:id/delete", (req, res, next) => {
  let id = req.params.id;
  Celebrity.findByIdAndRemove(id)
    .then(celeb => {
      res.redirect("/celebrities");
    })
    .catch(err => {
      console.log(err);
    });
});


//Iteration 6 Bonus
router.get("/celebrities/:id/edit", (req, res, next) => {
  let id = req.params.id;

  Celebrity.findById(id).then(celeb => {
    res.render("edit-celeb", celeb);
  });
});


router.post("/celebrities/:id/edit", (req, res, next) => {

  let id = req.params.id;

  let celeb = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchphrase: req.body.catchphrase

  }

  Celebrity.update({ _id: id }, { $set: celeb }).then(
    celeb => {
      res.redirect("/celebrities");
    }
  );
});




// Same for movies

//Iteration 8
router.get("/movies", (req, res, next) => {
  Movie.find()
    .then(movies => {
      res.render("movies", { movies: movies });
    })
    .catch(err => {
      console.log(err);
    });
});


//Iteration 9
router.get("/movies/:id", (req, res, next) => {
  let id = req.params.id;
  Movie.findById(id).then(movie => {
    res.render("show-movie", movie)
  })

})

//Iteration 10
router.get("/new-movie", (req, res, next) => {
  res.render("new-movie")
})


router.post("/new-movie", (req, res, next) => {

  let newMovie = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
  }

  Movie.create(newMovie).then(movie => {
    res.redirect("/movies")
  })

})


//Interation 11
router.post("/movies/:id/delete", (req, res, next) => {
  let id = req.params.id;
  Movie.findByIdAndRemove(id).then(movie => {
    res.redirect("/movies")
  }).catch(er => { console.log(err) })
})

//Interation 12
router.get("/movies/:id/edit", (req, res, next) => {
  let id = req.params.id;

  Movie.findById(id).then(movie => {
    res.render("edit-movie", movie);
  });
});


router.post("/movies/:id/edit", (req, res, next) => {

  let id = req.params.id;

  let movie = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot

  }

  Movie.update({ _id: id }, { $set: movie }).then(
    movie => {
      res.redirect("/movies");
    }
  );
});

module.exports = router;
