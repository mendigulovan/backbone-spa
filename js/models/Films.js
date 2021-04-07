app.models.Films = Backbone.Collection.extend ({
    initialize: function(models, options){
        this.options = options;
        this.catId = this.options.catId;
    },

    url: function(){
        return 'api/' + this.options.catId+'.json';
    }
});