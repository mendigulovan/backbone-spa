app.views.TopBar = Backbone.View.extend({
    events: {
        'click [data-id=cat-toggle]': 'toggleCategories',
        'click [data-id=cat]': 'selectCategory'
    },

    toggleCategories: function(evt) {
        evt.preventDefault();
        this.$('[data-id = categories]').toggleClass('is-visible');
    },

    selectCategory: function(evt){
        this.$('[data-id = categories]').removeClass('is-visible');
    }
});