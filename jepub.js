(function () {

	window.jepub = {};

	/*
	 *
	 *	NAMESPACE: JEPUB.OPF
	 *
	 */
	return function(){
		
		jepub.opds = {

			xmlns: {
				dc: "http://purl.org/dc/elements/1.1/",
				opds: "http://opds-spec.org/2010/catalog"
			},

			version: "1.1",

			ACQUISITION_TYPE: {
				GENERIC: "http://opds-spec.org/acquisition",
				OPEN_ACCESS: "http://opds-spec.org/acquisition/open-access",
				SALE: "http://opds-spec.org/acquisition/buy",
				LENDING: "http://opds-spec.org/acquisition/borrow",
				SUBSCRIPTION: "http://opds-spec.org/acquisition/subscribe",
				SAMPLING: "http://opds-spec.org/acquisition/sample"
			},

			FEED_TYPE: {
				NAVIGATION: {
					type: "application/json",
					profile: "opds-catalog",
					kind: "navigation"
				},
				ACQUISITION: {
					type: "application/json",
					profile: "opds-catalog",
					kind: "acquisition"
				},
				ENTRY: {
					type: "application/json;type=entry",
					profile: "opds-catalog",
					kind: "acquisition"
				}
			},

			RELATION_TYPE: {
				SORT_NEW: "http://opds-spec.org/sort/new",
				SORT_POPULAR: "http://opds-spec.org/sort/popular",
				RECOMMENDED: "http://opds-spec.org/recommended",
				FEATURED: "http://opds-spec.org/featured",
				IMAGE: "http://opds-spec.org/image",
				IMAGE_THUMBNAIL: "http://opds-spec.org/image/thumbnail",
				SHELF: "http://opds-spec.org/shelf",
				SUBSCRIPTIONS: "http://opds-spec.org/subscriptions",
				FACET: "http://opds-spec.org/facet",
				SUBSECTION: "subsection",
				START: "start",
				SELF: "self"
			},

			catalogFeeds: [],
			acquisitionFeeds: []

		};

		jepub.opds.CatalogFeed = {

			id: "",
			title: "",
			updated: "",
			author: {
				name: "",
				uri: ""
			},

			link: [{
				rel: jepub.opds.RELATION_TYPE.SELF,
				type: jepub.opds.FEED_TYPE.NAVIGATION,
				href: ""
			}, {
				rel: jepub.opds.RELATION_TYPE.START,
				type: jepub.opds.FEED_TYPE.NAVIGATION,
				href: ""
			}],

			entry: [
				/* jepub.opds.CatalogEntry */
			]

		};

		jepub.opds.CatalogEntryLink = {
				rel: jepub.opds.RELATION_TYPE.SORT_NEW,
				type: jepub.opds.FEED_TYPE.ACQUISITION,
				href: ""
		};

		jepub.opds.CatalogEntry = {
			id: "",
			title: "",
			updated: "",
			author: {
				name: "",
				uri: ""
			},
			link: [

			],
			summary: "",
			content: ""
		};

		jepub.opds.AcquisitionFeed = {
			id: "",
			title: "",
			updated: "",
			author: {
				name: "",
				uri: ""
			},

			entry: [
				/* jepub.opds.AcquisitionEntry */
			]
		};

		jepub.opds.AcquisitionEntryLink = {
				rel: jepub.opds.ACQUISITION_TYPE.GENERIC,
				type: "application/jepub+zip",
				href: ""
		};

		jepub.opds.AcquisitionEntry = {
			id: "",
			title: "",
			updated: "",
			author: {
				name: "",
				uri: ""
			},
			category: [
				/* jepub.bisg.Category */
			],
			dc: {
				language: "",
				issued: "",
				identifier: "",
				publisher: ""
			},
			link: [
				/*
				jepub.opds.AcquisitionLink
				*/
			],
			summary: "",
			content: ""
		};

		/*
		 *
		 *	/ NAMESPACE: JEPUB.OPF
		 *
		 */


		/*
		 *
		 *	NAMESPACE: JEPUB.BISG
		 *
		 */

		jepub.bisg = {};

		jepub.bisg.Category = {
			scheme: "http://www.bisg.org/what-we-do-0-136-bisac-subject-headings-list-major-subjects.php",
			term: "",
			label: ""
		};

		/*
		 *
		 *	/ NAMESPACE: JEPUB.BISG
		 *
		 */

		/*
		 *
		 *	NAMESPACE: JEPUB.OPF
		 *
		 */

		jepub.opf = {
			xmlns: {
				opf: "http://www.idpf.org/2007/opf"
			},

			/* CONSTANTS */

			PAGE_PROGRESSION_DIRECTION: {
				LTR: "ltr",
				RTL: "rtl",
				DEFAULT: "default"
			},
			SPINE_ITEMREF_LINEAR: {
				YES: "yes",
				NO: "no"
			},
			SPINE_ITEMREF_PROPERTY: {
				PAGE_SPREAD_LEFT: "page-spread-left",
				PAGE_SPREAD_RIGHT: "page-spread-right",
			},
			MANIFEST_ITEM_PROPERTY: {
				COVER_IMAGE: "cover-image",
				MATHML: "mathml",
				NAV: "nav",
				REMOTE_RESOURCES: "remote-resources",
				SCRIPTED: "scripted",
				SVG: "svg",
				SWITCH: "switch"

			}

			/* / CONSTANTS */

		};

		jepub.opf.MetaDataProperty = {
			property: "",
			refines: "",
			value: ""
		};

		jepub.opf.ManifestItem = {
			id: "",
			href: "",
			media_type: "",
			properties: [
			/*
				jepub.opf.MANIFEST_ITEM_PROPERTY
			*/
			]
		};

		jepub.opf.SpineItemRef = {
			idref: "",
			linear: "",
			properties: [
			/*
				jepub.opf.SPINE_ITEMREF_PROPERTY
			*/
			]

		};

		jepub.opf.BindingMediaType = {
			handler: "",
			media_type: ""
		};

		jepub.opf.Package = {

			prefix: "rendition: http://www.idpf.org/vocab/rendition/#",
			version: "3.0",
			xml_lang: "",
			unique_identifier: "",

			/* 
					OPF Metadata
					(http://idpf.org/epub/30/spec/epub30-publications.html#sec-metadata-elem) 
				*/

			metadata: {

				xmlns: {
					dc: "http://purl.org/dc/elements/1.1/"
				},

				/* 
						The Meta element 
						(http://www.idpf.org/epub/30/spec/epub30-publications.html#sec-meta-elem) 
					*/

				meta: [

					/*
							The property Data Type
							(http://www.idpf.org/epub/30/spec/epub30-publications.html#sec-property-datatype)
						
							jepub.opf.MetaDataProperty
						*/

				],

				/* 	
						The link Element
						(http://www.idpf.org/epub/30/spec/epub30-publications.html#sec-link-elem)
					*/
				link: [],

				/* Dublin Core Namespace (http://purl.org/dc/) */

				dc: {
					title: {
						id: "",
						xml_lang: "",
						value: ""
					},
					description: {
						id: "",
						xml_lang: "",
						value: ""
					},
					creator: {
						id: "",
						value: ""
					},
					publisher: {
						id: "",
						xml_lang: "",
						value: ""
					},
					date: "",
					language: "",
					identifier: {
						id: "",
						value: ""
					},
					rights: {
						id: "",
						xml_lang: "",
						value: ""
					}
				}
			},

			/* 
					The manifest Element
					(http://www.idpf.org/epub/30/spec/epub30-publications.html#sec-manifest-elem)
				*/
			manifest: {

				/*
						The Item Element
						(http://www.idpf.org/epub/30/spec/epub30-publications.html#sec-item-elem)							
					
					*/
				item: [
					/* Default common items */
					{
						id: "toc",
						href: "",
						properties: [jepub.opf.MANIFEST_ITEM_PROPERTY.NAV],
						media_type: "application/xhtml+xml"
					}, {
						id: "css",
						href: "",
						media_type: "text/css"
					}, {
						id: "cover",
						href: "",
						media_type: "application/xhtml+xml"
					}
					/* jepub.opf.ManifestItem */
				]
			},
			/*

					The spine Element
					(http://www.idpf.org/epub/30/spec/epub30-publications.html#sec-spine-elem)
				*/
			spine: {
				page_progression_direction: jepub.opf.PAGE_PROGRESSION_DIRECTION.LTR,
				/*
						The itemref Element
						(http://www.idpf.org/epub/30/spec/epub30-publications.html#elemdef-spine-itemref)
					*/
				itemref: [
					/*
						jepub.opf.SpineItemRef
					*/
				]
			},

			/* 
					
					The bindings Element
					(http://www.idpf.org/epub/30/spec/epub30-publications.html#elemdef-bindings)
				*/
			bindings: {
				/*
					
					The mediaType Element
					(http://www.idpf.org/epub/30/spec/epub30-publications.html#elemdef-mediaType)

					*/
				mediaType: [
					/* jepub.opf.BindingMediaType */
				]
			}

		};

		/*
		 *
		 *	/ NAMESPACE: JEPUB.OPF
		 *
		 */

		/*
		 *
		 *	NAMESPACE: JEPUB.OCF
		 *
		 */

		jepub.ocf = {
			xmlns: {
				ocf: "urn:oasis:names:tc:opendocument:xmlns:container"
			}
		};

		jepub.ocf.Container = {
			version: "1.0",
			rootfile: [{
				full_path: "EPUB/package.opf.js",
				media_type: "application/oebps-package+javascript"
			}]
		};


		/*
		 *
		 *	/ NAMESPACE: JEPUB.OCF
		 *
		 */

		/*
		 *
		 *	NAMESPACE: JEPUB.SMIL
		 *
		 */

		jepub.smil = {
			xmlns: [{
				smil: "http://www.w3.org/ns/SMIL"
			}, {
				epub: "http://www.idpf.org/2007/ops"
			}],
			version: "3.0",
			// EPUB Namespace members
			epub: {
				prefix: ""
			},
			/*
				The head Element
				(http://www.idpf.org/epub/30/spec/epub30-mediaoverlays.html#elemdef-smil-head)
			*/
			head: {
				/*
					The metadata Element
					(http://www.idpf.org/epub/30/spec/epub30-mediaoverlays.html#elemdef-smil-metadata)
				*/


				metadata: {

				}
			},
			/*
				The body Element		
				(http://www.idpf.org/epub/30/spec/epub30-mediaoverlays.html#elemdef-smil-body)
			*/
			body: {
				id: "",
				epub: {
					type: [""],
					textref: ""
				},
				/*
					The metadata Element			
					(http://www.idpf.org/epub/30/spec/epub30-mediaoverlays.html#elemdef-smil-metadata)
				*/
				seq: [{
					id: "",
					epub: {
						type: "",
						textref: ""
					},
					/*
				The PAR Element
				(http://www.idpf.org/epub/30/spec/epub30-mediaoverlays.html#elemdef-smil-par)
				*/
					par: [{
						id: "",
						text: {
							src: ""
						},
						audio: {
							src: "",
							clipBegin: "",
							clipEnd: ""
						}
					}]
				}]
			}
		};

		/*
		 *
		 *	/ NAMESPACE: JEPUB.SMIL
		 *
		 */
	 };
})();
