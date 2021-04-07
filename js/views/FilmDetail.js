app.views.FilmDetail = Backbone.View.extend({    
    initialize: function() {
        this.listenTo(this.model,"change", this.render);
    },

    render: function() {
        this.$el.html(
            '<header class="film-header l-content l-content-constrained l-row">'+
                '<div class="l-column thumb-image">'+
                   '<img src="'+this.model.get("image")+'">'+
                '</div>'+
                '<div class="l-column l-padding">'+
                '<div class="title">'+this.model.get("title")+'</div>'+
                '<div class="title">'+this.model.get("original_title")+'</div>'+
                '<div><em>'+this.model.get("director")+'</em> '+this.model.get("release_date")+
                '<br>'+this.model.get("rt_score")+'</div>'+
                '</div>'+
            '</header>'+
            '<div class="content l-content l-content-constrained standout">'+
                '<div class="title">Description</div>'+
                '<p>'+this.model.get("description")+'</p>'+
            '</div>'
        );
    return this;
    }
});