var FAbout = /** @class */ (function () {
    function FAbout(FName, FBirth, FMobile, FEmail, FCollege, FAddress, FAboutYou, FSchool) {
        var _this = this;
        this.FName = FName;
        this.FBirth = FBirth;
        this.FMobile = FMobile;
        this.FEmail = FEmail;
        this.FCollege = FCollege;
        this.FAddress = FAddress;
        this.FAboutYou = FAboutYou;
        this.FSchool = FSchool;
        // Use of getters
        this.getName = function () {
            return _this.FName;
        };
        this.getBirth = function () {
            return _this.FBirth;
        };
        this.getMobile = function () {
            return _this.FMobile;
        };
        this.getEmail = function () {
            return _this.FEmail;
        };
        this.getCollege = function () {
            return _this.FCollege;
        };
        this.getAddress = function () {
            return _this.FAddress;
        };
        this.getAbout = function () {
            return _this.FAboutYou;
        };
        this.getSchool = function () {
            return _this.FSchool;
        };
        //Use of Setters
        this.setName = function (FBName) {
            _this.FName = FBName;
        };
        this.setBirth = function (FBBirth) {
            _this.FBirth = FBBirth;
        };
        this.setMobile = function (FBMobile) {
            _this.FMobile = FBMobile;
        };
        this.setEmail = function (FBEmail) {
            _this.FEmail = FBEmail;
        };
        this.setCollege = function (FBCollege) {
            _this.FCollege = FBCollege;
        };
        this.setAddress = function (FBAddress) {
            _this.FAddress = FBAddress;
        };
        this.setAbout = function (FBAbout) {
            _this.FAboutYou = FBAbout;
        };
        this.setSchool = function (FBSchool) {
            _this.FSchool = FBSchool;
        };
        FName = this.FName;
        FBirth = this.FBirth;
        FMobile = this.FMobile;
        FEmail = this.FEmail;
        FCollege = this.FCollege;
        FAddress = this.FAddress;
        FAboutYou = this.FAboutYou;
        FSchool = this.FSchool;
    }
    return FAbout;
}());
var Name = "Ravi";
var Birth = "06/04/1995";
var Mobile = 9999977788;
var Email = "ravisingh234@gmail.com";
var College = "Vidyapeeth Institute of Technology";
var Address = "Prashanth Residency, North Pune- 560087";
var School = "Delhi Public School";
var About = "I am simple and Silly";
//setting values and displaying on console window
var User = new FAbout();
User.setAbout(About);
User.setAddress(Address);
User.setBirth(Birth);
User.setCollege(College);
User.setEmail(Email);
User.setMobile(Mobile);
User.setName(Name);
User.setSchool(School);
console.log("Name = " + User.getName());
console.log("About = " + User.getAbout());
console.log("Birthdate = " + User.getBirth());
console.log("Mobile = " + User.getMobile());
console.log("Email = " + User.getEmail());
console.log("School = " + User.getSchool());
console.log("College = " + User.getCollege());
console.log("Address = " + User.getAddress());
