angular.module('rickMorty').factory('charRickMorty', ($http) => {
    let _getChars = () => {
        return $http.get('https://rickandmortyapi.com/api/character')
    }

    return {
        getChars: _getChars
    }
})