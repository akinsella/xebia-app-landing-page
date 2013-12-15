
definePackage("xebia", function(pkg) {

    pkg.constants = {
        /* VIMEO_CHANNEL_ID : "544319" */
    };

    pkg.Application = fwk.Class.extend({

        start : function() {
            console.log("application started");

            var navView = new pkg.nav.NavView();

        }

    });

});