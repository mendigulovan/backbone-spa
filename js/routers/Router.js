app.routers.Router = Backbone.Router.extend({
    routes: { 
        'category/:id/film/:filmId': 'film',
        'category/:id': 'category',
        '': 'home',
        '*default': 'unknown'
    },

    home: function(){
        console.log("home");
    },

    category: function(id){
        console.log("cat" + id)

        app.data.films = new app.models.Films(null, {catId: id})
        console.log(app.data.films.url())

        app.data.currentView = new app.views.ContentList({
            collection: app.data.films
        });

        app.data.films.fetch()
    },

    film: function(id, filmId){
        console.log("film"+ film)
    },

    unknown: function(){
        console.log("Unknown route")
    }
});