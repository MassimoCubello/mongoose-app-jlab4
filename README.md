# mongoose-app-jlab4
A lab exercise for Full-Stack Web Development (HTTP 5222) at Humber Polytechnic.

## Lab Requirements
### Create an app using Mongoose.

1. Define a Schema for a collection of movies. The Schema should define the following fields for a movie:
    a. title (the movie title)
    b. year (year released)
    c. rating (audience rating, e.g. "G")
2. Use insertMany() to initialize the data with at least two movies. (Do something similar to the class example for the home page.)
3. On the home page, get the movies (after initialization) and display the movies and all the data. You may choose how you display the movie data (in divs or in a list).
4. Implement a function named updateMovieRating(title, newRating) using updateOne() to update a rating by movie title (i.e. the filter matches the movie title, then the rating field gets updated). To demo, you can implement a page route with a hardcoded update using this function (similar to the class example).
5. Implement a function named deleteMoviesByRating(rating) to delete by rating using deleteMany(<filter>). You can make a "/delete" page route for this and hardcode (e.g. delete all with { rating: "R" }) similar to what we did with the update or addPet() in the class example.

### Deploy using Render
1. Push your app to your GitHub. (The app should be in its own repo, not shared with other app files.)
2. Create a new web service using Render and select your repo.
3. Set your build command (npm i) and start command (command to run app like you do in your terminal).
4. Add your environment variables to Render.
5. Deploy

## Course Information
- Course: HTTP 5222 - Full-Stack Web Development
- Institution: Humber Polytechnic
- Instructor: Joanna Kommala
- Semester: 2026 Winter

This course builds upon the JavaScript skills and techniques covered in the first term, employing a JavaScript framework to create server-side JavaScript web applications. Accessing alternate data sources (including APIs) completes this course leading to a full-stack JavaScript application deployed to the internet.

https://humber.ca/course.html?code=HTTP%205222