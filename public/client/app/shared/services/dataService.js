'use strict';

DataService.$inject = ['$http', '$firebaseObject', '$q'];

function DataService($http, $firebaseObject, $q) {

    var getDetails = function () {

        var deferred = $q.defer();

        var ref = firebase.database().ref().child('blobList');
        console.log(ref);
        var firobj = $firebaseObject(ref);
        console.log(firobj);

        firobj.$loaded().then(function () {
            console.log("loaded record:", firobj.$id);
            deferred.resolve(firobj);
        });
        return deferred.promise;
    }

    return {
        getDetails: getDetails
    };
}

module.exports = DataService;
