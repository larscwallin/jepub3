/*
	This document is a purposed structure for a JavaScript dialect of the EPUB3 spec.
	It is created and maintained by Lars C Wallin (@larscwallin)

	This is the main Package definition as specified in http://www.idpf.org/epub/30/spec/epub30-publications.html

	The document is based on examples from https://code.google.com/p/epub-samples/ 
	and the Blank Book package (http://jasonhibbs.co.uk/2012/blank-book/) by Jason Mervyn Hibbs 

	As you will see its full of leftovers from my reference hunt. It will be cleaned as work progresses :)
*/

var opf = {
	xmlns: {
		opf:"http://www.idpf.org/2007/opf"
	},	
	package:{ 

		prefix:"rendition: http://www.idpf.org/vocab/rendition/#",
		version:"3.0", 
		xml_lang:"en",
		unique_identifier:"uid",
				
		/* 
			OPF Metadata
			(http://idpf.org/epub/30/spec/epub30-publications.html#sec-metadata-elem) 
		*/
		
		metadata : {

			xmlns :{				
				dc:"http://purl.org/dc/elements/1.1/"				
			},		

			/* Meta property elements (http://www.idpf.org/epub/30/spec/epub30-publications.html#sec-meta-elem) */
			meta:[ 
				{property:"file-as", refines:"#creator", value:"Hibbs, Jason"},
				{property:"role", refines:"#creator", scheme:"marc:relators", value:"aut"},
				{property:"dcterms:modified", value:"2012_05_29T23:59:59Z"},
				{property:"cover", value:"cover-image"},
				{property:"rendition:layout", value:"pre-bpaginated"},
				{property:"rendition:layout", value:"landscape"},
				{property:"rendition:spread", value:"landscape"},				
				{property:"media:duration", refines:"#p02smil", value:"0:00:04.600"},
				{property:"media:duration", refines:"#p03smil", value:"0:00:04.900"},
				{property:"media:duration", refines:"#p05smil", value:"0:00:04.675"},
				{property:"media:duration", value:"0:00:14.175"},
				{property:"media:narrator", value:"Jason Hibbs"},
				{property:"media:active-class", value:"-epub-media-overlay-active"}
			],

			/* 	Links to external metadata resources 

				(http://www.idpf.org/epub/30/spec/epub30-publications.html#sec-link-elem)
	
				Attributes
				href [required]
				An absolute or relative IRI reference [RFC3987] to a resource.

				rel [required]
				A space-separated list of property values.

				id [optional]
				The ID [XML] of this element, which must be unique within the document scope.

				refines [optional]
				Identifies the expression or resource augmented by this element. The value of the attribute must be a relative IRI [RFC3987] pointing to the resource or element it describes.

				When the refines attribute is omitted, the expression applies to the EPUB Publication as a whole.

				media-type [optional]
				A media type [RFC2046] that specifies the type and format of the resource referenced by this link.
			
				-- NOTE --

				Resources identified by the link element href attribute must not be represented as items in the manifest.

				-- /NOTE --

			*/
			link:[],

			/* Dublin Core Namespace (http://purl.org/dc/) */
			
			dc : {
				/* About the Book */
				title:{ 
					id:"en_title", 
					xml_lang:"en", 
					value:"Blank Book"
				},		
				description: { 
					id:"en_description", 
					xml_lang:"en", 
					value:"v1.00 _ A 3.0 standard, Fixed_Layout, Read Aloud ePUB containing all the stuff I wished somebody had put in one place for me to learn faster, and quicker. It may not be perfect, by the way. Tested only in Apple iBooks."
				},		
				creator: {
					id:"creator", 
					value:"Jason Hibbs"
				},				
				/* Publication */			
				publisher:{
					id:"en_publisher", 
					xml_lang:"en", 
					value:"Jason Hibbs"
				},
				date:"2012_05_28",
				language:"en",			
				
				/* Unique ID, e.g. ISBN, or generate a UUID here: http://www.itu.int/ITU-T/asn1/uuid.html */			
				identifier:{
					id:"uid",
					value:"MUST_BE_UNIQUE_blankbook"
				},
				/* License */		
				rights:{
					id:"en_rights",
					xml_lang:"en",
					value:"This work is licensed under a Creative Commons Attribution_ShareAlike (CC BY_SA) 3.0 Unported License."
				}
			}
		},	

		/* 
			The Manifest lists _all_ resources contained in the package, as well as links to external 
			resources. 

			(http://www.idpf.org/epub/30/spec/epub30-publications.html#sec-manifest-elem)

			-- ATTRIBUTES -- 
			
			id [optional]
			The ID [XML] of this element, which must be unique within the document scope.
			
			-- /ATTRIBUTES -- 

		*/
		manifest : {

			/*
				The Manifest Items (http://www.idpf.org/epub/30/spec/epub30-publications.html#sec-item-elem)

				-- ATTRIBUTES --

				id [required]
				The ID [XML] of this element, which must be unique within the document scope.

				href [required]
				An IRI [RFC3987] specifying the location of the Publication Resource described by this item.

				media-type [required]
				A media type [RFC2046] that specifies the type and format of the Publication Resource described by this item.

				fallback [conditionally required]
				An IDREF [XML] that identifies the fallback for a non-Core Media Type.

				Refer to Manifest Fallbacks for more information.

				properties [optional]
				A space-separated list of property values.

				Refer to Manifest item Properties for a set of properties defined by this specification.

				media-overlay [optional]
				An IDREF [XML] that identifies the Media Overlay Document for the resource described by this item.

				Refer to Packaging [MediaOverlays30] for more information.

				-- /ATTRIBUTES --

			*/
			item:[
				{id:"toc", href:"navigation/toc.xhtml", properties:["nav"], media_type:"application/xhtml+xml"},			    
				{id:"css", href:"css/style.css", media_type:"text/css"},		
				{id:"cover", media_type:"application/xhtml+xml", href:"content/cover.xhtml"},
				{id:"p01", media_type:"application/xhtml+xml", href:"content/p01.xhtml"},
				{id:"p02", media_type:"application/xhtml+xml", href:"content/p02.xhtml", media_overlay:"p02smil"},
				{id:"p03", media_type:"application/xhtml+xml", href:"content/p03.xhtml", media_overlay:"p03smil"},
				{id:"p04", media_type:"application/xhtml+xml", href:"content/p04.xhtml"},
				{id:"p05", media_type:"application/xhtml+xml", href:"content/p05.xhtml", media_overlay:"p05smil"},			
				{id:"cover-image", href:"images/book_cover.jpg", media_type:"image/jpeg"},
				{id:"img01", href:"images/img_p01.jpg", media_type:"image/jpeg"},
				{id:"img02", href:"images/img_p02.jpg", media_type:"image/jpeg"},
				{id:"img03", href:"images/img_p03.jpg", media_type:"image/jpeg"},
				{id:"img04", href:"images/img_p04.jpg", media_type:"image/jpeg"},
				{id:"img05", href:"images/img_p05.jpg", media_type:"image/jpeg"},			
				{id:"audio-file", href:"audio/book_audio.m4a", media_type:"audio/mpeg"},			  
				{id:"p02smil",	href:"smil/p02.smil", media_type:"application/smil+xml"},
				{id:"p03smil",	href:"smil/p03.smil", media_type:"application/smil+xml"},
				{id:"p05smil",	href:"smil/p05.smil", media_type:"application/smil+xml"},
				{id:"figure-gallery-impl", href:"figure-gallery-widget/figure-gallery-impl.xhtml", media_type:"application/xhtml+xml", properties:["scripted"]}
			]
		},
		/*

			The spine element defines the default reading order of the EPUB Publication 
			content by defining an ordered list of manifest item references. 

			(http://www.idpf.org/epub/30/spec/epub30-publications.html#sec-spine-elem)

			-- ATTRIBUTES --

			id [optional]
			The ID [XML] of this element, which must be unique within the document scope.

			toc [optional]
			An IDREF [XML] that identifies the manifest item that represents the superseded NCX.

			Refer to NCX Superseded for more information.

			page-progression-direction [optional]
			The global direction in which the Publication content flows.

			Allowed values are ltr (left-to-right), rtl (right-to-left) and default.

			When the default value is specified, the Author is expressing no preference and the Reading System may chose the rendering direction. This value must be assumed when the attribute is not specified.
		
			-- /ATTRIBUTES --
		*/
		spine:{ 
			page_progression_direction:"ltr",
			/*
				The child itemref elements of the spine represent a sequential list of 
				Publication Resources (typically EPUB Content Documents). 
				The order of the itemref elements defines the default reading order of the Publication.
			
				(http://www.idpf.org/epub/30/spec/epub30-publications.html#elemdef-spine-itemref)

				-- ATTRIBUTES --

				idref [required]
				An IDREF [XML] that identifies a manifest item.

				linear [optional]
				Specifies whether the referenced content is primary.

				The value of the attribute must be yes or no. The default value is yes.

				id [optional]
				The ID [XML] of this element, which must be unique within the document scope.

				properties [optional]
				A space-separated list of property values.

				Refer to Spine itemref Properties for a set of properties defined by this specification.					
				
				-- /ATTRIBUTES --

			*/
			itemref : [
				{ idref:"cover", linear:"no", properties:["cover-image"]},
				{ idref:"p01", linear:"yes", properties:["page-spread-left"]},
				{ idref:"p02", linear:"yes", properties:["page-spread-right"]},
				{ idref:"p03", linear:"yes", properties:["page-spread-left"]},
				{ idref:"p04", linear:"yes", properties:["page-spread-right"]},
				{ idref:"p05", linear:"yes", properties:["page-spread-left"]}
			]
		},

		/* 
			
			The bindings element defines a set of custom handlers for media types not supported by this specification.
			Handlers for custom mime types. These are used to map custom widgets etc to script controllers  				
			
			(http://www.idpf.org/epub/30/spec/epub30-publications.html#elemdef-bindings)
					
			-- NOTE -- 

			This is not as tricky as it might seem at first glance. The handler property is actually an idref to a manifest item which in turn points to a controller script file.
			The media_type property is the key which is used in the EPUB markup to trigger the controller script.
			
			A good example, in fact the one i used in this document, is available at the URL below.

			https://code.google.com/p/epub-samples/source/browse/trunk/30/widget-figure-gallery/EPUB/package.opf

			-- /NOTE -- 

		*/
		bindings:{

			/*
			
			The mediaType element associates a Foreign Resource media type with a handler XHTML Content Document.
			
			(http://www.idpf.org/epub/30/spec/epub30-publications.html#elemdef-mediaType)
		
			-- ATTRIBUTES --

			media-type [required]
			A media type [RFC2046] that specifies the type and format of the resource to be handled.

			handler [required]
			An IDREF [XML] that identifies the manifest XHTML Content Document to be invoked to handle content of the type specified in this element

			-- /ATTRIBUTES --
			
			*/ 
			mediaType: [
				{ 
					handler:"figure-gallery-impl", 
					media_type:"application/x-epub-figure-gallery"
				}
			]
		}
	
	}
};
