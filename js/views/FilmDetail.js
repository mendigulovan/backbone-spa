app.views.FilmDetail = Backbone.View.extend({   
    template: _.template($('script[data-id =film-detail-view]').html()),

    initialize: function() {
        this.listenTo(this.model,"change", this.render);
    },

    render: function() {
        this.$el.html( this.template({
            model: this.model
        })
        );

    return this;
    }
});