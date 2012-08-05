!function() {
    var successURL = 'https://www.facebook.com/connect/login_success.html';
    function onFacebookLogin() {
        chrome.tabs.getAllInWindow(null, function(tabs) {
            for (var i = 0; i < tabs.length; i++) {
                if (tabs[i].url.indexOf(successURL) === 0) {
                    var params = tabs[i].url.split('#')[1];
                    console.log(params);
                    localStorage.accessToken = params.split('&')[0];
                    chrome.tabs.onUpdated.removeListener(onFacebookLogin);
                    return;
                }
            }
        });
    }
    chrome.tabs.onUpdated.addListener(onFacebookLogin);
}();
