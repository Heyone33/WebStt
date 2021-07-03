"use strict";


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: function () {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");

        while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    },

    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt("Последний фильм?", ""),
                b = prompt("Оценка фильма?", "");

            if (a != null && b != null && a != "" & b != "" && a.length < 50) {
                personalMovieDB.movies[a] = b;
            } else {
                i--;
            }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            alert("Мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            alert("Норм фильмов");
        } else if (personalMovieDB.count > 30) {
            alert("Много фильмов");
        } else {
            alert("Ошибка");
        }
    },
    writeYourGenres: function () {
        
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`, "");

            if(genre == "" || genre == null){
                console.log("Некорректное значение");
                i--;
            }else{
                personalMovieDB.genres[i - 1] = genre;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
             console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
        
    },

    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function (){
        if(personalMovieDB.privat){
           personalMovieDB.privat = false;
        }else{
            personalMovieDB.privat = true;
        }
    }

};




personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();
personalMovieDB.showMyDB();
