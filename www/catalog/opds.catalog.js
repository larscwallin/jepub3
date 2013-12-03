var jepub = window.jepub ? window.jepub : {};
jepub.opds = window.jepub.opds ? window.jepub.opds : {};

jepub.opds = {
    xmlns: {
        jp: "http://www.jepub.com/",
        dc: "http://purl.org/dc/elements/1.1/",
        opds: "http://opds-spec.org/2010/catalog"
    },
    version: "1.1",
    feed: {}
};

/*
	OPDS Catalog
	All of the Atom Feeds (Acquisition and Navigation) and Entries (Partial and Complete) following this specification
	published together to describe a consolidated group of available Publications.

	The OPDS Catalog Root is the top-level OPDS Catalog Feed Document. It is either a single Acquisition Feed
	in the simple case or the start of a set of Navigation Feeds. Every OPDS Catalog MUST have one and only one OPDS Catalog Root.

*/

jepub.opds.feed.catalog = {

    FEED: {
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

    RELATION: {
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

    /*
		Catalogs are "indexed" by id for easy retrival.
	*/

    "12": {
        id: "12",
        title: "Lars Catalog Of Good Books",
        updated: "",
        author: {
            name: "Lars C Wallin",
            uri: "www.larscwallin.com"
        },
        link: [{
            rel: RELATION.SELF,
            type: FEED.NAVIGATION,
            href: "/catalog/12/"
        }, {
            rel: RELATION.START,
            type: FEED.NAVIGATION,
            href: "/catalog/12/"
        }],
        /*
    		Entries are "indexed" by id for easy retrival.
		*/
        entry: {
            "223": {
                id: "223",
                title: "Latest Books",
                updated: "2013-12-02",
                author: {
                    name: "Lars C Wallin",
                    uri: "www.larscwallin.com"
                },
                link: [{
                    rel: RELATION.SORT_NEW,
                    type: FEED.ACQUISITION,
                    href: "/catalog/12/books?sort=new"
                }],
                summary: "View all new books",
                content: ""
            },

            "224": {
                id: "224",
                title: "All Books",
                updated: "2013-11-12",
                author: {
                    name: "Lars C Wallin",
                    uri: "www.larscwallin.com"
                },
                link: [{
                    rel: RELATION.SUBSECTION,
                    type: FEED.ACQUISITION,
                    href: "/catalog/12/books?sort=all"
                }],
                summary: "View all books",
                content: ""
            }

        }
    }
};

/*
	Acquisition Feeds
	An Acquisition Feed is an OPDS Catalog Feed Document that collects OPDS Catalog Entries into a single, ordered set.
	The simplest complete OPDS Catalog would be a single Acquisition Feed listing all of the available OPDS Catalog Entries from that provider. In more complex OPDS Catalogs, Acquisition Feeds are used to present and organize sets of related OPDS Catalog Entries for browsing and discovery by clients and aggregators.

	Links to Acquisition Feeds SHOULD use the "type" attribute "application/atom+xml;profile=opds-catalog;kind=acquisition".

	For further details on limiting the size of Acquisition Feeds through pagination, Partial Catalog Entries, and compression, see the 
	Section Listing Acquisition Feeds.
*/

jepub.opds.feed.acquisition = {
    ACQUISITION: {
        GENERIC: "http://opds-spec.org/acquisition",
        OPEN_ACCESS: "http://opds-spec.org/acquisition/open-access",
        SALE: "http://opds-spec.org/acquisition/buy",
        LENDING: "http://opds-spec.org/acquisition/borrow",
        SUBSCRIPTION: "http://opds-spec.org/acquisition/subscribe",
        SAMPLING: "http://opds-spec.org/acquisition/sample"
    },

    "123": {
        id: "123",
        title: "Books",
        updated: "",
        author: {
            name: "",
            uri: ""
        },
        /*
    		Entries are "indexed" by id for easy retrival.
		*/
        entry: {
            "334": {
                id: "334",
                title: "A Book About EPUB3",
                updated: "2013-10-02",
                author: {
                    name: "Some A Uthor",
                    uri: "http://www.someauthor.com"
                },
                category: [{
                    scheme: "http://www.bisg.org/what-we-do-0-136-bisac-subject-headings-list-major-subjects.php",
                    term: "COM065000	",
                    label: "COMPUTERS / Electronic Publishing"
                }],
                dc: {
                    language: "EN",
                    issued: "2013-10-02",
                    identifier: "",
                    publisher: ""
                },
                link: [{
                    rel: ACQUISITION.GENERIC,
                    type: "application/jepub+zip",
                    href: "/catalog/12/books/334",
                    opf
                }],
                summary: "",
                content: ""
            }
        }
    }

};


/*

<entry>
    <title>Bob, Son of Bob</title>
    <id>urn:uuid:6409a00b-7bf2-405e-826c-3fdff0fd0734</id>
    <updated>2010-01-10T10:01:11Z</updated>

    <author>
      <name>Bob the Recursive</name>
      <uri>http://opds-spec.org/authors/1285</uri>
    </author>
    <dc:language>en</dc:language>
    <dc:issued>1917</dc:issued>
    <category scheme="http://www.bisg.org/standards/bisac_subject/index.html"
              term="FIC020000"
              label="FICTION / Men's Adventure"/>

    <summary type="text">The story of the son of the Bob and the gallant part he played in
      the lives of a man and a woman.</summary>
    <content type="text">The story of the son of the Bob and the gallant part
      he played in the lives of a man and a woman. Bob begins his humble life
      under the wandering eye of his senile mother, but quickly learns how to
      escape into the wilder world. Follow Bob as he uncovers his father's past
      and uses those lessons to improve the lives of others.</content>

    <link rel="http://opds-spec.org/image"     
          href="/covers/4561.lrg.png"
          type="image/png"/> 
    <link rel="http://opds-spec.org/image/thumbnail" 
          href="/covers/4561.thmb.gif"
          type="image/gif"/>

    <link rel="self"
          href="/opds-catalogs/entries/4571.complete.xml"
          type="application/atom+xml;type=entry;profile=opds-catalog"/>

    <link rel="http://opds-spec.org/acquisition" 
          href="/content/free/4561.epub"
          type="application/epub+zip"/>
    <link rel="http://opds-spec.org/acquisition" 
          href="/content/free/4561.mobi"
          type="application/x-mobipocket-ebook"/>
 </entry>



Navigation Feeds
A Navigation Feed is an OPDS Catalog Feed Document whose Atom Entries serve to create a suggested hierarchy for presentation and browsing. A Navigation Feed MUST NOT contain OPDS Catalog Entries but instead contains Atom Entries that link to other Navigation or Acquisition Feeds or other Resources. Each Atom Entry's "atom:content" element SHOULD include a brief description of the linked Resource.

Links to Navigation Feeds SHOULD use the "type" attribute "application/atom+xml;profile=opds-catalog;kind=navigation". OPDS Catalog providers SHOULD choose the best relation for each Navigation Feed based on the relations in the section OPDS Catalog Relations. The relation "subsection" SHOULD be used if no other relation is more appropriate.

Navigation Feed Example
An OPDS Catalog Root that is the top of a set of Navigation Feeds references three Acquisition Feeds using atom:links:

<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <id>urn:uuid:2853dacf-ed79-42f5-8e8a-a7bb3d1ae6a2</id>
  <link rel="self"  
        href="/opds-catalogs/root.xml" 
        type="application/atom+xml;profile=opds-catalog;kind=navigation"/>
  <link rel="start" 
        href="/opds-catalogs/root.xml" 
        type="application/atom+xml;profile=opds-catalog;kind=navigation"/>
  <title>OPDS Catalog Root Example</title>
  <updated>2010-01-10T10:03:10Z</updated>
  <author>
    <name>Spec Writer</name>
    <uri>http://opds-spec.org</uri>
  </author>

  <entry>
    <title>Popular Publications</title>
    <link rel="http://opds-spec.org/sort/popular" 
          href="/opds-catalogs/popular.xml"
          type="application/atom+xml;profile=opds-catalog;kind=acquisition"/>
    <updated>2010-01-10T10:01:01Z</updated>
    <id>urn:uuid:d49e8018-a0e0-499e-9423-7c175fa0c56e</id>
    <content type="text">Popular publications from this catalog based on downloads.</content>
  </entry>
  <entry>
    <title>New Publications</title>
    <link rel="http://opds-spec.org/sort/new" 
          href="/opds-catalogs/new.xml"
          type="application/atom+xml;profile=opds-catalog;kind=acquisition"/>
    <updated>2010-01-10T10:02:00Z</updated>
    <id>urn:uuid:d49e8018-a0e0-499e-9423-7c175fa0c56c</id>
    <content type="text">Recent publications from this catalog.</content>
  </entry>
  <entry>
    <title>Unpopular Publications</title>
    <link rel="subsection" 
          href="/opds-catalogs/unpopular.xml"
          type="application/atom+xml;profile=opds-catalog;kind=acquisition"/>
    <updated>2010-01-10T10:01:00Z</updated>
    <id>urn:uuid:d49e8018-a0e0-499e-9423-7c175fa0c56d</id>
    <content type="text">Publications that could use some love.</content>
  </entry>
</feed>


Facets

<link rel="http://opds-spec.org/facet" 
  opds:facetGroup="Order" 
  opds:activeFacet="true" 
  href="/recent" 
  title="Most recent" />
<link rel="http://opds-spec.org/facet" 
  thr:count="600" 
  opds:facetGroup="Order" 
  href="/popular" 
  title="Most popular" />




*/