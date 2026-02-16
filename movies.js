const movies = [
{
id:1,
title:"Night of the Living Dead",
year:"1968",
genre:"Horror",
director:"George A. Romero",
poster:"https://upload.wikimedia.org/wikipedia/commons/6/63/Night_of_the_Living_Dead_1968_film_poster.jpg",
youtube:"https://www.youtube.com/embed/H91BxkBXttE",
story:"A group of strangers take shelter in a farmhouse while zombies attack."
},
{
id:2,
title:"Metropolis",
year:"1927",
genre:"Sci-Fi",
director:"Fritz Lang",
poster:"https://upload.wikimedia.org/wikipedia/commons/0/06/Metropolisposter.jpg",
youtube:"https://www.youtube.com/embed/AVbC3uQ5Gm4",
story:"A futuristic city divided between wealthy elites and underground workers."
},
{
id:3,
title:"The General",
year:"1926",
genre:"Comedy",
director:"Buster Keaton",
poster:"https://upload.wikimedia.org/wikipedia/commons/3/3e/The_General_%281926%29.jpg",
youtube:"https://www.youtube.com/embed/c9O3Yk8l1Ck",
story:"A train engineer tries to rescue his locomotive during the Civil War."
},
{
id:4,
title:"The Gold Rush",
year:"1925",
genre:"Comedy",
director:"Charlie Chaplin",
poster:"https://upload.wikimedia.org/wikipedia/commons/7/7e/Gold_Rush_1925_poster.jpg",
youtube:"https://www.youtube.com/embed/9rR8Wb0HqG4",
story:"A prospector ventures into the Klondike in search of gold."
},
{
id:5,
title:"His Girl Friday",
year:"1940",
genre:"Comedy",
director:"Howard Hawks",
poster:"https://upload.wikimedia.org/wikipedia/commons/2/2d/His_Girl_Friday_lobby_card.jpg",
youtube:"https://www.youtube.com/embed/3kU5yJ9X0Dk",
story:"A newspaper editor tries to win back his ex-wife."
},
{
id:6,
title:"The Phantom of the Opera",
year:"1925",
genre:"Horror",
director:"Rupert Julian",
poster:"https://upload.wikimedia.org/wikipedia/commons/4/4d/Phantom1925Poster.jpg",
youtube:"https://www.youtube.com/embed/2fY0nW4qY0A",
story:"A masked figure haunts the Paris Opera House."
},
{
id:7,
title:"Robin Hood",
year:"1922",
genre:"Adventure",
director:"Allan Dwan",
poster:"https://upload.wikimedia.org/wikipedia/commons/6/6b/Robin_Hood_1922_poster.jpg",
youtube:"https://www.youtube.com/embed/5W0E7k4x2xQ",
story:"The legendary outlaw fights injustice."
},
{
id:8,
title:"White Zombie",
year:"1932",
genre:"Horror",
director:"Victor Halperin",
poster:"https://upload.wikimedia.org/wikipedia/commons/4/4c/WhiteZombie.jpg",
youtube:"https://www.youtube.com/embed/Wl4O5u6lQ4Y",
story:"A man uses voodoo magic to create zombies."
},
{
id:9,
title:"Detour",
year:"1945",
genre:"Noir",
director:"Edgar G. Ulmer",
poster:"https://upload.wikimedia.org/wikipedia/commons/1/1f/Detour1945Poster.jpg",
youtube:"https://www.youtube.com/embed/8M2RjVxW6pA",
story:"A pianist hitchhikes and becomes trapped in crime."
},
{
id:10,
title:"D.O.A.",
year:"1950",
genre:"Thriller",
director:"Rudolph Maté",
poster:"https://upload.wikimedia.org/wikipedia/commons/9/95/D.O.A._1950_poster.jpg",
youtube:"https://www.youtube.com/embed/Q6T0GzV2x5E",
story:"A man investigates his own poisoning."
},
{
id:11,
title:"The Stranger",
year:"1946",
genre:"Thriller",
director:"Orson Welles",
poster:"https://upload.wikimedia.org/wikipedia/commons/6/6b/The_Stranger_poster.jpg",
youtube:"https://www.youtube.com/embed/mW6Jg9yLhX4",
story:"A war crimes investigator tracks a Nazi fugitive."
},
{
id:12,
title:"Beat the Devil",
year:"1953",
genre:"Adventure",
director:"John Huston",
poster:"https://upload.wikimedia.org/wikipedia/commons/2/21/Beat_the_Devil_poster.jpg",
youtube:"https://www.youtube.com/embed/0t2F9LxJ7dA",
story:"A group plots to secure uranium rights."
},
{
id:13,
title:"Too Late for Tears",
year:"1949",
genre:"Noir",
director:"Byron Haskin",
poster:"https://upload.wikimedia.org/wikipedia/commons/1/1c/Too_Late_for_Tears.jpg",
youtube:"https://www.youtube.com/embed/hRkD4H1nqkM",
story:"A woman keeps money meant for criminals."
},
{
id:14,
title:"House on Haunted Hill",
year:"1959",
genre:"Horror",
director:"William Castle",
poster:"https://upload.wikimedia.org/wikipedia/commons/5/5f/House_on_Haunted_Hill_%281959%29_poster.jpg",
youtube:"https://www.youtube.com/embed/8n0n6Jx8p3Y",
story:"Guests are offered money to stay in a haunted house."
},
{
id:15,
title:"The Brain That Wouldn't Die",
year:"1962",
genre:"Horror",
director:"Joseph Green",
poster:"https://upload.wikimedia.org/wikipedia/commons/4/4d/Brain_that_wouldnt_die.jpg",
youtube:"https://www.youtube.com/embed/4M9JZxJ9E6E",
story:"A surgeon keeps his fiancée's head alive."
},
{
id:16,
title:"Alice in Wonderland",
year:"1915",
genre:"Fantasy",
director:"W.W. Young",
poster:"https://upload.wikimedia.org/wikipedia/commons/5/5b/Alice_in_Wonderland_%281915%29_poster.jpg",
youtube:"https://www.youtube.com/embed/zeIXfdogJbA",
story:"A silent adaptation of Lewis Carroll's classic."
},
{
id:17,
title:"The Mark of Zorro",
year:"1920",
genre:"Adventure",
director:"Fred Niblo",
poster:"https://upload.wikimedia.org/wikipedia/commons/2/2d/Mark_of_Zorro_1920_poster.jpg",
youtube:"https://www.youtube.com/embed/8xVxX9f8J5E",
story:"A masked hero fights corruption."
},
{
id:18,
title:"My Man Godfrey",
year:"1936",
genre:"Comedy",
director:"Gregory La Cava",
poster:"https://upload.wikimedia.org/wikipedia/commons/8/82/My_Man_Godfrey_%281936_poster_-_Style_D%29.jpg",
youtube:"https://www.youtube.com/embed/1d7oZkL8n0s",
story:"A socialite hires a homeless man as a butler."
},
{
id:19,
title:"The Last Man on Earth",
year:"1964",
genre:"Sci-Fi",
director:"Ubaldo Ragona",
poster:"https://upload.wikimedia.org/wikipedia/commons/7/7b/Last_Man_on_Earth_poster.jpg",
youtube:"https://www.youtube.com/embed/8dM9WnX4vZk",
story:"The last survivor of a deadly plague hunts vampires."
},
{
id:20,
title:"A Christmas Carol",
year:"1910",
genre:"Drama",
director:"J. Searle Dawley",
poster:"https://upload.wikimedia.org/wikipedia/commons/3/3d/Christmas_Carol_1910.jpg",
youtube:"https://www.youtube.com/embed/Yt3sK7YkXw8",
story:"Ebenezer Scrooge learns the true meaning of Christmas."
}
];
