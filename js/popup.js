(function() {
    if (localStorage.accessToken) {
        var graphUrl = "https://graph.facebook.com/me/groups?" + localStorage.accessToken + "&callback=displayData";
        console.log(graphUrl);

        var script = document.createElement("script");
        script.src = graphUrl;
        $('body').append(script);

        displayData = function(data) {
            console.log(data);
            fbGroupData = data;
            $.each(fbGroupData.data, function() {
                $('body').append('<p>' + this.name + '</p>');
            });
        };
    }

})();
