const filmData = {
  name: `Harry Potter and the methods of rationality`,
  poster: `popeye-meets-sinbad.png`,
  rating: `18+`,
  year: `2020`,
  duration: `1h 36m`,
  genre: `science fiction`,
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`,
  comments: [
    {
      emoji: `smile.png`,
      date: `22.06.2020`,
      author: `Eliezer Yudkowsky`,
      message: `Great!`
    }
  ]
};
class Film {
  constructor(name, poster, rating, year, duration, genre, description, comments) {
    this.name = name;
    this.poster = poster;
    this.rating = rating;
    this.year = year;
    this.duration = duration;
    this.genre = genre;
    this.description = description;
    this.comments = comments;
  }
}
