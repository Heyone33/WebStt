"use strict";

 let numberOfFilms;


 function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
 }
 start();
 
 
 
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt("Последний фильм?", ""),
              b = prompt("Оценка фильма?", "");
    
        if (a != null && b != null && a != "" & b != "" && a.length < 50){
            personalMovieDB.movies[a] = b;
        }else{
           i--; 
        }
    }
}


function detectPersonalLevel() {
    if (personalMovieDB.count < 10){
        alert("Мало фильмов");
    }else if(personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
        alert("Норм фильмов");
    }else if(personalMovieDB.count > 30){
        alert("Много фильмов");
    }else{
        alert("Ошибка");
    }
}


function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, "");
    }
}


function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}



// rememberMyFilms();
detectPersonalLevel();
// writeYourGenres();
writeYourGenres();
showMyDB(personalMovieDB.privat);





