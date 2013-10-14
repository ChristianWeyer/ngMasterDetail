﻿require.config({
    baseUrl: "app/js"
});

require(
    [
        "../translations/translations-de",
        "constants",
        "app",
        
        "infrastructure/tools",
        "infrastructure/thinktecture.Authentication",
        "infrastructure/thinktecture.SignalR",
        "infrastructure/resetSourceWhenDirective",
        "infrastructure/chartAutoResizeDirective",
        "infrastructure/baseUrlFilter",

        "services/routeResolverService",
        "services/toastService",
        "services/dataPushService",
        "services/logPushService",
        "services/dialogService",
        "services/articlesApiService",
        "services/personalizationService",
        "services/networkStatusService",
        "services/settingsService",

        "controllers/navigationController",
        "controllers/loginController",
        "controllers/infoController",
        "controllers/settingsController",
        "controllers/statusController"
    ],
    function () {
        angular.bootstrap(document, ["myApp"]);
    }
);
