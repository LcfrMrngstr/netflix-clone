// The json file 

const movie_details = {
    list : [
        {
            title: '',
            description: '',
            rating: '',
            genre: [''],
            src: '',
            extra_src: ''
        },
        {
            title: 'Blade Runner 2049',
            description: 'K, an officer with the Los Angeles Police Department, unearths a secret that could create chaos. He goes in search of a former blade runner who has been missing for over three decades.',
            rating: '',
            genre: ['favorites'],
            src: 'assets/bladerunner_2.jpg',
            extra_src: 'assets/bladerunner_extra.jpg'
        },
        {
            title: 'Inception',
            description: 'Cobb steals information from his targets by entering their dreams. Saito offers to wipe clean Cobb\'s criminal history as payment for performing an inception on his sick competitor\'s son.',
            rating: '',
            genre: [ 'my_list'],
            src: 'assets/inception.jpg',
            extra_src:'assets/inception_extra.jpg'
        },
        {
            title: 'Interstellar',
            description: 'When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.',
            rating: '',
            genre: ['favorites'],
            src: 'assets/interstellar.jpg',
            extra_src:'assets/interstellar_extra.webp'
        },
        {
            title: 'Fight Club',
            description: 'Unhappy with his capitalistic lifestyle, a white-collared insomniac forms an underground fight club with Tyler, a careless soap salesman. Soon, their venture spirals down into something sinister.',
            rating: '',
            genre: ['my_list'],
            src: 'assets/fight_club.jpg',
            extra_src:'assets/fight_club_extra.jpg'
        },
        {
            title: 'Alien(1979)',
            description: 'The crew of a spacecraft, Nostromo, intercept a distress signal from a planet and set out to investigate it. However, to their horror, they are attacked by an alien which later invades their ship.',
            rating: '',
            genre: ['favorites'],
            src: 'assets/alien.jpg',
            extra_src: 'assets/alien_extra.jpg'
        },
        {
            title: 'Dune',
            description: 'Paul Atreides arrives on Arrakis after his father accepts the stewardship of the dangerous planet. However, chaos ensues after a betrayal as forces clash to control melange, a precious resource.',
            rating: '',
            genre: ['favorites'],
            src: 'assets/dune.jpg',
            extra_src: 'assets/dune_extra.jpg'
        },
        {
            title: 'Silence of the Lambs',
            description: 'Clarice Starling, an FBI agent, seeks help from Hannibal Lecter, a psychopathic serial killer and former psychiatrist, in order to apprehend another serial killer who has been claiming female victims.',
            rating: '',
            genre: ['favorites'],
            src: 'assets/silence_of_the_lambs.jpg',
            extra_src: 'assets/silence_of_the_lambs_extra.jpg'
        },
        {
            title: 'Schindler\'s List',
            description: 'Oskar Schindler, a German industrialist and member of the Nazi party, tries to save his Jewish employees after witnessing the persecution of Jews in Poland.',
            rating: '',
            genre: ['my_list'],
            src: 'assets/schindlers_list.jpg',
            extra_src: 'assets/schindlers_list_extra.webp'
        },
        {
            title: 'The Dark Knight',
            description: 'After Gordon, Dent and Batman begin an assault on Gotham\'s organised crime, the mobs hire the Joker, a psychopathic criminal mastermind who offers to kill Batman and bring the city to its knees.',
            rating: '',
            genre: ['my_list'],
            src: 'assets/dark_knight.webp',
            extra_src: 'assets/dark_knight_extra.jpg'
        },

        {
            title: 'Black Mirror',
            description: 'In an abstrusely dystopian future, several individuals grapple with the manipulative effects of cutting edge technology in their personal lives and behaviours.',
            rating: '',
            genre: ['my_list'],
            src: 'assets/black_mirror.jpg',
            extra_src: 'assets/black_mirror_extra.jpg'
        },



    ]
}


//console.log(movie_details)
//console.log(movie_details.list[0].title)                  //This is the format we need to access data

//Finding the number of movies
console.log('Number of movies: ' + movie_details.list.length)


//Adding movies to the html

var current_html_favorites = ''
var current_html_my_list = ''

console.log('Adding movies to the page')

movie_details.list.forEach(element =>{
    var movie_name = element.title
    var movie_description = element.description
    var movie_genre = element.genre
    var movie_rating = element.rating
    var movie_image_source = element.src

    //html construction
    var html_to_add = '<div class="movie" id="'+movie_name+'"><div class="movie_image_container"><img src="'+movie_image_source+'"></div><div class="inside_name"><span>'+movie_name+'</span></div></div>'
    console.log(html_to_add)
    if(movie_genre=='favorites'){
        current_html_favorites += html_to_add
    }
    if(movie_genre=='my_list'){
        current_html_my_list +=html_to_add
    }
})
document.getElementById('movie_container_1').innerHTML = current_html_favorites
document.getElementById('movie_container_2').innerHTML = current_html_my_list
console.log('Finished adding movies')



//Creating the extra info function
const movies = document.querySelectorAll('.movie')

movies.forEach(element =>{

    element.addEventListener('click', ()=>{


        //Finding the movie in the json file
        var movie_name = element.id
        console.log('Clicked on movie: '+ movie_name)
        var count = 0
        var movie_desc = ''
        var genre = ''
        var src = ''
        movie_details.list.forEach(element_2 =>{
            if(element_2.title == movie_name){
                console.log('Found movie in JSON file')
                movie_desc = element_2.description
                genre = element_2.genre
                src = element_2.extra_src
                return movie_desc, genre,src
            }
        })
        console.log("Movie description: "+movie_desc)

        //Adding the data into the right html
        if(genre=='favorites'){    // Add to extra info 1
            document.getElementById('extra_info_1').innerHTML = "<div class='extra_image_container'><img src='"+src+"'><span class='close_button'>Close</span></div></img><div class='extra_info_inner'><h3 class='extra_info_inner'>"+movie_name+"</h3><p class='extra_info_description'>"+movie_desc+"</p></div>"
            //Changing the class to fit the new layout
            document.querySelector('#extra_info_1').className = 'extra_movie_information CLICKED'
            document.querySelector('#horizontal_container_1').className = ' horizontal_container CLICKED'
         }
         if(genre=='my_list'){    // Add to extra info 2
            document.getElementById('extra_info_2').innerHTML = "<div class='extra_image_container'><img src='"+src+"'></img><span class='close_button'>Close</span></div><div class='extra_info_inner'><h3 class='extra_info_inner'>"+movie_name+"</h3><p class='extra_info_description'>"+movie_desc+"</p></div>"
            //
            document.querySelector('#extra_info_2').className = 'extra_movie_information CLICKED'
            document.querySelector('#horizontal_container_2').className = ' horizontal_container CLICKED'
         }

         
        //When the user exits the extra info section
        const close_buttons = document.querySelectorAll('.close_button')
        console.log(close_buttons)
        close_buttons.forEach(button=>{
                button.addEventListener('click', ()=>{
                console.log('Closing extra information')
                document.querySelector('#extra_info_1').className = 'extra_movie_information'
                document.querySelector('#extra_info_2').className = 'extra_movie_information'
                document.querySelector('#horizontal_container_1').className = ' horizontal_container'
                document.querySelector('#horizontal_container_2').className = ' horizontal_container'
                document.getElementById('extra_info_2').innerHTML =''
                document.getElementById('extra_info_1').innerHTML =''
            })
        })

        
    })
})


//When the user exits the extra info section


