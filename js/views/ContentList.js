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
            if(model.get("title")){
                $ul.append(
                    '<li class="thumb">'+model.get("title")+             
                        '<a class="thumb-link" href="'+ filmPath+model.get("id")+'">'+                   
                            '<span class="overlay"></span>'+
                            '<p>'+model.get("description")+'</p>'+
                            
                        '</a>'+
                    '</li>'
                );
            } else {
                $ul.append(
                    '<li class="thumb">'+ model.get("name")+             
                        '<a class="thumb-link" href="'+ filmPath+model.get("id")+'">'+                   
                            '<span class="overlay"></span>'+
                            '<p>'+model.get("films")+'</p>'+
                            '<img src="">'+
                        '</a>'+
                    '</li>'
                );
            }
        });

        
        return this;
    },

});