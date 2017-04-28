app.controller('appointmentController', ['$scope', '$filter', 'appointmentFactory', '$location', '$cookies', '$rootScope', '$routeParams', function($scope, $filter, appointmentFactory, $location, $cookies, $rootScope, $routeParams){
  $scope.appointment = {
    _creator: $cookies.get('logged_id')
  }
  $scope.appointments =[]
  $scope.index = function(){
    appointmentFactory.index(function(data){
      console.log(data.data);
      $scope.appointments = data.data
    })
  }
  $scope.delete = function(id, date){
    console.log("iddddddd",id);
    console.log("DATWTTEUYWU",date);
    $scope.today = new Date()
    $scope.today.setDate($scope.today.getDate() + 1)
    $scope.toCompare = new Date(date)
    if($scope.today.getTime()  > $scope.toCompare.getTime()){
      alert("Too late to cancel")
    }else{
    appointmentFactory.delete(id, function(returnedData){
      console.log(returnedData)
      $scope.index()
    })
  }
  }
    $scope.index()
    $scope.countDate = function(){
      console.log($scope.appointments.length);
      $scope.counter = 0;
      $scope.chosenDate = $scope.appointment.date
      $scope.dateIChose = new Date($scope.chosenDate)
      // $scope.dateIChose = $scope.dateIChose.getTime()
      // $scope.compared =
      // console.log($scope.dateIcChose);
      console.log("APPOINTMENT FROM CLIENT", $scope.dateIChose);
      for(var los = 0; los < $scope.appointments.length; los++){
        $scope.appointments[los].date = new Date($scope.appointments[los].date)
        console.log(los, $scope.appointments[los].date);
        console.log("APPOINTMENT FROM DB", $scope.appointments[los].date);
        if($scope.dateIChose.getTime() == $scope.appointments[los].date.getTime()){
          console.log("yess they match");
            $scope.counter += 1
        }else{
          console.log('no match');
    }

  }
  console.log('counttt',$scope.counter);
  }
  $scope.newAppointment = function(){
    $scope.index()
    console.log("all appointments from line 21", $scope.appointments);
    $scope.countDate()
    console.log("countteerrr", $scope.counter);

    if($scope.counter == 3){
      alert("Doctor can only allow a maximium of 3 appointments a day!!")
    }else {
      $scope.today = new Date()
      $scope.chosenTime = $scope.appointment.time.toString()
      // console.log($scope.appointment.date );
      $scope.earliest = 'Thu Jan 01 1970 08:00:00 GMT-0500 (EST)'
      $scope.latest = 'Thu Jan 01 1970 17:00:00 GMT-0500 (EST)'
      if($scope.appointment.date < $scope.today){
            alert("Date must be after Today")
    } else  if($scope.chosenTime <= $scope.earliest){
      alert("Appointments Must start after 8am", $scope.chosenTime);
    } else if($scope.chosenTime >= $scope.latest){
    alert("Sorry Doctor left office! appointment time must be before 5pm", $scope.chosenTime);
  }else{
      appointmentFactory.newAppointment($scope.appointment, function(returnedData){
        console.log(returnedData)
        $location.url('/dash')
      })
    }
    }

}
}])
