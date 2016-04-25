angular
  .module('main',[])

  .value('$',$)

  .controller('mainCtrl', function ($scope, $http, $){
    $http({
      method: 'GET',
      // url: 'https://crossorigin.me/http://elpais.com/'
      url : 'https://cors.5apps.com/?uri=http://elmundo.es'
    }).then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available

        // $scope.page = $(response.data);
        console.log(response.data);
        console.log(response.data.substr(response.data.indexOf('<body')));
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });
  })
