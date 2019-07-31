$(document).ready(function() {




 var apimusica = "https://flynn.boolean.careers/exercises/api/array/music";


 $.ajax(
    {
       url : apimusica,
       method: "GET",
       success: function(data){
          var musapi = data.response;
        console.log("lista cd", musapi);


        for (var i = 0; i < musapi.length; i++) {
          var cds = musapi[i];

        var cd = $("#disk-list").html();
        var compilato = Handlebars.compile(cd);
        console.log(compilato);
        var contenuti = {
          poster : cds.poster,
          title: cds.title,
          author: cds.author,
          year: cds.year,
          genre: cds.genre

        };

        $('.cds-container').append(compilato(contenuti));
}
},
          error: function(richiesta,stato,errore){
             console.log("c'è un problema con il server",richiesta,stato,errore);
          }
        });





});
