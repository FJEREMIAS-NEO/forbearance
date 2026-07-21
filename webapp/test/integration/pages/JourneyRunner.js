sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"deg/crm/forbearance/test/integration/pages/HeaderList",
	"deg/crm/forbearance/test/integration/pages/HeaderObjectPage"
], function (JourneyRunner, HeaderList, HeaderObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('deg/crm/forbearance') + '/test/flp.html#app-preview',
        pages: {
			onTheHeaderList: HeaderList,
			onTheHeaderObjectPage: HeaderObjectPage
        },
        async: true
    });

    return runner;
});

