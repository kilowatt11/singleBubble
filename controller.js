app.controller('bubController', function ($scope) {
    $scope.counter = 0;
    $scope.meettxt = "waiting";
    $scope.bumpUp = function () {
        if($scope.counter < 5){
        $scope.counter++
        };
        switch ($scope.counter) {
            case 1:
                break;
            case 2:
                break;
            case 3:
                $scope.myStyle = {
                    "width": "65%",
                    "height": "65%"
                };
                $scope.upStyle = {
                    "margin-left": "85%",
                    "bottom": "85px"
                };
                $scope.downStyle = {
                    "margin-left": "0%",
                    "bottom": "85px"
                }
                $scope.popStyle = {
                    "top": "170px",
                    "margin-left": "45%"
                }
                $scope.meettxt = "Interested?";
                break;

            case 4:
                $scope.myStyle = {
                    "width": "75%",
                    "height": "75%"
                };
                $scope.upStyle = {
                    "margin-left": "88%",
                    "bottom": "95px"
                };
                $scope.downStyle = {
                    "margin-left": "0%",
                    "bottom": "95px"
                }
                $scope.popStyle = {
                    "top": "200px",
                    "margin-left": "45%"
                }
                $scope.meettxt = "Really Like This!?";
                break;
            case 5:
                alert("Lets Meet!!");
                break;
            default:
                $scope.myStyle = {
                    "width": "45%",
                    "height": "45%"
                };
                $scope.upStyle = {
                    "margin-left": "80%",
                    "bottom": "60px"
                };
                $scope.downStyle = {
                    "margin-left": "0%",
                    "bottom": "60px"
                }
                $scope.popStyle = {
                    "top": "105px",
                    "margin-left": "36%"
                }
                break;

        }
       
    };
    $scope.bumpDown = function () {
        if($scope.counter > 0){
        $scope.counter--
        };
        switch ($scope.counter) {
            case 1:          
            case 2:
            default:
            $scope.myStyle = {
                    "width": "45%",
                    "height": "45%"
                };
                $scope.upStyle = {
                    "margin-left": "80%",
                    "bottom": "60px"
                };
                $scope.downStyle = {
                    "margin-left": "0%",
                    "bottom": "60px"
                }
                $scope.popStyle = {
                    "top": "105px",
                    "margin-left": "36%"
                }
                break;
  
            case 3:
                $scope.myStyle = {
                    "width": "65%",
                    "height": "65%"
                };
                $scope.upStyle = {
                    "margin-left": "85%",
                    "bottom": "85px"
                };
                $scope.downStyle = {
                    "margin-left": "0%",
                    "bottom": "85px"
                }
                $scope.popStyle = {
                    "top": "170px",
                    "margin-left": "45%"
                }
                break;

            case 4:
                $scope.myStyle = {
                    "width": "75%",
                    "height": "75%"
                };
                $scope.upStyle = {
                    "margin-left": "88%",
                    "bottom": "95px"
                };
                $scope.downStyle = {
                    "margin-left": "0%",
                    "bottom": "95px"
                }
                $scope.popStyle = {
                    "top": "200px",
                    "margin-left": "45%"
                }
                break;
            case 5:
                alert("Lets Meet!!");
                break;
         

        }
    };

})