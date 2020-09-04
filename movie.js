class Movie {
  constructor() {
    this.users;
  }

  async getUser(name) {
    const profileResponse = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=65be194fd8b889a68a3c247bad502fed&language=en-US&query=${name}&page=1&include_adult=false`
    );

    const movies = await profileResponse.json();
    console.log(movies.results, "---->>");

    return {
      movie: movies.results,
    };
  }
}
