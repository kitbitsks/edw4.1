class VideoDesc{
    private RelatedVideo:string;
    private CategoryVideo:string;
    private CurrentCommentsOnVideo:string;

    constructor(public VName?:string, public VViews?:number, private VLikes?:number,private VDislikes?:number,private VDescription?:string,private VLink?:string, public VSubscriptions?:number)
    {
        VName=this.VName;
        VViews=this.VViews;
        VLikes=this.VLikes;
        VDislikes=this.VDislikes;
        VDescription=this.VDescription;
        VSubscriptions=this.VSubscriptions;
        VLink=this.VLink;
    }
    
    getNumberOfLikes = () =>{
        return this.VLikes;
    }

    getNumberOfDislikes = () =>{
        return this.VDislikes;
    }

    setNumberOfLikes = (lik:number) =>{
        this.VLikes=lik;
    }

    setNumberOfDislikes = (Dlik:number) =>{
        this.VDislikes=Dlik;
    }
    getDescription = () =>{
        return this.VDescription;
    }

    setDescription = (desc:string) =>{
        this.VDescription=desc;
    }

    getVlink = () =>{
        return this.VLink;
    }

    setVlink = (Vlinkyoutube : string) =>
    {
        this.VLink=Vlinkyoutube;
    }

    getSubscriptionNumber = () =>{
        return this.VSubscriptions;
    }

    setSubscriptionNumber = (VSubsc:number) =>{
        this.VSubscriptions = VSubsc;
    }

}

let YoutubeVideo = new VideoDesc();
let VideoTitle = "Ankhiyon Se Goli Mare - The Remix | Amazon Prime Original | Yash Narvekar | Rajakumari | Kryll";
let Views=113743;
let Likes = 3500;
let Dislikes= 832;
let Description="Presenting  Akhiyon Se Goli Maare - The Remix - The Remix, 6th episode of Amazon Prime Original Musical Series.This fresh music mashup is sung by  Rashmeet Kaur and remixed by Su Real. Sunidhi Chauhan & Amit Trivedi are judging Amazon Prime reality show. Its Indias first web music reality show! Official Music Partner T-Series Song: Akhiyon Se Goli Maare - The Remix ,Singer:Yash Narvekar,Rajakumari, Music : Anand-Milind, Remix By: Kryll, Lyricist: Sameer, Music Label: T-Series";
let Subscription = 41000000;
let link="https://youtu.be/Voy7fFwzXVU";

//Use of Setter
YoutubeVideo.setDescription(Description);
YoutubeVideo.setNumberOfLikes(Likes);
YoutubeVideo.setNumberOfDislikes(Dislikes);
YoutubeVideo.setSubscriptionNumber(Subscription);
YoutubeVideo.setVlink(link);
YoutubeVideo.VName = VideoTitle;
YoutubeVideo.VViews=Views
//Useo of Getter and printing values in Console
console.log("Title = "+YoutubeVideo.VName);
console.log("Views = "+YoutubeVideo.VViews);
console.log("Likes = " +YoutubeVideo.getNumberOfLikes());
console.log("Dislikes = " + YoutubeVideo.getNumberOfDislikes());
console.log("Description = "+ YoutubeVideo.getDescription());
console.log("Subscriptions = "+ YoutubeVideo.getSubscriptionNumber());
console.log("Link = "+ YoutubeVideo.getVlink());


