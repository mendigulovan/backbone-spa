app.views.FilmDetail = Backbone.View.extend({
    initialize: function() {
        this.listenTo(this.model,"change", this.render);
    },

    render: function(){
        this.$el.html(
            '<header class="film-header l-content l-content-constrained l-row">'+
                '<div class="l-column thumb-image">'+
                   '<img src="">'+
                '</div>'+
                '<div class="l-column l-padding">'+
                '<div class="title">'+this.model.get("title")+'</div>'+
                '<div class="title">'+model.get("original_title")+'</div>'+
                '<div><em>'+model.get("director")+'</em>'+model.get("release_date")+
                '<br>'+model.get("rt_score")+'</div>'+
                '</div>'+
            '</header>'+
            '<div class="content l-content l-content-constrained standout">'+
                '<h1 class="title">Description</h1>'+
                '<p>'+model.get("description")+'</p>'+
            '</div>'
        );
    
    }
});