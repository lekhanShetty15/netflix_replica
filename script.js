let movie=[
    {
        name:"Jujutsu Kaisen O",
        poster:"https://m.media-amazon.com/images/M/MV5BODM0NmVjMzUtOTJhNi00N2ZhLWFkYmMtYmZmNjRiY2M1YWY4XkEyXkFqcGdeQXVyOTgxOTA5MDg@._V1_.jpg",
        rating:"9.0",
        cast:"Megumi Ogata, Kenjiro Tsuda, Kayleigh McKee",
    },
    {
        name:"Leo",
        poster:"https://static.moviecrow.com/gallery/20230921/221109-Leo%20Vijay%20Sanjay%20Dutt%20Poster.jpg",
        rating:"8.0",
        cast:"Vijay, Sanjay Dutt, Trisha",
    },
    {
        name:"Attack on Titan",
        poster:"https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81dH7-pkjiL._AC_UF1000,1000_QL80_.jpg",
        rating:"8.5",
        cast:"Yuki Kaji, Trina Nishimura, Yui Ishikawa",
    },
    {
        name:"Demon Slayer",
        poster:"https://m.media-amazon.com/images/M/MV5BN2EwNTUwYWItZTY4ZC00N2Q1LWFhZWQtNjMwMDBkZDVmYThjXkEyXkFqcGdeQXVyOTA2OTk0MDg@._V1_.jpg",
        rating:"8.9",
        cast:"Kana Hanazawa, Natsuki Hanae",
    },
    {
        name:"Salaar",
        poster:"https://i.pinimg.com/originals/2f/17/b1/2f17b1c0a4edac1fce93b47de968359a.jpg",
        rating:"8.1",
        cast:"Prabhas, Prithviraj, Shruthi",
    },
    {
        name:"Naruto Shippuden",
        poster:"https://i.ebayimg.com/images/g/r~AAAOSwnARgzgxc/s-l1600.jpg",
        rating:"9.3",
        cast:"Naruto, Madara, Kaskashi",
    },
    {
        name:"Moonlight",
        poster:"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/3ba32041615387.57acc4bf0b15f.jpg",
        rating:"9.3",
        cast:"Mahershala Ali, Trevante Rhodes",
    },
    {
        name:"One Punch Man",
        poster:"https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/719SkVbmqjL._AC_UF1000,1000_QL80_.jpg",
        rating:"10",
        cast:"Makoto Furukawa,Kaito Ishikawa",
    },


    {
        name:"Kantara",
        poster:"https://hombalefilms.com/wp-content/uploads/2021/08/KANTARA_ENG.jpg",
        rating:"10",
        cast:"Rishab Shetty, Sapthami Gowda",
    },

    {
        name:"KGF Chapter-2",
        poster:"https://xl.movieposterdb.com/23_09/2022/10698680/xl_kgf-chapter-2-movie-poster_c89d5120.jpg",
        rating:"9.9",
        cast:"Yash, Raveena",
    },

    {
        name:"Vikram",
        poster:"https://pbs.twimg.com/media/E57ohIgVoAcn0aM?format=jpg&name=4096x4096",
        rating:"8.6",
        cast:"Kamal Hassan, Fahaad Fassil, Vijay Sethupati",
    },

    {
        name:"Death Note",
        poster:"https://cdn.europosters.eu/image/750/posters/death-note-from-the-shadows-i58005.jpg",
        rating:"8.4",
        cast:"Nat Wolff, LaKeith Stanfield"
    }


];






function searchMovie(){
   let movieName= document.getElementById('search').value
   if(movieName!=""){
    let result=movie.filter(function(movie){
        return movie.name.toUpperCase().includes(movieName.toUpperCase())
    })
    displayMovies(result);
   }
   else{
    displayMovies(movie)
   }
};





function displayMovies(data)
{

    document.getElementById("movie").innerHTML="";

    let htmlString= ``;

    for(let i=0;i<data.length;i++){
        htmlString=htmlString+`
        <div class="movie">
    <div class="overlay">
        <div class="video">
    
        </div>
        <div class="details">
            <h1>${data[i].name}</h1>
            <h2>${data[i].rating}</h2>
            <p>${data[i].cast}</p>
        </div>
    </div>
    <img class="poster" src="${data[i].poster}" alt="poster">
    </div>
        `
    }

    document.getElementById("movie").innerHTML=htmlString
}
displayMovies(movie);