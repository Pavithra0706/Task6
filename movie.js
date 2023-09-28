//1 ) https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md

class Movie{
    constructor(title,studio,rating){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    Title(){
        console.log(`The title of the movie is "${this.title}"`);
    }
    Studio(){
        console.log(`The studio that made this movie "${this.title}" is "${this.studio}"`);
    }
    Rating(){
        console.log(`The rating of the movie "${this.title}" is - "${this.rating}"`);
    }
}
var movie1 = new Movie("Chennai Express", "Red Chillies Entertainment", "PG-13");
movie1.Title();
movie1.Studio();
movie1.Rating();