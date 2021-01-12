const whiskers = {
    animal: "cat",
    age: "3",
    breed: "bengal",
    color: "golden",
    tail: "short",
    gender: "male",
    sound: function () {
      console.log("Meow");
    },
    play: function () {
      console.log("Oohh Yarn Toy!");
    },
};

//prompt 1
console.log(whiskers.animal);
//prompt 2
console.log(whiskers.age);
//prompt 3
console.log(whiskers.sound());
//prompt 4
console.log(whiskers.breed);
//prompt 5
console.log(whiskers.color);
//prompt 6
console.log(whiskers.play());
//prompt 7
var cat = whiskers['animal'];
console.log(cat);
//prompt 8
whiskers.color = 'white';
//prompt 9
whiskers['gender'] = 'female';
//prompt 10
whiskers.size = 'small';
//prompt 11
whiskers['diet'] = 'kitty mix';





//prompt 1
class Smartphone{
  constructor(){
  }
}
//prompt 2
constructor(OS, model, app_market, company){
  this.OS = OS;
  this.model = model;
  this.app_market = app_market;
  this.company = company;
}
//prompt 3
const phone1 = new Smartphone('ios', 'iphone 7', 'app store', 'apple', 'ding ding');
//prompt 4
const phone2 = new Smartphone('android', 'Samsung Galaxy Note20', 'play store', 'Samsung');
//prompt 5
console.log(phone1.OS);
//prompt 6
console.log(phone2['model']);
//prompt 7
constructor(ringtone){
  this.ringtone = ringtone;
  }
  call(){
    console.log(this.ringtone);
  }
//prompt 8
console.log(phone1.call());
//prompt 9
console.log(phone2['call']());
//prompt 10
  changeRingtone(ringtone){
    this.ringtone = ringtone;
  }
//prompt 11
phone1.changeRingtone('Beyonce');;
//prompt 12
phone2['changeRingtone']('Drake');*/

//Put all together
class Smartphone{
  constructor(OS, model, app_market, company, ringtone){
    this.OS = OS;
    this.model = model;
    this.app_market = app_market;
    this.company = company;
    this.ringtone = ringtone;
  }

  call(){
    console.log(this.ringtone);
  }

  changeRingtone(ringtone){
    this.ringtone = ringtone;
  }

}

const phone1 = new Smartphone('ios', 'iphone 7', 'app store', 'apple', 'ding ding');
const phone2 = new Smartphone('android', 'Samsung Galaxy Note20', 'play store', 'Samsung', 'dong dong');
console.log(phone1.OS);
console.log(phone2['model']);
console.log(phone1.call());
console.log(phone2['call']());
phone1.changeRingtone('Beyonce');
phone2['changeRingtone']('Drake');




/*
//prompt 12
get businessCalls(){
  const today = new Date();
  const hour = today.getHours();
  if(hour > 10 && hour < 21){
    return 'phone has been ringing all day!';
  }else{
    return 'phone on nighttime mode';
  }
}
console.log(phone1.businessCalls);
console.log(phone1["businessCalls"]);
//prompt 13
set phoneOwner(phoneOwner){
  this._phoneOwner = phoneOwner
}
//prompt 14
set phoneOwner(phoneOwner){
  console.log(phoneOwner);
}
//prompt 15
get phoneOwner(){
}
//prompt 16
phone1['phoneOwner'] = 'John'
console.log(phone1['phoneOwner']);
//prompt 17
phone2.phoneOwner = 'Jane';
console.log(phone2.phoneOwner);

//put all together
class Smartphone{
  constructor(OS, model, app_market, company, ringtone){
    this.OS = OS;
    this.model = model;
    this.app_market = app_market;
    this.company = company;
    this.ringtone = ringtone;
  }

  call(){
    console.log(this.ringtone);
  }

  changeRingtone(ringtone){
    this.ringtone = ringtone;
  }

  get businessCalls() {
    const today = new Date();
    const hour = today.getHours();
  
    if(hour > 10 && hour < 21){
      return 'phone has been ringing all day!';
    }else{
      return 'phone on nighttime mode';
    }
  }

  set phoneOwner(phoneOwner){
    this._phoneOwner = phoneOwner
    console.log(phoneOwner);
  }

  get phoneOwner(){
  }
}

const phone1 = new Smartphone('ios', 'iphone 7', 'app store', 'apple', 'ding ding');
const phone2 = new Smartphone('android', 'Samsung Galaxy Note20', 'play store', 'Samsung', 'dong dong');
console.log(phone1.OS);
console.log(phone2['model']);
console.log(phone1.call());
console.log(phone2['call']());
phone1.changeRingtone('Beyonce');
phone2['changeRingtone']('Drake');
console.log(phone1.businessCalls);
console.log(phone1["businessCalls"]);
phone1['phoneOwner'] = 'John'
console.log(phone1['phoneOwner']);
phone2.phoneOwner = 'Jane';
console.log(phone2.phoneOwner); */