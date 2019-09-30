angular.module('rickMorty').controller('rickMortyController', ($scope, charRickMorty) => {

    $scope.chars = []

    let loadingChars = function () {
        charRickMorty.getChars().then((data) => {
            $scope.chars = data.data.results;
        });
    }

    loadingChars();
})