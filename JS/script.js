/* eslint-disable no-unused-vars */
"use strict";

const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	start: function() {
		personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");

		while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
			personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
		}
	}, 
	rememberMyFilms: function() {
		for (let i = 0; i < 2; i++) {
			const a = prompt("Один из последних просмотренных фильмов", "").trim(),
				  b = prompt("На сколько оцените его?", "").trim();
		
			if (a != null && b != null && a !="" && b != null && a.length < 50) {
				personalMovieDB.movies[a] = b;
				console.log("YES");
			} else {
				console.log("error");
				i--;
			}
		}
	},
	detectPersonalLevel: function() {
		if (personalMovieDB.count < 10) {
			console.log("Просмотренно довольно мало фильмов");
		} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 20) {
			console.log("Вы классный зритель");
		} else if (personalMovieDB.count >= 20) {
			console.log ("Да вы киноман");
		} else {
			console.log("error");
		}
	},
	showMyDB: function (hidden) {
		if (!hidden) {
			console.log(personalMovieDB);
		}
	},
	toggleVisibleMyDB: function() {
		if (personalMovieDB.privat) {
			personalMovieDB.privat = false;
		} else {
			personalMovieDB.privat = true;
		}
	},
	writeYouGenres: function() {
		for(let i = 1; i <= 3; i++) {
			personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
		};
	}
	
};
