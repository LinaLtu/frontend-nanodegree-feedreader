//TODO: Implement error handling for undefined variables and out-of-bound array access.

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

      /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

      it("have a URL defined and that URL is not empty", function() {
        allFeeds.forEach(function(feed) {
          expect(feed.url).toBeDefined();
          expect(feed.url).not.toEqual("");
        });
      });

      /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

      it("have a name defined and that name is not empty", function() {
        allFeeds.forEach(function(feed) {
          expect(feed.name).toBeDefined();
          expect(feed.name).not.toEqual("");
        });
      });
    });

    /* TODO: Write a new test suite named "The menu" */

    describe("The menu", function() {
      it("element to be hidden by default", function() {
        let body = document.getElementsByTagName("body")[0];
        // expect(body).toHaveAttr("class", "menu-hidden");
        expect(body.className).toBe("menu-hidden");
      });

      // expect(body).is(':visible')).toBe(false);

      /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
      it("changes visibility when the menu icon is clicked", function() {
        // let menuIcon = document.getElementsByClassName("menu-icon-link")[0];
        let body = document.getElementsByTagName("body")[0];
        // var spyEvent = spyOnEvent(".menu-icon-link", "click");
        $(".menu-icon-link").click();
        expect(body.className).toBe("");
        $(".menu-icon-link").click();
        expect(body.className).toBe("menu-hidden");
        // expect(spyEvent).toHaveBeenTriggered();

        // menuIcon("click");
        // expect(body).toBeVisible();
      });
      //add on second click
    });
    /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

    /* TODO: Write a new test suite named "Initial Entries" */

    describe("Initial Entries", function() {
      it("there is at least a single .entry element within the .feed container.", function(done) {
        loadFeed(1, function() {
          let container = $(".feed");
          expect(container.children().length).not.toBe(0);
          done();
        });
      });
    });

    /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    /* TODO: Write a new test suite named "New Feed Selection" */

    describe("New Feed Selection", function() {
      var firstEntryBeforeLoad = "";
      beforeEach(function() {
        let entriesHTMLCollectionBeforeLoad = document.getElementsByClassName(
          "entry"
        );
        let entriesArrayBeforeLoad = Array.prototype.slice.call(
          entriesHTMLCollectionBeforeLoad
        );
        console.log("Before load ", entriesArrayBeforeLoad[0].innerText);
        firstEntryBeforeLoad = entriesArrayBeforeLoad[0].innerText;
      });

      it("has a content that actually changes", function(done) {
        loadFeed(2, function() {
          let entriesHTMLCollection = document.getElementsByClassName("entry");
          let entriesArray = Array.prototype.slice.call(entriesHTMLCollection);
          console.log("After load ", entriesArray[0].innerText);
          expect(entriesArray[0].innerText).not.toBe(firstEntryBeforeLoad);
          done();
        });
      });
    });

    /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
  })()
);
