(function() {
    if (localStorage.accessToken) {
        // var graphUrl = "https://graph.facebook.com/me/groups?" + localStorage.accessToken;

        // var graphUrl = "https://graph.facebook.com/17505397/groups",
        //     accessToken = 'AAACEdEose0cBAMMRGxTJZAZAznK7VIDGx4ndMCvEhIH3yTXJNxnGeNziv4uQbJ2PZCk9bdRl1nKanOFSKySWEgTnenZBWC3AkR0YTekZB5QZDZD';
        // console.log(graphUrl);

        // $.getJSON(graphUrl,
        // {
        //     accessToken: accessToken
        // },
        // function(data) {
        //     console.log(data);
        //     fbGroupData = data;
        //     if (fbGroupData.data) {
        //         $.each(fbGroupData.data, function() {
        //             $('body').append('<p>' + this.name + '</p>');
        //         });
        //     } else {
        //         $('body').append('<p> Something went wrong with facebook. </p>');
        //     }
        // });

        var fburl = "http://graph.facebook.com/naftali.lubin";

        $.get(fburl, function(data){
            console.log(data);
            alert(data.name);
        });
    }

})();
