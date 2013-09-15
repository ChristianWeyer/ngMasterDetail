﻿require.config({
    baseUrl: "app/js"
});

require(
    [
        "../translations/translations-de",
        "app",
        "infrastructure/thinktecture.Authentication",
        "infrastructure/tools",
        "infrastructure/directives",
        "infrastructure/filters",
        "services/routeResolver",
        "services/alertService",
        "services/dataPushService",
        "services/logPushService",
        "services/dialogService",
        "services/articlesApiService",
        "controllers/navigationController",
        "controllers/loginController",
        "controllers/infoController"
        //"controllers/articlesController",
        //"controllers/articleDetailsController",
        //"controllers/logController",
    ],
    function () {
        angular.bootstrap(document, ["myApp"]);
    }
);