const addMovieModal = document.getElementById("add-modal");
// const addMovieModal = document.querySelector('#add-modal')
// const addMovieModal = document.body.children[1];

const startAddMoviebtn = document.querySelector("header button");
// const startAddMoviebtn = document.querySelector("header").lastElementChild;
const backdrop = document.getElementById("backdrop");
// const backdrop = document.body.firstElementChild
const cancelAddMovieButton = addMovieModal.querySelector(".btn--passive");
const confirmMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll("input");
// const userInputs= addMovieModal.getElementByTagName("input")
const entryTextSection = document.getElementById("entry-text");
const deleteMovieModal = document.getElementById("delete-modal");

const movies = [];

const updateUI = () => {
    if (movies.length === 0) {
        entryTextSection.style.display = "block";
    } else {
        entryTextSection.style.display = "none";
    }
};
const toggleBackdrop = () => {
    backdrop.classList.toggle("visible");
};
const closeMovieDeletionModal = () => {
    toggleBackdrop();
    deleteMovieModal.classList.remove("visible");
};

const deleteMovieHandler = (movieId) => {
    let movieIndex = 0;
    for (const movie of movies) {
        if (movieId === movie.id) {
            break;
        }
        movieIndex++;
    }
    movies.splice(movieIndex, 1);
    const listRoot = document.getElementById("movie-list");
    listRoot.children[movieIndex].remove();
    // listRoot.removeChild(listRoot.children[movieIndex]);
    closeMovieDeletionModal();
    updateUI();
};

const startDeleteMovieHandler = (movieId) => {
    deleteMovieModal.classList.add("visible");
    toggleBackdrop();
    const cancelDeletionButton =
        deleteMovieModal.querySelector(".btn--passive");
    let confirmDeletionButton = deleteMovieModal.querySelector(".btn--danger");
    confirmDeletionButton.replaceWith(confirmDeletionButton.cloneNode(true));
    confirmDeletionButton = deleteMovieModal.querySelector(".btn--danger");

    // confirmlDeletionButton.removeEventListener(
    //     "click",
    //     deleteMovieHandler.bind(null, movieId)
    // );
    cancelDeletionButton.removeEventListener("click", closeMovieDeletionModal);

    cancelDeletionButton.addEventListener("click", closeMovieDeletionModal);
    confirmDeletionButton.addEventListener(
        "click",
        deleteMovieHandler.bind(null, movieId)
    );
    // deleteMovie(movieId);
};

const renderNewMovieElement = (id, title, imageUrl, rating) => {
    const newMovieElement = document.createElement("li");
    newMovieElement.className = "movie-element";
    newMovieElement.innerHTML = `
    <div class="movie-element_image">
        <img src="${imageUrl}" alt="${title}">

    </div>
    <div class="movie-element_info">
        <h2>${title}</h2>
        <p>${rating}/5 stars</p>

    </div>

    
    `;
    newMovieElement.addEventListener(
        "click",
        startDeleteMovieHandler.bind(null, id)
    );
    const listRoot = document.getElementById("movie-list");
    listRoot.append(newMovieElement);
};

const clearMovieInput = () => {
    for (const usrInput of userInputs) {
        usrInput.value = "";
    }
};

const addMovieHandler = () => {
    const titleValue = userInputs[0].value;
    const imageUrlValue = userInputs[1].value;
    const ratingValue = userInputs[2].value;

    if (
        titleValue.trim() === "" ||
        imageUrlValue.trim() === "" ||
        ratingValue.trim() === "" ||
        +ratingValue < 1 ||
        +ratingValue > 5
    ) {
        alert("please Enter valid values (rating between 1 and 5).");
        return;
    }
    const newMovie = {
        id: Math.random().toString(),
        title: titleValue,
        image: imageUrlValue,
        rating: ratingValue,
    };

    movies.push(newMovie);
    console.log(movies);
    closeMovieModal();
    toggleBackdrop();
    clearMovieInput();
    renderNewMovieElement(
        newMovie.id,
        newMovie.title,
        newMovie.image,
        newMovie.rating
    );
    updateUI();
};

const showMovieModal = () => {
    addMovieModal.classList.add("visible");
    toggleBackdrop();
};

const closeMovieModal = () => {
    addMovieModal.classList.remove("visible");
};

const cancelAddMovieHandler = () => {
    closeMovieModal();
    toggleBackdrop();
    clearMovieInput();
};
const backdropClickHandler = () => {
    closeMovieModal();
    closeMovieDeletionModal();
    clearMovieInput();
};

startAddMoviebtn.addEventListener("click", showMovieModal);
backdrop.addEventListener("click", backdropClickHandler);
cancelAddMovieButton.addEventListener("click", cancelAddMovieHandler);
confirmMovieButton.addEventListener("click", addMovieHandler);
