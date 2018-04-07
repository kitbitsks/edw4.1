class FAbout{
    private RecommendedVideos:string;
    private YourLikes:string;
    private YourDislikes:string;
    private VisitedPlaces:string;
    private BookmarkedPlaces:string;

    constructor(private FName?:string,private FBirth?:string,private FMobile?:number,private FEmail?:string, private FCollege?:string,private FAddress?:string,private FAboutYou?:string,private FSchool?:string)
    {
        FName = this.FName ;
        FBirth = this.FBirth ;
        FMobile = this.FMobile ;
        FEmail = this.FEmail ;
        FCollege = this.FCollege ;
        FAddress = this.FAddress  ;
        FAboutYou = this.FAboutYou ;
        FSchool = this.FSchool ;
    }
    // Use of getters
    getName = () => {
        return this.FName;
    }
    
    getBirth = () => {
        return this.FBirth;
    }
    
    getMobile = () => {
        return this.FMobile;
    }
    
    getEmail = () => {
        return this.FEmail;
    }
    
    getCollege = () => {
        return this.FCollege;
    }
    
    getAddress = () => {
        return this.FAddress;
    }
    
    getAbout = () => {
        return this.FAboutYou;
    }
    
    getSchool = () => {
        return this.FSchool;
    }
    

    //Use of Setters

    setName = (FBName:string) => {
         this.FName = FBName;
    }
    
    setBirth = (FBBirth:string) => {
         this.FBirth = FBBirth;
    }
    
    setMobile = (FBMobile:number) => {
         this.FMobile = FBMobile;
    }
    
    setEmail = (FBEmail:string) => {
         this.FEmail = FBEmail;
    }
    
    setCollege = (FBCollege:string) => {
         this.FCollege = FBCollege;
    }
    
    setAddress = (FBAddress:string) => {
         this.FAddress = FBAddress;
    }
    
    setAbout = (FBAbout:string) => {
         this.FAboutYou = FBAbout;
    }
    
    setSchool = (FBSchool:string) => {
         this.FSchool=FBSchool;
    }
    


}

let Name = "Ravi";
let Birth = "06/04/1995";
let Mobile = 9999977788;
let Email = "ravisingh234@gmail.com";
let College = "Vidyapeeth Institute of Technology";
let Address = "Prashanth Residency, North Pune- 560087";
let School = "Delhi Public School";
let About = "I am simple and Silly";

//setting values and displaying on console window
let User=new FAbout();
User.setAbout(About);
User.setAddress(Address);
User.setBirth(Birth);
User.setCollege(College);
User.setEmail(Email);
User.setMobile(Mobile);
User.setName(Name);
User.setSchool(School);

console.log("Name = "+User.getName());
console.log("About = "+User.getAbout());
console.log("Birthdate = "+User.getBirth());
console.log("Mobile = "+User.getMobile());
console.log("Email = "+User.getEmail());
console.log("School = "+User.getSchool());
console.log("College = "+User.getCollege());
console.log("Address = "+User.getAddress());

