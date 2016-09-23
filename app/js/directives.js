bandApp.directive('header', function () {
    return {
        restrict: 'A',
        replace: true,
        templateUrl: "/app/views/header.html"
    }
});

bandApp.directive('footer', function () {
    return {
        restrict: 'A',
        replace: true,
        templateUrl: "/app/views/footer.html"
    }
});