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

  //adding train name, destination, time, frequency
  $("#add-train-btn").on("click", function(event) {
    event.preventDefault();
  
    var train = $("#name-input").val().trim();
    var destination = $("#destination-input").val().trim();
    var time = moment($("#time-input").val().trim(), "MM/DD/YYYY").format("X");
    var frequency = $("#frequency-input").val().trim();

    database.ref().push({
      train: trainInput,
      destination: destinationInput,
      time: timeInput,
      frequency: frequencyInput,
      });

  });

  database.ref().on("child_added", function (childSnapshot) {
    $("tbody").append("<tr><td>"+childSnapshot.val().name+"</td>"+"<td>"+childSnapshot.val().role+"</td>"+"<td>"+childSnapshot.val().startDate+"</td>"+"<td>"+"placeholder"+"</td>"+"<td>"+childSnapshot.val().monthlyRate+"</td>"+"<td>"+"placeholder"+"</td>"+"</tr>");
});