function scriptLoad(source, callback) {
    var script = document.createElement('script');
    script.async = true;
    script.src = source;
    script.onreadystatechange = script.onload = function() {
        var state = script.readyState;
        if (!callback.done && (!state || /loaded|complete/.test(state))) {
            callback.done = true;
            callback();
        }
    };
    
    document.getElementsByTagName('head')[0].appendChild(script);
}


function styleLoad(source, callback) {
    var style = document.createElement('link');
    style.async = false;
    style.type = "text/css";
    style.href = source;
    style.rel = "stylesheet";		
    style.onreadystatechange = stateChangeOrLoad();
    style.onload = stateChangeOrLoad();
    function stateChangeOrLoad() {
        var state = style.readyState;
        if (!callback.done && (!state || /loaded|complete/.test(state))) {
            callback.done = true;
            callback();
        }
    };
    document.getElementsByTagName('head')[0].appendChild(style);
}


//Loading scripts

var javascripts = {};
javascripts["jquery.min"] = "../../assets/bower_components/jquery/dist/jquery.min.js";
javascripts["angular"] = "../../assets/bower_components/angular/angular.js";
javascripts["angular-ui-router"] = "../../assets/bower_components/angular-ui-router/release/angular-ui-router.js";
javascripts["angular-animate"] = "../../assets/bower_components/angular-animate/angular-animate.js";
javascripts["lodash"] = "../../assets/bower_components/lodash/lodash.js";
javascripts["restangular"] = "../../assets/bower_components/restangular/src/restangular.js";
javascripts["angular-local-storage.min"] = "../../assets/bower_components/angular-local-storage/dist/angular-local-storage.min.js";
javascripts["ui-utils"] = "../../assets/bower_components/angular-ui-utils/ui-utils.js";
javascripts["ng-table.min"] = "../../assets/bower_components/ng-table/dist/ng-table.min.js";
javascripts["ui-bootstrap-tpls"] = "../../assets/bower_components/angular-bootstrap/ui-bootstrap-tpls.js";
javascripts["ocLazyLoad"] = "../../assets/bower_components/oclazyload/dist/ocLazyLoad.js";
//app specific js
javascripts["app"] = "../../assets/js/app.js";
javascripts["config"] = "../../assets/js/config.js";
javascripts["config.lazyload"] = "../../assets/js/config.lazyload.js";
javascripts["config.router"] = "config.router.js";
javascripts["main"] = "../../assets/js/main.js";
javascripts["services"] = "../../assets/js/services.js";
javascripts["ui-load"] = "../../assets/js/services/ui-load.js";
javascripts["fromNow"] = "../../assets/js/filters/fromNow.js";
javascripts["setnganimate"] = "../../assets/js/directives/setnganimate.js";
javascripts["ui-butterbar"] = "../../assets/js/directives/ui-butterbar.js";
javascripts["ui-focus"] = "../../assets/js/directives/ui-focus.js";
javascripts["ui-fullscreen"] = "../../assets/js/directives/ui-fullscreen.js";
javascripts["ui-jq"] = "../../assets/js/directives/ui-jq.js";
javascripts["ui-module"] = "../../assets/js/directives/ui-module.js";
javascripts["ui-nav"] = "../../assets/js/directives/ui-nav.js";
javascripts["ui-scroll"] = "../../assets/js/directives/ui-scroll.js";
javascripts["ui-shift"] = "../../assets/js/directives/ui-shift.js";
javascripts["ui-toggleclass"] = "../../assets/js/directives/ui-toggleclass.js";
javascripts["bootstrap"] = "../../assets/js/controllers/bootstrap.js";

scriptLoad(javascripts["jquery.min"], function() {
	scriptLoad(javascripts["angular"], function() {

		scriptLoad(javascripts["angular-ui-router"], function() {});
		scriptLoad(javascripts["lodash"], function() {
			scriptLoad(javascripts["restangular"], function() {});
		});
		scriptLoad(javascripts["angular-local-storage.min"], function() {});
		scriptLoad(javascripts["angular-animate"], function() {});
		scriptLoad(javascripts["ng-table.min"], function() {});
		scriptLoad(javascripts["ocLazyLoad"], function() {});
		
		scriptLoad(javascripts["ui-utils"], function() {});
		scriptLoad(javascripts["ui-bootstrap-tpls"], function() {});

		//app specific scripts
		scriptLoad(javascripts["app"], function() {
			scriptLoad(javascripts["config"], function() {});
			scriptLoad(javascripts["config.lazyload"], function() {});
			scriptLoad(javascripts["config.router"], function() {});
			scriptLoad(javascripts["main"], function() {});
			scriptLoad(javascripts["services"], function() {});
			scriptLoad(javascripts["ui-load"], function() {});
			scriptLoad(javascripts["fromNow"], function() {});
			scriptLoad(javascripts["setnganimate"], function() {});
			scriptLoad(javascripts["ui-butterbar"], function() {});
			scriptLoad(javascripts["ui-focus"], function() {});
			scriptLoad(javascripts["ui-fullscreen"], function() {});
			scriptLoad(javascripts["ui-jq"], function() {});
			scriptLoad(javascripts["ui-module"], function() {});
			scriptLoad(javascripts["ui-nav"], function() {});
			scriptLoad(javascripts["ui-scroll"], function() {});
			scriptLoad(javascripts["ui-shift"], function() {});
			scriptLoad(javascripts["ui-toggleclass"], function() {});
			scriptLoad(javascripts["bootstrap"], function() {});
		});
	});	
});



//loading styles

var stylesheets = {};
stylesheets["bootstrap"] ="../../assets/bower_components/bootstrap/dist/css/bootstrap.css";
stylesheets["animate"] ="../../assets/bower_components/animate.css/animate.css";
stylesheets["font-awesome.min"] ="../../assets/bower_components/font-awesome/css/font-awesome.min.css";
stylesheets["simple-line-icons"] ="../../assets/bower_components/simple-line-icons/css/simple-line-icons.css";
stylesheets["ng-table.min"] ="../../assets/bower_components/ng-table/dist/ng-table.min.css";
stylesheets["font"] ="../../assets/css/font.css";
stylesheets["app"] ="../../assets/css/app.css";
stylesheets["mystyles"] ="../../assets/css/mystyles.css";

styleLoad(stylesheets["bootstrap"], function() {});
styleLoad(stylesheets["animate"], function() {});
styleLoad(stylesheets["font-awesome.min"], function() {});		
styleLoad(stylesheets["simple-line-icons"], function() {});
styleLoad(stylesheets["ng-table.min"], function() {});
styleLoad(stylesheets["font"], function() {});			
styleLoad(stylesheets["app"], function() {});
styleLoad(stylesheets["mystyles"], function() {});




