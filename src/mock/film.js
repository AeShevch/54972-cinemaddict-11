/*
* Constants
* */
const MAX_DESC_SENTENCES_COUNT = 5;
const MAX_COMMENTS_COUNT = 5;
const MAX_WRITERS_COUNT = 4;
const MAX_ACTORS_COUNT = 4;
const MAX_GENRES_COUNT = 3;

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
  description: [
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    `Cras aliquet varius magna, non porta ligula feugiat eget.`,
    `Fusce tristique felis at fermentum pharetra.`,
    `Aliquam id orci ut lectus varius viverra.`,
    `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
    `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
    `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
    `Sed sed nisi sed augue convallis suscipit in sed felis.`,
    `Aliquam erat volutpat.`,
    `Nunc fermentum tortor ac porta dapibus.`,
    `In rutrum ac purus sit amet tempus.`,
  ],
  comment: {
    emoji: [
      `smile.png`,
      `angry.png`,
      `puke.png`,
      `sleeping.png`,
    ],
    alts: [
      `emoji-smile`,
      `emoji-sleeping`,
      `emoji-puke`,
      `emoji-angry`,
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
    ],
  },
};

/*
* Functions
* */
const getRandomElem = (arr) => arr[Math.floor(Math.random() * arr.length)];
const getRandomNumber = (min, max, digits = 0) => (Math.random() * (max - min) + min).toFixed(digits);
const getRandomDate = () => new Date(parseInt(getRandomNumber(0, Date.now()), 10));

const getRandomStringFromArray = (array, maxSentencesCount, delimiter = `, `) => {
  let newText = ``;
  const elementsCount = getRandomNumber(1, maxSentencesCount);
  const arr = array.slice();
  for (let i = 0; i < elementsCount; i++) {
    newText += arr.splice(getRandomNumber(0, arr.length - 1), 1)[0] + (i !== elementsCount - 1 ? delimiter : ``);
  }
  return newText;
};

/*
* Classes
* */
class Comment {
  constructor(comment) {
    this.emoji = {
      icon: getRandomElem(comment.emoji),
      alt: getRandomElem(comment.alts),
    };
    this.date = getRandomDate();
    this.author = getRandomElem(comment.authors);
    this.message = getRandomElem(comment.messages);
  }
}

class Film {
  constructor(mock) {
    this.name = getRandomElem(mock.names);
    this.nameOriginal = getRandomElem(mock.names);
    this.poster = {
      file: getRandomElem(mock.posters),
      alt: getRandomElem(mock.names),
    };
    this.details = {
      'Director': getRandomElem(mock.directors),
      'Writers': getRandomStringFromArray(mock.writers, MAX_WRITERS_COUNT),
      'Actors': getRandomStringFromArray(mock.actors, MAX_ACTORS_COUNT),
      'Release Date': getRandomDate(),
      'Runtime': getRandomNumber(1, 4) + `h ` + getRandomNumber(0, 60) + `m`,
      'Country': getRandomElem(mock.countries),
      'Genres': getRandomStringFromArray(mock.genres, MAX_GENRES_COUNT).split(`, `),
    };
    this.rating = getRandomNumber(0, 10, 1);
    this.description = getRandomStringFromArray(mock.description, MAX_DESC_SENTENCES_COUNT, ` `);
    this.comments = [];
    for (let i = 0; i < getRandomNumber(0, MAX_COMMENTS_COUNT); i++) {
      this.comments.push(new Comment(mock.comment));
    }
    this.ageRating = getRandomNumber(0, 18) + `+`;
  }
}

export const getFilm = () => new Film(FILM_DATA_MOCK);
