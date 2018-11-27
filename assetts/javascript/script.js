// Initialize Firebase
// Initialize Firebase
var config = {
  apiKey: "AIzaSyD6dbzk_ZKubCmu5AZJXiNciUQyxmZ8onM",
  authDomain: "train-scheduler-d5029.firebaseapp.com",
  databaseURL: "https://train-scheduler-d5029.firebaseio.com",
  projectId: "train-scheduler-d5029",
  storageBucket: "train-scheduler-d5029.appspot.com",
  messagingSenderId: "874282800873"
};

firebase.initializeApp(config);
var database = firebase.database();

//adding train name, destination, time, frequency
$(document).on("click","#add-train-btn", function(event) {
  event.preventDefault();

  var train = $("#name-input").val().trim();
  var destination = $("#destination-input").val().trim();
  var time = moment($("#time-input").val().trim(), "HH:mm").format("X");
  var frequency = $("#frequency-input").val().trim();

  var newTrain = {
    train: train,
    destination: destination,
    time: time,
    frequency: frequency,
  };
  // uploads info to DB//
  database.ref().push(newTrain);

  console.log(newTrain.train);
  console.log(newTrain.destination);
  console.log(newTrain.time);
  console.log(newTrain.frequency);

  alert("New Train Successfully Added");

  // clear submission
  $("#name-input").val("");
  $("#destination-input").val("");
  $("#time-input").val("");
  $("#frequency-input").val("");

});

// firebase
database.ref().on("child_added", function (childSnapshot) {
  //get current time
var currentTime= moment();
  //get train start from the database
  var trainStart= childSnapshot.val().time;
      // Pushing the start time back 1 yr to ensure it comes before the current time
var yearTime= moment(trainStart, "hh:mm").subtract(1, "years")
    // calculate the difference between trainStart and curTime
var timeDifference= moment().diff(moment(yearTime, "minutes"));
        // calculate time apart
var timeApart= timeDifference % childSnapshot.val().frequency;
    // minutes until arrival
    var minutesTillTrain=childSnapshot.val().frequency - timeApart;
    //adding minutes until the train to the current time and formatting the appearance of the time
    var nextArrival=moment().add(minutesTillTrain, "m").format("LT");


            // add new row to on-screen table
$("#tbody").append(newRow)

                // Handle the errors

});