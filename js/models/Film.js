app.models.Film = Backbone.Model.extend({
    url: function(){
        return "api/film_" + this.get("id") + ".json";
    }
});