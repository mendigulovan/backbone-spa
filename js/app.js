
var HomeView = Backbone.View.extend({
    render: function() {
        this.$el.html(
            '<h1>Home page</h1>' +
            '<a href="#first">Go to First View</a>');
    }
});

var FirstView = Backbone.View.extend({
    render: function() {
        this.$el.html(
            '<h1>First View</h1>' +
            '<a href="#">Go back to the Home page</a>');
    }

});

var NoRouteView = Backbone.View.extend({
    render: function() {
        this.$el.html(
            '<h1>Next page...</h1>' +
            '<a href="#">Go to the Home page</a>');
    }

});

var view;


var AppRouter = Backbone.Router.extend({
    routes: {
        '': 'home',
        'first': 'routeToFirst',
        '*default' : 'noRoute'
    },

    home: function() {
        console.log("Home route");

      
        if(view) {
            view.undelegateEvents();
        }
        view = new HomeView({el: '#content'});
        view.render();
    },

    routeToFirst: function() {
        console.log("first route");
        if(view) {
            view.undelegateEvents();
        }
        view = new FirstView({el: '#content'});
        view.render();
    },

    noRoute: function() {
        console.log("no route");
        if(view) {
            view.undelegateEvents();
        }
        view = new NoRouteView({el: '#content'});
        view.render();
    }
});


var router = new AppRouter();


Backbone.history.start();
