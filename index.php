<!doctype html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>TEST Determinant</title>
	<link rel="stylesheet" href="style.css">
</head>

<body>
	<div class="labels">
		<label for=""><span>Latitude :</span><input type="text" class="latitude"></label>
		<label for=""><span>Longitude :</span><input type="text" class="longitude"></label>
	</div>

	<div id="map-canvas"></div>

	<script src="javascript.js"></script>
	<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCBrnG1ii9RiH-cybENYCfGKN-9sX0EjPE&libraries=places&callback=initialize"></script>
</body>

</html>