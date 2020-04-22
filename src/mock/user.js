/**
 * Returns user data
 * @return {{rating: string, avatar: string}}
 */
const getUserData = () => ({
  avatar: `bitmap@2x.png`,
  rating: `Movie Buff`
});

class User {
  constructor(userData) {
    this.avatar = userData.avatar;
    this.rating = userData.rating;
  }
}

export const user = new User(getUserData());
