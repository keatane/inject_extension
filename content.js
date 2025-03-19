function injectScript(file) {
    var script = document.createElement('script');
    script.src = browser.runtime.getURL(file);
    script.onload = function() {
        this.remove(); // Remove the script after execution
    };
    (document.head || document.documentElement).appendChild(script);
}

// Inject the script into the page context
injectScript("injected.js");
