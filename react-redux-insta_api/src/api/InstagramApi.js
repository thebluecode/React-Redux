
class InstagramApi {  

    static accessToken = '';

    static setAccessToken = function(token) {
        InstagramApi.accessToken = token;
    }
    
    static getAccessToken = function() {
        return InstagramApi.accessToken;
    }
}




export default InstagramApi;