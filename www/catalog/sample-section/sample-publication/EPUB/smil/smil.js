 /*
		 The smil Element
		 The smil element is the root element of the Media Overlay Document.
		(http://www.idpf.org/epub/30/spec/epub30-mediaoverlays.html#sec-smil-smil-elem)

		-- ATTRIBUTES --
				
		Version [required]
		Specifies the version number of the [SMIL] specification to which the Media Overlay adheres.

		This attribute must have the value 3.0 to indicate compliance with this version of the specification.

		id [optional]
		The ID [XML] of this element, which must be unique within the document scope.

		epub:prefix [optional]
		Declares additional metadata vocabulary prefixes.

		Refer to Semantic Inflection for more information.

		-- /ATTRIBUTES --

		-- CONTENT MODEL --
		
		In this order: head [optional], body [required]

		-- /CONTENT MODEL --
	*/
 {
 	xmlns: [{
 		smil: "http://www.w3.org/ns/SMIL"
 	}, {
 		epub: "http://www.idpf.org/2007/ops"
 	}],
 	version: "3.0",
 	// EPUB Namespace members
 	epub: [
 		prefix: ""
 	],
 	/*
		The head Element
		The head element is the container for metadata in the Media Overlay Document, and consists of zero or one child metadata element.
		(http://www.idpf.org/epub/30/spec/epub30-mediaoverlays.html#elemdef-smil-head)

		-- ATTRIBUTES --
		None
		-- /ATTRIBUTES --
	*/
 	head: {
 		/*
			The metadata Element
			The metadata element represents metadata for the Media Overlay Document. The metadata element is an extension point that allows the inclusion of metadata from any metainformation structuring language.
			(http://www.idpf.org/epub/30/spec/epub30-mediaoverlays.html#elemdef-smil-metadata)

			-- ATTRIBUTES --
			None
			-- /ATTRIBUTES --

			-- CONTENT MODEL --
			
			In this order: head [optional], body [required]

			-- /CONTENT MODEL --

		*/


 		metadata: {

 		}
 	},
 	/*
		The body Element
		The body element is the starting point for the presentation contained in the Media Overlay Document. It contains the main sequence of par and seq elements.
		(http://www.idpf.org/epub/30/spec/epub30-mediaoverlays.html#elemdef-smil-body)

		-- ATTRIBUTES --
		
		epub:type [optional]
		An expression of the structural semantics of the corresponding element in the EPUB Content Document.
		The value is a whitespace separated list of property [Publications30] types. Refer to Semantic Inflection for more information.

		id [optional]
		The ID [XML] of this element, which must be unique within the document scope.

		epub:textref [optional]
		The relative IRI reference [RFC3987] of the corresponding EPUB Content Document, including a fragment identifier that references the specific element as per the [XPTRSH].

		-- /ATTRIBUTES --

		-- CONTENT MODEL --
		
		[0 or more] elements from any namespace.

		-- /CONTENT MODEL --


	*/
 	body: {
 		id: "",
 		epub: [
 			type: [""],
 			textref: ""
 		],
 		/*
			The metadata Element
			The metadata element represents metadata for the Media Overlay Document. The metadata element is an extension point that allows the inclusion of metadata from any metainformation structuring language.
			(http://www.idpf.org/epub/30/spec/epub30-mediaoverlays.html#elemdef-smil-metadata)

			-- ATTRIBUTES --

			epub:type [optional]
			An expression of the structural semantics of the corresponding element in the EPUB Content Document.

			The value is a whitespace separated list of property [Publications30] types. Refer to Semantic Inflection for more information.

			id [optional]
			The ID [XML] of this element, which must be unique within the document scope.

			epub:textref [required]
			The relative IRI reference [RFC3987] of the corresponding EPUB Content Document, including a fragment identifier that references the specific element as per the [XPTRSH].

			-- /ATTRIBUTES --

			-- CONTENT MODEL --
			
			In any order: seq [0 or more] or par [0 or more]
			At least one par or seq is required.
		
			-- /CONTENT MODEL --
		*/
 		seq: [
 			id: "",
 			epub: [
 				type: "",
 				textref: ""
 			],
 			/*
				The PAR Element
				The par element contains media objects which are to be rendered in parallel.
				(http://www.idpf.org/epub/30/spec/epub30-mediaoverlays.html#elemdef-smil-par)
				
				-- ATTRIBUTES --

				epub:type [optional]
				An expression of the structural semantics of the corresponding element in the EPUB Content Document.

				The value is a whitespace separated list of property [Publications30] types. Refer to Semantic Inflection for more information.

				id [optional]
				The ID [XML] of this element, which must be unique within the document scope.
				
				-- ATTRIBUTES --

				-- CONTENT MODEL --
				
				In any order: text [required] and audio [optional]
				The audio element is optional only if its sibling text element refers to audio or video media (see Embedded Audio and Video), or to textual content intended for rendering via Text-to-Speech (TTS).
			
				-- /CONTENT MODEL --

			*/
 			par: [{
 				id: "pre-pause",
 				text: {
 					src = "../p03.xhtml#pre-pause"
 				},
 				audio: {
 					src: "../audio/book_audio.m4a",
 					clipBegin: "0.000s",
 					clipEnd: "2.000s"
 				}
 			}]
 		]
 	}
 };