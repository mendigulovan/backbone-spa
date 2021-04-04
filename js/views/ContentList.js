app.views.ContentList = Backbone.View.extend ({
    initialize: function(options){
        this.options = options;
        this.listenTo(this.collection, "change reset", this.render);
    },

    render: function(){
        console.log("List: render");

        this.$el.html('<h1>Films list</h1>');
        return this;
    }
});