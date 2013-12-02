/*
	This document is a purposed structure for JSON EPUB
	It is created and maintained by Lars C Wallin (@larscwallin)

  This is the OCF container document as specified in http://www.idpf.org/epub/30/spec/epub30-ocf.html

*/


var jepub = window.jepub ? window.jepub : {};
var jepub.ocf = {
	xmlns:{
			ocf:"urn:oasis:names:tc:opendocument:xmlns:container"
	},
	container : {		
		version:"1.0",
		rootfile :[
			{
				full_path:"EPUB/package.opf.js", 
				media_type:"application/oebps-package+javascript"
			}
		]
	}
};
