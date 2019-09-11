let params = {q: '#polska', count: 5};
 
client.get('search/tweets', params, function(error, tweets, response) {
    if (!error) {
        //console.log(tweets.statuses[0].entities.media);
        //console.log(tweets.statuses[0].entities.media);
 
 
        tweets.statuses.forEach((element, index) => {
 
            console.log(element.entities.media);
 
        });
    }else{
 
        console.log('dupa');
 
    }
});


//a w petli element.entities.media zwraca ci tablice z obiektami mediow, czyli obrazki