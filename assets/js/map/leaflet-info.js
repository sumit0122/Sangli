
// var map = L.map('mapleaf').setView([25.204500, 55.347245], 13);
var map = L.map('mapleaf').setView([16.8524, 74.5815], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


var markersData = {
    'House': [
        {
            name: 'Little Acorn Farm',
            location_latitude: 16.8624,
            location_longitude: 74.5747,
            map_image_url: '../assets/images/property/15.jpg',
            name_point: 'Little Acorn Farm',
            price: '₹1,20,000',
            label: 'for sale',
            bed: '4',
            bath: '4',
            sqft: '5000',
            title: 'first',
            url_point: 'single-property-8.html'
        },
        {
            name: 'Orchard House',
            location_latitude: 16.8499,
            location_longitude: 74.5890,
            map_image_url: '../assets/images/6.jpg',
            name_point: 'Orchard House',
            price: '₹12,000',
            label: 'for rent',
            bed: '8',
            bath: '6',
            sqft: '5800',
            title: 'second',
            url_point: 'single-property-8.html'
        },
        {
            name: 'Magnolia Ranch',
            location_latitude: 16.8222,
            location_longitude: 74.6509,
            map_image_url: '../assets/images/property/14.jpg',
            name_point: 'Neverland',
            price: '₹20,000',
            label: 'for sale',
            bed: '4',
            bath: '4',
            sqft: '5000',
            title: 'third',
            url_point: 'single-property-8.html'
        },
        {
            name: 'Home in Merrick Way',
            location_latitude: 16.8222,
            location_longitude: 74.6509,
            map_image_url: '../assets/images/feature/9.jpg',
            name_point: 'Home in Merrick Way',
            price: '₹3,00,000',
            label: 'for rent',
            bed: '5',
            bath: '3',
            sqft: '6000',
            title: 'four',
            url_point: 'single-property-8.html'
        }
    ]
};

for (var key in markersData)
    markersData[key].forEach(function (item) {
        L.marker([item.location_latitude, item.location_longitude], { title: item.title }).addTo(map)
            .bindPopup(
                '<div class="infoBox">' +
                '<div class="marker-detail">' +
                '<img src="' + item.map_image_url + '" alt="Image"/>' +
                '<div class="label label-shadow">' + item.label + '</div>' +
                '<div class="detail-part">' +
                '<h6>' + item.name_point + '</h6>' +
                '<ul>' +
                '<li>Bed : ' + item.bed + '</li>' +
                '<li>Baths :' + item.bath + '</li>' +
                '<li>Sq Ft :' + item.sqft + '</li>' +
                '</ul>'
                +
                '<span>' + item.price + '</span>' +
                '<a href="' + item.url_point + '">Details</a>' +
                '</div>' +
                '</div>' +
                '</div>');


        $('.property-grid .property-box').mouseenter(function () {
            var className = $(this).attr('data-class');
            $(".leaflet-marker-pane img[title|=" + className + "]").each(function (index) {
                var marker_title = $(this).attr('title');
                if (marker_title === className) {
                    $(this).addClass('add-filter');
                }
            });
        });

        $('.property-grid .property-box').mouseleave(function () {
            var className = $(this).attr('data-class');
            $(".leaflet-marker-pane img[title|=" + className + "]").each(function (index) {
                var marker_title = $(this).attr('title');
                if (marker_title === className) {
                    $(this).removeClass('add-filter');
                }
            });
        });


        // map modal
        $('.sidebar-hotels .hotel-box').mouseenter(function () {
            var className = $(this).attr('data-class');
            $(".leaflet-marker-pane img[title|=" + className + "]").each(function (index) {
                var marker_title = $(this).attr('title');
                if (marker_title === className) {
                    $(this).addClass('add-filter');
                }
            });
        });

        $('.sidebar-hotels .hotel-box').mouseleave(function () {
            var className = $(this).attr('data-class');
            $(".leaflet-marker-pane img[title|=" + className + "]").each(function (index) {
                var marker_title = $(this).attr('title');
                if (marker_title === className) {
                    $(this).removeClass('add-filter');
                }
            });
        });

        // listing hotel
        $('.list-view .list-box').mouseenter(function () {
            var className = $(this).attr('data-class');
            $(".leaflet-marker-pane img[title|=" + className + "]").each(function (index) {
                var marker_title = $(this).attr('title');
                if (marker_title === className) {
                    $(this).addClass('add-filter');
                }
            });
        });

        $('.list-view .list-box').mouseleave(function () {
            var className = $(this).attr('data-class');
            $(".leaflet-marker-pane img[title|=" + className + "]").each(function (index) {
                var marker_title = $(this).attr('title');
                if (marker_title === className) {
                    $(this).removeClass('add-filter');
                }
            });
        });


    });



