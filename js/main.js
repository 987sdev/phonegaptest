var app = {

    showAlert: function (message, title) {
        if (navigator.notification) {
            navigator.notification.alert(message, null, title, 'OK - JNW');
        } else {
            alert(title ? (title + ": " + message) : message);
        }
    },

    findByName: function() {
        console.log('findByName');
        this.store.findByName($('.search-key').val(), function(employees) {
            var l = employees.length;
            var e;
            $('.employee-list').empty();
            for (var i=0; i<l; i++) {
                e = employees[i];
                $('.employee-list').append('<li><a href="#employees/' + e.id + '">' + e.firstName + ' ' + e.lastName + '</a></li>');
            }
        });
    },
    
    renderHomeView: function() {
        var self = this;
        self.showAlert('in renderhomeview', 'Info');
    var html =
            "<div class='header'><h1>Home James JS</h1></div>" +
            "<div class='search-view'>James Test2" +
            "<input class='search-key'/>" +
            "<ul class='employee-list'></ul>" +
            "</div>"
    $('body').html(html);
    $('.search-key').on('keyup', $.proxy(this.findByName, this));
    },
    
    initialize: function() {
    var self = this;
    this.store = new MemoryStore(function() {
        self.showAlert('Store Initialized James', 'Info');
        self.renderHomeView();
    });
}

};

app.initialize();