"use strict";
const addMovieBtn = document.getElementById("add-movie-btn")
const searchBtn = document.getElementById("search-btn")
const movies = []


const  renderMovie = (filter='')=>{
    const movieList = document.getElementById("movie-list")
    if(movies.length === 0){
        movieList.classList.remove('visible')
    }else {
        movieList.classList.add("visible")
    }
    movieList.innerHTML = ''
    const filteredMovies = !filter
    ? movies
    : movies.filter((movie)=> movie.info.title.includes(filter));
    filteredMovies.forEach(movie =>{
        const movieEl = document.createElement('li');
        const {info, ...other} = movie;
        // const {title:movieTitle} = info
        let {getFormattedTitle} = movie
        // getFormattedTitle = getFormattedTitle.bind(movie)
        // let text = getFormattedTitle.apply(movie) + ' - ';
        let text = getFormattedTitle.call(movie) + ' - ';
        for(const key in info){
            if(key !== 'title'){
                text = text + `${key}: ${info[key]}`
            }
        }
        movieEl.textContent = text
        movieList.append(movieEl)
    })
}

const addMovieHandler = ()=> {
    const title = document.getElementById('title').value;
    const extraName = document.getElementById("extra-name").value;
    const extrValue = document.getElementById("extra-value").value;
    if (title.trim() === '' ||
        extraName.trim() === "" ||
        extrValue.trim() === ''
    ) {
        return
    }
    const newMovie = {
        info: {
            title,
            [extraName]: extrValue,

        },
        id: Math.random().toString(),
        getFormattedTitle(){
        return this.info.title.toUpperCase();
        }
    }

    movies.push(newMovie)
    renderMovie()
}

const addSearchMovieHandler = ()=>{
    const filterTerm = document.getElementById('filter-title').value;
    renderMovie(filterTerm)
}
addMovieBtn.addEventListener('click',addMovieHandler)
searchBtn.addEventListener('click',addSearchMovieHandler)





















/////////////////////////////////////////////////////
/* Unimportant code*/
// const movieList =document.getElementById("movie-list");
// movieList.style["background-color"] = "red";
// movieList.style.display = "red";
// const userChosenKeyName = "level"



// let person = {
//     "first name":"Mohammed",
//     age:30,
//     hobbies: ['Sports',"reading"],
//     1.5:"Hello",
//     [userChosenKeyName]: "....",
//     greet:function(){
//         alert("HI there!")
//     }
// }
// // .....................................................
// person.isAdmin = true;
// // person.age = 21
// // We can delete the property with delete keyword
// // delete person.age
// // person.age = null
// const keyName = "Ahmed"
// console.log(person["first-name"])
// console.log(person[1.5])
// console.log(person[keyName])
// console.log(person)

// // person.greet()