import mongoose from "mongoose";

const dbUrl = `${process.env.MONGO_URI}${process.env.DB_NAME}`;

//set up Schema and model
const MovieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  rating: String
}); // { collection: "myMovieCollection"}); if you want to use a different collection other than the default "movies" which would be used becuase the lowercase, plural form of "Movie: (below) is "movies".
const Movie = mongoose.model("Movie", MovieSchema);

await mongoose.connect(dbUrl); // if your connection string has a user, you must use await

//MONGODB FUNCTIONS
// On initial page load, if there's nothing in the pets collection, initialize with some content
async function initializeMovies() {
  let movieArray = [
    { title: "Days of Thunder",
      year: 1990,
      rating: "PG-13"
    },
    { title: "The Dark Knight",
      year: 2008,
      rating: "PG-13" 
    },
    { title: "Wall-E",
      year: 2008,
      rating: "G"
    },
    { title: "Up",
      year: 2009,
      rating: "PG"
    },
    { title: "The Lion King",
      year: 1994,
      rating: "G"
    },
    { title: "Fight Club",
    year: 1999,
    rating: "R"
    },
    { title: "Pulp Fiction",
      year: 1994,
      rating: "R"
    },
  ];
  await Movie.insertMany(movieArray);
  }

async function connect() {
  await mongoose.connect(dbUrl); //connect to mongodb
}

//Get all movies from the movies collection
async function getMovies() {
  return await Movie.find({}); //return array for find all
}

//Function to update movie rating by title
async function updateMovieRating(title, newRating) {
  await Movie.updateOne(
    { title: String(title) }, //filter
    { rating: String(newRating) } //update
  );
}

//Function to delete multiple movies by rating
async function deleteMoviesByRating(rating) {
  await Movie.deleteMany({ rating: String(rating) });
}


export default {
  initializeMovies,
  getMovies,
  updateMovieRating,
  deleteMoviesByRating
}