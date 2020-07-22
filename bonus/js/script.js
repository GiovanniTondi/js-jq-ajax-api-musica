
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
    var target = $('#albums');

    for (var i = 0; i < albums.length; i++) {
        var album = compiled(albums[i]);
        target.append(album);
    }

}

function addListenerFiltraGenere() {

    $('#select-genere').click(filtraGenere);

}

function filtraGenere() {

    var value = $(this).val();

    if (value) {

        $('#albums .item').hide();
        $('#albums .item[data-id="' + value + '"]').show();
    } else {
        $('#albums .item').show();
    }
}

function init() {
    downloadAlbums();
    addListenerFiltraGenere();
}


$(document).ready(init);
