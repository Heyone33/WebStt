"use strict";

const numberOfFilms = Number(prompt("Сколько фильмов вы уже посмотрели?", ""));

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("Фильм", ""),
      b = prompt("Оценка?", ""),
      c = prompt("Фильм", ""),
      d = prompt("Оценка?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB)