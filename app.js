var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', function($scope) {
    
    $scope.alexWork = {
            "cID": "-1",
            "eID": "1441",
            "evYear": "2015",
            "qualifier": null,
            "evName": "",
            "sDate": 0,
            "eDate": 0,
            "teamSize": "1",
            "datedisp": "Jun 01, 2015",
            "etid": "1",
            "clAbbrev": "Elgin CC",
            "past": "1",
            "scoringType": "",
            "clubHometown": "",
            "doCut": "",
            "doAlt": "1",
            "cutRound": "0",
            "cutTopX": 0,
            "includeTies": "0",
            "tenFromLead": "0",
            "numStrokePlayRounds": 1,
            "hostClubID": "110",
            "courseID": "111",
            "useFlights": "",
            "byUser": "APD",
            "lastUpdate": "2015-06-23T18:37:00",
            "inLocal": "1",
            "inPlayers": "1",
            "inFlights": "0",
            "inTeeSheets": "1",
            "inPairings": "1",
            "handicapPercent": 100,
            "dotCards": "0",
            "maxDiff": 4.4,
            "logoid": "1",
            "bLive": "1",
            "lsRefreshRate": "0",
            "lsMessage": "<br>6 Teams in each flight will be invited to the Senior Better Ball Championship on Monday, June 29 at McHenry CC. (5 gross teams and 1 net team) <br>The Net Team that advances is the lowest score in the flight that has not advanced in the Gross.<br><br> For all ties in Gross and Net flights, the committee will use the USGA recommendation for breaking ties under Rule 33-6 which is defined by holes 10-18.",
            "lsRoundNum": "1",
            "treeSize": 0,
            "combined": "N",
            "rounds": [
              {
                  "roundNum": "1",
                  "roundDate": 1433134800000,
                  "scoringType": 4,
                  "mpRound": "-1",
                  "cutApplied": "1"
              }
            ]
        };
    
        $scope.submitForm = function() {

            // check to make sure the form is completely valid
            if ($scope.eventForm.$valid) {
                alert('Form is correctly filled out.');
            }

        };
    
}]);
