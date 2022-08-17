function initialize() {

	var mapOptions, map, marker,
		infoWindow = '',

		latEl = document.querySelector( '.latitude' ),
		longEl = document.querySelector( '.longitude' ),
		element = document.getElementById( 'map-canvas' );

	mapOptions = {
		zoom:12,
		center: new google.maps.LatLng( 48.85517990712161, 2.3457890121459934 ),

		disableDefaultUI: false,
		scrollWheel: true,
		draggable: true,

	};

	map = new google.maps.Map( element, mapOptions );

	marker = new google.maps.Marker({
		position: mapOptions.center,
		map: map,
		draggable: true
	});

	google.maps.event.addListener( marker, "dragend", function ( event ) {
		var lat, long;

		console.log( 'i am dragged' );
		lat = marker.getPosition().lat();
		long = marker.getPosition().lng();

		var geocoder = new google.maps.Geocoder();
		geocoder.geocode( { latLng: marker.getPosition() }, function ( result, status ) {
			if ( 'OK' === status ) {

				latEl.value = lat;
				longEl.value = long;

			} else {
				console.log( 'Geocode was not successful for the following reason: ' + status );
			}

			if ( infoWindow ) {
				infoWindow.close();
			}
;

			infoWindow.open( map, marker );
		} );
	});


}