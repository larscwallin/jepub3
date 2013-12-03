/*
	Requires jepub.js
*/
(function(jepub){
	jepub.Reader = function(options){
		var self = this;
		var shelf = [];
		var catalogs = [];
		var publications = [];

		this.init = function(state){

		};

		this.addCatalog = function(uri){};

		this.removeCatalog = function(id){};

		this.loadCatalog = function(id){
			// Return jepub.opds.Catalog object
		};

		this.Catalog = {
			add: function(){},
			remove: function(){},
			lookup: function(){}			
		};

		this.Publication = {
			add: function(){},
			remove: function(){},
			lookup: function(){}			
		};
	};
	

})(jepub);