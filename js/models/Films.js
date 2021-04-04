app.models.Films = Backbone.Collection.extend ({
    initialize: function(models, options){
        this.options = options;

    },

    url: function(){
        return 'https://ghibliapi.herokuapp.com/' + this.options.catId;
    }
});