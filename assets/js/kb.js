var index = elasticlunr(function() {
  this.addField("title");
  this.addField("body");
  this.setRef("id");
});

var doc1 = {
  id: 1,
  title: "hi, hello, hai, hey,hay",
  body: "Assalamualaikum, How can I help You?"
},
  doc2 = {
    id: 2,
    title: "Thank you",
    body: "You are welcome"
  },
  doc3 = {
    id: 3,
    title: "How is ",
    body: "I know all the things I learned."
  },
  doc4 = {
    id: 4,
    title: "how you are answering to our questions",
    body: "I am traning myself by learning."
  },

  ///college 20201////



  doc5 = {
    id: 5,
    title: "Ticket Number - 0001\nFlight Number - 00A",
    body: "This Flight already has been landed!! \n Thank You :)"
  },

  doc6 = {
    id: 6,
    title: "Can you tell me the weather Situation?",
    body: "Yes!! But I dont have any weather API. So , Please CheckOut this link - https://www.google.com/search?q=google+weather "
  },

  doc7 = {
    id: 7,
    title: " I love you!!",
    body: "Sorry!! I  have a Boy Girl Friend:3 "
  },
  doc8 = {
    id: 8,
    title: "Ticket number - 0002 , Flight Number - 002",
    body: "Sorry you have to wait for a while!! This flight has been delayed for 1:00 hour"
  },
  doc9 = {
    id: 9,
    title: "Flight Schedule",
    body: "1.DHAKA-SAIDPUR<br>2.DHAKA-COX'S BAZAR<br>3.DHAKA-PABNA<br>Which One?"
  },
doc10 = {
  id: 10,
  title: "DHAKA-SAIDPUR , DHAKA-COX'S BAZAR, DHAKA-PABNA ",
  body: "DEP-<br> 1. 7.10 AM <br> 2. 9.50 AM <br> 3. 4.10 PM<br> ARR- <br> 1. 8.05 AM <br> 2. 10.45 AM <br>3.  5.05 PM "
},
doc11 = {
    id: 11,
    title: "kmn acho, How are you, ki obosta , ",
    body:"Achi alhumdulliha valo!!"
  },
  doc12 = {
    id: 12,
    title: "Saira, who is Saira",
    body: "Owh Saira. She is Cute❤"
  };


  
////End/////


index.addDoc(doc1);
index.addDoc(doc2);
index.addDoc(doc3);
index.addDoc(doc4);
index.addDoc(doc5);
index.addDoc(doc6);
index.addDoc(doc7);
index.addDoc(doc8);
index.addDoc(doc9);
index.addDoc(doc10);
index.addDoc(doc11);
index.addDoc(doc12);
