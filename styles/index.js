var hide_lists = function(cb) {
    $('#about').fadeOut(300);
    $('#posts').fadeOut(300);
    $('#projects').fadeOut(300);
    $('#about-btn').removeClass('disabled')
    $('#posts-btn').removeClass('disabled');
    $('#projects-btn').removeClass('disabled')
};
var show_projects = function() {    
    $('#posts-btn').removeClass('disabled');
    $('#about-btn').removeClass('disabled');
    $('#about').fadeOut(300);
    $('#posts').fadeOut(300, function() {
        $('#projects').fadeIn(300);
    });
    $('#projects-btn').addClass('disabled')
};
var show_posts = function() {
    $('#projects-btn').removeClass('disabled');
    $('#about-btn').removeClass('disabled');
    $('#about').fadeOut(300);
    $('#projects').fadeOut(300, function() {
        $('#posts').fadeIn(300);
    });
    $('#posts-btn').addClass('disabled')
};
var show_about = function() {
    $('#posts-btn').removeClass('disabled');
    $('#posts-btn').removeClass('disabled');
    $('#projects').fadeOut(300);
    $('#posts').fadeOut(300, function() {
        $('#about').fadeIn(300);
    });
    $('#about-btn').addClass('disabled')
};
