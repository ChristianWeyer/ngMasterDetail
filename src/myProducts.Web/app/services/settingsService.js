﻿(function () {
    "use strict";

    /**
     * @param $localStorage
     * @constructor
     */
    function SettingsService ($localStorage) {
        var lsSettings = $localStorage.applicationSettings = $localStorage.applicationSettings || {};

        return lsSettings;
    };

    app.factory("settingsService", ["$localStorage", SettingsService]);
})();