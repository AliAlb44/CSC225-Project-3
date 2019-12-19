jQuery(document).ready(function(){
    $('#current-movie').html('...LOADING MOVIES...');
    axios.get('http://csc225.mockable.io/movies')
        .then(function(response){
            var moviesHTML = response.data.map(function(movie){
            return '<p class="movie" data-movie="'+movie.id+'">' + movie.title +  '</p>' ;
            });
            $('#movies').html(moviesHTML);
        });
        $('body').on('click', '.movie', function(){
            var id = $(this).data('movie');
            var url = 'http://csc225.mockable.io/movies/' + id;
            $('#current-movie').html('...LOADING INFO...');
            axios.get(url).then(function(response){
                var movie = response.data;
                var movieHTML = '<p>' + movie.title + '</p>';
                movieHTML += '<p>' + movie.director + '</p>';
                movieHTML += '<p>' + movie.release + '</p>';
                movieHTML += '<a href="' + movie.poster + '">[LINK]</a>';
                $('#current-movie').html(movieHTML);
            })
        });
});
