'use strict'

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
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
        const  a = prompt ('Один из просмотренных фильмов', ''),
               b = prompt ('На сколько оцените его', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50 ) {
        
    //Если а не равно 'Отмена' b не равно "Отмена" И а не равно "пустая строка"
    // b не равно " пустая строка" и длина а меньше 50 символов
                    personalMovieDB.movies[a] = b;
                console.log ('done');
        } else {
                console.log('error');
                i--;
            }
               
    
    }
}

rememberMyFilms ();



function detectPersonalLevel () {

    if (personalMovieDB.count < 10) {
        console.log ('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >=10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log ('error');
    }
}

detectPersonalLevel();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);


function writeYourGenres () {
    for (let i =1; i < 4; i++) {
         
        personalMovieDB.genres[i-1] = prompt (`Ваш любимый жанр под номером ${i}`); // Если не использовать индекс - 1 в базу данных элемент под индексом 0 запишется как пустой объект
    }
}

writeYourGenres();