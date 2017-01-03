var GameDevDiary = function() {
    "use strict";

    var current_section = "cool-stuff",
        fadeIn_complete = true,
        sections = ["cool-stuff", "posts", "projects", "about"];

    var show_section = function(section_name) {
        if (!fadeIn_complete) {
            $("#" + current_section).fadeOut(0);
        }
        fadeIn_complete = false;

        $("#" + current_section + "-btn").removeClass('disabled');
        $("#" + current_section).fadeOut(300, function() {
            $("#" + section_name).fadeIn(300), function() {
                fadeIn_complete = true;
            }
        });

        $("#" + section_name + "-btn").addClass('disabled');
        current_section = section_name;
    };

    return {
        show_section: show_section
    }
}();

