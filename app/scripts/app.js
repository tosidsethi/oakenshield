var Oakenshield = window.Oakenshield = Ember.Application.create();

/* Order and include as you please. */
require('scripts/controllers/*');
require('scripts/store');
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/components/*');
require('scripts/views/*');
require('scripts/router');

Oakenshield.applicationName = "Project Oakenshield";
Oakenshield.applicationHome = "Home";
Oakenshield.applicationAbout = "About";
Oakenshield.applicationDataViz = "Data Viz";

$(document).on("click","#aboutUs",(function() {
    $('html, body').animate({
        scrollTop: $("#main").offset().top
    }, 750);
}));

$(document).on("click","#dataViz",(function() {
	$('svg').remove();
	DataViz();
    $('html, body').animate({
        scrollTop: $("#main").offset().top
    }, 750);
}));

