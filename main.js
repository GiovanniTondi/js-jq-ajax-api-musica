
function downloadAlbums() {

    $.ajax({

        url: 'https://flynn.boolean.careers/exercises/api/array/music',
        method: 'GET',
        success: function (data) {

            var success = data['success'];
            var albums = data['response'];
            // console.log(albums);

            showAlbums(albums);

        },
        error: function (err) {
            console.log('Errore:', err);
        }
    });
}

function showAlbums(albums) {

    var template = $('#album-template').html();
    var compiled = Handlebars.compile(template);
    var target = $('#cds-container');

    for (var i = 0; i < albums.length; i++) {
        var album = compiled(albums[i]);
        target.append(album);
    }

}

function init() {
    downloadAlbums();
}


$(document).ready(init);
