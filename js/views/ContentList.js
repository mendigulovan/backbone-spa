app.views.ContentList = Backbone.View.extend ({

    initialize: function(options){
        this.options = options;
        this.listenTo(this.collection, "change reset", this.render);
    },

  

    render: function(){
        console.log("List: render");

        this.$el.html('<ul></ul>');
        var $ul = this.$('ul'); //only within $el

        var filmPath = "#category/" + this.collection.catId + "/film/";

       
        this.collection.each(function(model){
                $ul.append(
                    '<li class="thumb">'+
                        (model.get("title") || model.get("name"))+
                        '<p>'+model.get("release_date")+'</p>'+              
                        '<a class="thumb-link" href="'+ filmPath+model.get("id")+'">'+                   
                            '<span class="overlay"></span>'+
                            '<img src="'+model.get("image")+'">'+                                                      
                        '</a>'+
                    '</li>'
                );
        });

        
        return this;
    }

});