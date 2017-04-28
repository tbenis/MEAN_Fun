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
  $scope.delete = function(id){

    appointmentFactory.delete(id, function(returnedData){
      console.log(returnedData)
      $scope.index()
    })
  }
    $scope.index()

  // $scope.newAppointment = function(){
    // $scope.index()
    // console.log("all appointments from line 21", $scope.appointments);
    // $scope.countDate()
    // $scope.countDate = function(){
      console.log($scope.appointments.length);
      $scope.counter = 0;
      $scope.chosenDate = $scope.appointment.date.toString()
      console.log("APPOINTMENT chosen date", $scope.chosenDate);
      $scope.appointmentsDate = $filter('date')(new Date($scope.chosenDate.split(' ').join('-')), "MM/dd/yyyy 'at' h:mm a");
      console.log("APPOINTMENT FROM CLIENT", $scope.appointmentsDate);
    for(var los = 0; los < $scope.appointments.length; los++){
      // console.log($scope.appointments[los].date);
      // console.log('los', los);
      $scope.appointments[los].date = $filter('date')(new Date($scope.chosenDate.split('-').join('-')), "MM/dd/yyyy 'at' h:mm a");
      // console.log("APPOINTMENT FROM DB",$scope.appointments[los].date);
      if($scope.appointmentsDate == $scope.appointments[los].date){
        // console.log("yess they match");
      }else{
        // console.log('no match');
      }
    }
    // }
    $scope.today = new Date()
    $scope.chosenTime = $scope.appointment.time.toString()
    // console.log($scope.appointment.date );
    $scope.earliest = 'Thu Jan 01 1970 08:00:00 GMT-0500 (EST)'
    $scope.latest = 'Thu Jan 01 1970 17:00:00 GMT-0500 (EST)'
    if($scope.appointment.date < $scope.today){
          alert("Date must be before Today")
  } else  if($scope.chosenTime <= $scope.earliest){
    alert("Appointments Must start after 8am", $scope.chosenTime);
  } else if($scope.chosenTime >= $scope.latest){
  alert("Sorry Doctor left office! appointment time must be before 5pm", $scope.chosenTime);
}else{
    appointmentFactory.newAppointment($scope.appointment, function(returnedData){
      // console.log(returnedData)
      $location.url('/dash')
    })
  }
}
}])
