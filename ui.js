class UI {
  constructor() {
    this.profile = document.getElementById("output");
  }

  showProfile(movie) {
    let output = "";

    for (let i = 0; i < movie.length; i++) {
      output += `
            <div class="card mb-3 " style="width: 18rem;">
                <img src="https://image.tmdb.org/t/p/w500${movie[i].poster_path}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5>movie:${movie[i].original_title}</h5>
                    <p>Release Date:${movie.release_date}</p>
                    <p>Language:${movie[i].original_language}</p>
                </div>
            </div>
         
        
           `;
    }
    document.getElementById("output").innerHTML = output;
  }

  //   clear field
  clearProfile() {
    this.profile.innerHTML = "";
  }

  //   show alert
  showAlert(message, className) {
    this.clearAlert();
    const div = document.createElement("div");
    div.className = className;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".searchinput");
    const search = document.querySelector(".searchinput");

    container.insertBefore(div, search);
    // timeout
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  //   clear alert message
  clearAlert() {
    const currentAlert = document.querySelector(".alert");

    if (currentAlert) {
      currentAlert.remove();
    }
  }
}
