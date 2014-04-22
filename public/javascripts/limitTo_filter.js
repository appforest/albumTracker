laminasApp.filter('limitTo', function () {
    return function (input, end) {
        //parse to int
        return input.slice(0,end);
    };
});