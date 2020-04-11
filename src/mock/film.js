const MAX_DESC_SENTENCES_COUNT = 5;
const MAX_COMMENTS_COUNT = 5;
const FILM_DATA_MOCK = {
  names: [
    `Back to the future`,
    `The Lord of the Rings`,
    `Only Lovers Left Alive`,
    `The Lord of the Rings`,
    `The Shawshank Redemption`,
    `The Godfather`,
    `Forrest Gump`,
    `Rocky`,
    `Saving Private Ryan`,
    `Jurassic Park`,
    `The Lion King`,
    `The Good, The Bad & The Ugly`,
    `The Silence of the Lambs`,
    `The Green Mile`,
    `Schindler's List`,
    `Catch Me If You Can`,
    `The Sixth Sense`,
  ],
  writers: [
    `Anne Wigton`,
    `Heinz Herald`,
    `Richard Weil`,
    `Billy Wilder`,
    `Robert Towne`,
    `Francis Ford Coppola`,
    `Quentin Tarantino`,
    `William Goldman`,
    `Charlie Kaufman`,
    `Woody Allen`,
  ],
  actors: [
    `Robert De Niro`,
    `Jack Nicholson`,
    `Marlon Brando`,
    `Denzel Washington`,
    `Humphrey Bogart`,
    `Tom Hanks`,
    `Daniel Day-Lewis`,
    `Sidney Poitier`,
    `Gregory Peck`,
    `Leonardo DiCaprio`,
    `Spencer Tracy`,
    `Shah Rukh Khan`,
    `Cary Grant`,
    `Laurence Olivier`,
    `James Stewart`,
    `Steve McQueen`,
    `Henry Fonda`,
    `Morgan Freeman`,
  ],
  directors: [
    `Alfred Hitchcock`,
    `Stanley Kubrick`,
    `Martin Scorsese`,
    `Akira Kurosawa`,
    `Steven Spielberg`,
    `Charlie Chaplin`,
    `Ingmar Bergman`,
    `Orson Welles`,
    `Francis Ford Coppola`,
    `Quentin Tarantino`,
    `Christopher Nolan`,
    `Sergio Leone`,
  ],
  posters: [
    `popeye-meets-sinbad.png`,
    `made-for-each-other.png`,
    `sagebrush-trail.jpg`,
    `santa-claus-conquers-the-martians.jpg`,
    `the-dance-of-life.jpg`,
    `the-great-flamarion.jpg`,
    `the-man-with-the-golden-arm.jpg`,
  ],
  genres: [
    `Action Adventure`,
    `Science fiction`,
    `Historical`,
    `Animation`,
    `Fantasy`,
    `Drama`,
    `Comedy`,
    `Horror`,
  ],
  countries: [
    `USA`,
    `Russia`,
    `France`,
    `Spain`,
    `UK`,
  ],
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`,
  comment: {
    emoji: [
      `smile.png`,
      `angry.png`,
      `puke.png`,
      `sleeping.png`,
    ],
    authors: [
      `Harry Potter`,
      `Tom Riddle`,
      `Dambldore`,
      `Doc Brown`,
      `Gandalf`,
      `Frodo Baggins`,
      `Samwise Gamgee`,
      `Peregrin Took`,
      `Merry Brandybuck`,
    ],
    messages: [
      `Great! 👍👍👍`,
      `Best! 🔥🔥`,
      `lol`,
      `The game of thrones is better!`,
      `Первых нах!`,
      `Awful shit 🤮`,
      `👎👎👎👎👎`,
      `Jon Snow is alive!`,
      `Almost two hours? Seriously?`,
      `Very very old. Meh`,
      `the book was better`,
    ]
  }
};

const getRandomElem = (arr) => arr[Math.floor(Math.random() * arr.length)];
const getRandomNumber = (min, max, digits = 0) => (Math.random() * (max - min) + min).toFixed(digits);

const getRandomDate = () => {
  const randomDate = new Date(parseInt(getRandomNumber(0, Date.now(), 0), 10));
  return {
    date: randomDate.getDate(),
    month: randomDate.toLocaleString(`eng`, {month: `long`}),
    year: randomDate.getFullYear(),
  };
};

const getRandomSentences = (text, maxSentencesCount) => {
  const sentences = text.split(`. `);
  let newText = ``;
  for (let i = 0; i < getRandomNumber(1, maxSentencesCount); i++) {
    newText += sentences.splice(getRandomNumber(0, sentences.length - 1), 1) + `. `;
  }
  return newText.trim();
};

class Comment {
  constructor(comment) {
    this.emoji = getRandomElem(comment.emoji);
    this.author = getRandomElem(comment.authors);
    this.message = getRandomElem(comment.messages);
  }
}

class Film {
  constructor({names, posters, genres, description, comment}) {
    this.name = getRandomElem(names);
    this.nameOriginal = getRandomElem(names);
    this.poster = getRandomElem(posters);
    this.rating = getRandomNumber(0, 10, 1);
    this.releaseDate = getRandomDate();
    this.duration = getRandomNumber(1, 4) + `h ` + getRandomNumber(0, 60) + `m`;
    this.genre = getRandomElem(genres);
    this.description = getRandomSentences(description, MAX_DESC_SENTENCES_COUNT);
    this.comments = [];
    for (let i = 0; i < getRandomNumber(0, MAX_COMMENTS_COUNT); i++) {
      this.comments.push(new Comment(comment));
    }
    this.ageRating = getRandomNumber(0, 18) + `+`;
  }
}

const getFilm = () => new Film(FILM_DATA_MOCK);

export {getFilm};
