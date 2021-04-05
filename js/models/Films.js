app.models.Films = Backbone.Collection.extend ({
    initialize: function(models, options){
        this.options = options;
        this.catId = this.options.catId;
    },

    url: function(){
        return 'https://ghibliapi.herokuapp.com/' + this.options.catId;
    }
});