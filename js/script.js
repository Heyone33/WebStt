"use strict";

 const numberOfFilms = Number(prompt("Сколько фильмов вы уже посмотрели?", ""));


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



for (let i = 0; i < numberOfFilms; i++) {
    const a = prompt("Фильм", ""),
          b = prompt("Оценка?", "");

    if (a != null && b != null && a != "" & b != "" && a.length < 50){
        personalMovieDB.movies[a] = b;
    }else{
       i--; 
    }
}

if (personalMovieDB.count < 10){
    alert("Мало фильмов");
}else if(personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
    alert("Норм фильмов");
}else if(personalMovieDB.count > 30){
    alert("Много фильмов");
}else{
    alert("Ошибка");
}

console.log(personalMovieDB);