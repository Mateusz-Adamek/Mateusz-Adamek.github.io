let query = 'from:polska filter:images';
 
let date = new Date();
date.setDate(date.getDate() - 7);
 
let date_query = date.getFullYear()+'-'+date.getMonth()+'-'+date.getDate();
 
//let params = {q: query, count: 100, tweet_mode: 'extended', util: date_query};
let params = {screen_name: 'polska', count: 100, tweet_mode: 'extended', util: date_query};
 
let test = '';
 
//client.get('search/tweets', params, function(error, tweets, response) {
client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
        //console.log(tweets.statuses[0].entities.media);
        //console.log(tweets.statuses[0].entities.media);
 
 
        tweets.forEach((element, index) => {
 
            if(typeof element.extended_entities !== "undefined"){
 
                let entities = element.extended_entities;
                let mediaall = entities.media;
 
                if(typeof entities !== "undefined" && typeof mediaall !== "undefined"){
 
                    mediaall.forEach((el, ind) => {
 
                        if(el.type === 'photo'){
 
                            console.log(el.media_url);
                            // console.log(el);
 
                            test += '<img src="'+el.media_url+'">';
 
                        }
 
                    });
 
                }
 
            }
 
        });
 
    }else{
 
        console.log(error);
 
    }
});
 
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html','Content-Length':test.length});
    res.write(test);
    res.end();
 
}).listen(8000);
 
setTimeout(() => {opn('http://localhost:8000') }, 1000);


//a w petli element.entities.media zwraca ci tablice z obiektami mediow, czyli obrazki