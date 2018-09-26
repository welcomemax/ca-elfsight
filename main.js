chrome.app.runtime.onLaunched.addListener(function() {
    var screenWidth = screen.availWidth;
    var screenHeight = screen.availHeight;
    var width = screenWidth - 100;
    var height = screenHeight - 100;

    chrome.app.window.create('index.html', {
        id: "elfsightApps",
        state: "fullscreen",
        outerBounds: {
            width: width,
            height: height,
            left: Math.round((screenWidth-width)/2),
            top: Math.round((screenHeight-height)/2)
        }
    });
});