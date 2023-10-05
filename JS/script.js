/* eslint-disable no-unused-vars */
"use strict";

let numberOfFilms;

function start() {
	numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели", "");
	while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели", "");
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
		const a = prompt("Один из последних просмотренных фильмов", ""),
			  b = prompt("На сколько оцените его?", "");
	
		if (a != null && b != null && a !="" && b != null && a.length < 50) {
			personalMovieDB.movies[a] = b;
			console.log("YES");
		} else {
			console.log("error");
			i--;
		}
	}
}

// rememberMyFilms();





function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		console.log("Просмотренно довольно мало фильмов");
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 20) {
		console.log("Вы классный зритель");
	} else if (personalMovieDB.count >= 20) {
		console.log ("Да вы киноман");
	} else {
		console.log("error");
	}
}

// detectPersonalLevel();

function showMyDB(hidden) {
	if (!hidden) {
		console.log(personalMovieDB);
	}
}

showMyDB(personalMovieDB.privat);



function writeYouGenres() {
	for(let i = 1; i <= 3; i++) {
		personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
	};
}

writeYouGenres();