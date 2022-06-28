// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model");
const Movie = require("../models/movie.model");

// all your routes here

router.get("/movies/create", (req, res, next) => {
  Celebrity.find()
    .select("name")
    .select("_id")
    //.select({ name: 1, occupation: 1 })

    .then((response) => {
      console.log(response);
      res.render("movies/new-movie.hbs", { response });
    })
    .catch((e) => {
      next(e);
    });
});

router.post("/movies/create", (req, res, next) => {
  const title = req.body.title;
  const genre = req.body.genre;
  const plot = req.body.plot;
  const cast = req.body.cast;

  Movie.create({ title: title, genre: genre, plot: plot, cast: cast })

    .then(() => {
      res.redirect("/movies");
    })
    .catch(() => res.redirect("movies/new-movie"));
});

router.get("/movies", (req, res, next) => {
  Movie.find()

    .then((response) => {
      res.render("movies/movies", { response });
    })
    .catch((e) => {
      next(e);
    });
});

router.get("/movies/:id", (req, res, next) => {
  Movie.findById(req.params.id)
  .populate('cast')
  .then((response)=>{
      res.render("movies/movie-details", {response})
  })
  .catch((e) => {
    next(e)
  });
});

module.exports = router;
