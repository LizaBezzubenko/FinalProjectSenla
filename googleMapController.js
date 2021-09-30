({
    init: function (cmp, event, helper) {
        cmp.set('v.mapMarkers', [
            {
                location: {
                    Street: '1 Serova St',
                    City: 'Minsk',
                    PostalCode: '220024',
                    Country: 'BY'
                },

                icon: 'utility:salesforce1',
                title: 'Worldwide Corporate Headquarters',
                description: 'Lada cars Dealer'
            },
            {
                location: {
                    Street: '11 Kamennogorskaya St',
                    City: 'Minsk',
                    PostalCode: '220063',
                    Country: 'BY'
                },

                icon: 'utility:salesforce2',
                title: 'Lada na kamenke'
            },
            {
                location: {
                    Street: '1 Serova St',
                    City: 'Minsk',
                    PostalCode: '220024',
                    Country: 'BY'
                },

                icon: 'utility:salesforce1',
                title: 'LADA Minsk'
            },
            {
                location: {
                    Street: '9 Mashinostroiteley St',
                    City: 'Minsk',
                    PostalCode: '220118',
                    Country: 'BY'
                },

                icon: 'utility:salesforce1',
                title: 'Lada service na chizhovke'
            },         
        ]);

        cmp.set('v.center', {
            location: {
                City: 'Minsk'
            }
        });

        cmp.set('v.zoomLevel', 11);
        cmp.set('v.markersTitle', 'Lada centers locations in Belarus');
        cmp.set('v.showFooter', true);
    }
});
