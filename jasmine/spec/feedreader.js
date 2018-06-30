/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(
  (function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe("RSS Feeds", function() {
      /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
      it("are defined", function() {
        expect(allFeeds).toBeDefined();
        expect(allFeeds.length).not.toBe(0);
      });

      it("have a URL defined and that URL is not empty", function() {
        allFeeds.forEach(function(feed) {
          expect(feed.url).toBeDefined();
          expect(feed.url).not.toEqual("");
        });
      });

      it("have a name defined and that name is not empty", function() {
        allFeeds.forEach(function(feed) {
          expect(feed.name).toBeDefined();
          expect(feed.name).not.toEqual("");
        });
      });
    });

    describe("The menu", function() {
      it("element to be hidden by default", function() {
        let body = document.getElementsByTagName("body")[0];
        let hasClass = $(body).hasClass("menu-hidden")
        expect(hasClass).toBe(true);
      });

      it("changes visibility when the menu icon is clicked", function() {
        let body = document.getElementsByTagName("body")[0];
        let hasClass = $(body).hasClass("menu-hidden");
        $(".menu-icon-link").click();
        expect(hasClass).toBe(true);
        hasClass = $(body).hasClass("menu-hidden");
        $(".menu-icon-link").click();
        expect(hasClass).toBe(false);
      });
    });

    describe("Initial Entries", function() {
      it("there is at least a single .entry element within the .feed container.", function(done) {
        loadFeed(1, function() {
          expect($('.feed .entry').length).not.toBe(0);
          done();
        });
      });
    });

    describe("New Feed Selection", function() {
      var firstEntryBeforeLoad = "";
      beforeEach(function() {
        let entriesHTMLCollectionBeforeLoad = document.getElementsByClassName(
          "entry"
        );
        let entriesArrayBeforeLoad = Array.prototype.slice.call(
          entriesHTMLCollectionBeforeLoad
        );
        firstEntryBeforeLoad = entriesArrayBeforeLoad[0].innerText;
      });

      it("has a content that actually changes", function(done) {
        loadFeed(0, function() {
            feedOne = $('.feed').html();
            loadFeed(1, function() {
                feedTwo = $('.feed').html();
                expect(feedOne).not.toBe(feedTwo);
                done();
            });
        });
      });
    });
  })()
);
