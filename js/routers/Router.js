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
        console.log("category " + id)

        app.data.films = new app.models.Films(null, {catId: id})
        console.log(app.data.films.url())

        this._cleanupCurrentView();
        app.data.currentView = new app.views.ContentList({
            collection: app.data.films
        });

        this._activateFilmsPanel();
        $(['data-id=films-list']).append(app.data.currentView.$el);

        app.data.films.fetch({reset: true}); //fetch will triger the loading of the data from the server
    },

    film: function(id, filmId){
        console.log("film"+ film)
    },

    unknown: function(){
        console.log("Unknown route")
    },

    _activateFilmsPanel: function(selector) {
        $('[data-id = "films-wrapper"].is-visible').removeClass('is-visible');
        $('[data-id = films-list]').addClass('is-visible');
    },

    _activateFilmDetailPanel: function(selector) {
        $('[data-id = "films-wrapper"].is-visible').removeClass('is-visible');
        $('[data-id = film]').addClass('is-visible');
    },

    _cleanupCurrentView: function(){
        if(app.data.currentView){
            app.data.currentView.remove();
            app.data.currentView = null;
        }
    }
});