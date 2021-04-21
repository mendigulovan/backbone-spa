describe("models/Film", function(){
    //When
    describe("when building a new model", function(){
        //Then
        it("it builds the REST endpoint URL using the ID property", function(){
            var film = new app.models.Film({id:'1'});

            expect(film.url()).to.equal("api/film_1.json");
        });
    });
    
});

describe("models/Films", function(){
    //Then
    it("it builds the REST endpoint with the categoryID passed in the constructor option 'catId'", function(){
        var films = new app.models.Films(null, {catId:"categoryId"});

        expect(films.url()).to.equal("api/categoryId.json");
    });
    
});

describe("views/ContentList", function(){
    describe("When initializing", function(){
        it("It re-renders when the model changes", function(){
            var model = new app.models.Film({id:"id1"});

            var render = sinon.stub(app.views.FilmDetail.prototype, "render");
            var view = new app.views.FilmDetail({
                model: model
            });

            model.set("property", "value");

            expect(render.called).to.be.true;

            app.views.FilmDetail.prototype.render.restore();
        });
    });

    describe("When rendering", function(){
        var modelTemplate = {
            "id": "ea660b10-85c4-4ae3-8a5f-41cea3648e3e",
            "title": "Kiki's Delivery Service",
            "original_title": "魔女の宅急便",
            "original_title_romanised": "Majo no takkyūbin",
            "director": "Hayao Miyazaki",
            "producer": "Hayao Miyazaki",
            "description": "A young witch, on her mandatory year of independent life, finds fitting into a new community difficult while she supports herself by running an air courier service.",
            "release_date": "1989",
            "image":"https://i.guim.co.uk/img/media/aa5f12bac3ba95322c58929eab0303262dc20340/321_175_1509_905/master/1509.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=242ea5b7b0adae22bb80a3161a6c337f"
        }
        it("it renders title", function(){
            var model = new app.models.Film(modelTemplate);
            var view = new app.views.FilmDetail({
                model: model
            });

            view.render();

            expect(view.$('[data-id=title]').text()).to.equal("Kiki's Delivery Service");
        });
    });
});

describe("routers/Router", function(){
    var router;
    beforeEach(function(){
        var MocRouter = app.routers.Router.extend({
            home: sinon.spy(),
            category: sinon.spy(),
            film: sinon.spy(),
            unknown: sinon.spy()
        });
        router = new MocRouter();

        if(Backbone.History.started !== true) {
            Backbone.history.start();
        }    
    });
  
    it("Router routes to category if hash fragment contains 'category/catId'", function(){
        router.navigate("category/catId",{trigger:true});
        expect(router.category.called).to.be.true;
    });

    it("routes to home if no hash fragment is present", function(){
        router.navigate("",{trigger:true});
        expect(router.home.called).to.be.true;
    });
})