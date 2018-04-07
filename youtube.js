var VideoDesc = /** @class */ (function () {
    function VideoDesc(VName, VViews, VLikes, VDislikes, VDescription, VLink, VSubscriptions) {
        var _this = this;
        this.VName = VName;
        this.VViews = VViews;
        this.VLikes = VLikes;
        this.VDislikes = VDislikes;
        this.VDescription = VDescription;
        this.VLink = VLink;
        this.VSubscriptions = VSubscriptions;
        this.getNumberOfLikes = function () {
            return _this.VLikes;
        };
        this.getNumberOfDislikes = function () {
            return _this.VDislikes;
        };
        this.setNumberOfLikes = function (lik) {
            _this.VLikes = lik;
        };
        this.setNumberOfDislikes = function (Dlik) {
            _this.VDislikes = Dlik;
        };
        this.getDescription = function () {
            return _this.VDescription;
        };
        this.setDescription = function (desc) {
            _this.VDescription = desc;
        };
        this.getVlink = function () {
            return _this.VLink;
        };
        this.setVlink = function (Vlinkyoutube) {
            _this.VLink = Vlinkyoutube;
        };
        this.getSubscriptionNumber = function () {
            return _this.VSubscriptions;
        };
        this.setSubscriptionNumber = function (VSubsc) {
            _this.VSubscriptions = VSubsc;
        };
        VName = this.VName;
        VViews = this.VViews;
        VLikes = this.VLikes;
        VDislikes = this.VDislikes;
        VDescription = this.VDescription;
        VSubscriptions = this.VSubscriptions;
        VLink = this.VLink;
    }
    return VideoDesc;
}());
var YoutubeVideo = new VideoDesc();
var VideoTitle = "Ankhiyon Se Goli Mare - The Remix | Amazon Prime Original | Yash Narvekar | Rajakumari | Kryll";
var Views = 113743;
var Likes = 3500;
var Dislikes = 832;
var Description = "Presenting  Akhiyon Se Goli Maare - The Remix - The Remix, 6th episode of Amazon Prime Original Musical Series.This fresh music mashup is sung by  Rashmeet Kaur and remixed by Su Real. Sunidhi Chauhan & Amit Trivedi are judging Amazon Prime reality show. Its Indias first web music reality show! Official Music Partner T-Series Song: Akhiyon Se Goli Maare - The Remix ,Singer:Yash Narvekar,Rajakumari, Music : Anand-Milind, Remix By: Kryll, Lyricist: Sameer, Music Label: T-Series";
var Subscription = 41000000;
var link = "https://youtu.be/Voy7fFwzXVU";
//Use of Setter
YoutubeVideo.setDescription(Description);
YoutubeVideo.setNumberOfLikes(Likes);
YoutubeVideo.setNumberOfDislikes(Dislikes);
YoutubeVideo.setSubscriptionNumber(Subscription);
YoutubeVideo.setVlink(link);
YoutubeVideo.VName = VideoTitle;
YoutubeVideo.VViews = Views;
//Useo of Getter and printing values in Console
console.log("Title = " + YoutubeVideo.VName);
console.log("Views = " + YoutubeVideo.VViews);
console.log("Likes = " + YoutubeVideo.getNumberOfLikes());
console.log("Dislikes = " + YoutubeVideo.getNumberOfDislikes());
console.log("Description = " + YoutubeVideo.getDescription());
console.log("Subscriptions = " + YoutubeVideo.getSubscriptionNumber());
console.log("Link = " + YoutubeVideo.getVlink());
