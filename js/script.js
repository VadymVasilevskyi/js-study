
'use strict'



const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {

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
    },
    detectPersonalLevel: function () {

        if (personalMovieDB.count < 10) {
            console.log ('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >=10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log ('error');
        }
    },

    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        }else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function () {
        for (let i =1; i < 4; i++) {
            let genre = prompt (`Ваш любимый жанр под номером ${i}`);

            if (genre === '' || genre === null) {
                console.log('Вы ввели некорректные данные или не ввели их вовсе');
            i--;
            } else {
             
            personalMovieDB.genres[i-1] = genre;
            } // Если не использовать индекс - 1 в базу данных элемент под индексом 0 запишется как пустой объект
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        })
    }
};







