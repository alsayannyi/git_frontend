window.initMap = function() {
        var kyiv = {lat: 50.449266, lng: 30.516532};
        var secondMarker = {lat: 46.468987,  lng:30.738250};
        var thirdMarker = {lat: 49.841673, lng: 24.032759};
       
      

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 17,
          center: kyiv
        });

       

        var marker = new google.maps.Marker({
          position: kyiv,
          map: map,
          icon:"paris.png"
        });

         var point2 = new google.maps.Marker({
          position: secondMarker,
          map: map,
          title:"Odessa",
          icon: "tap.png"
        });

        var point3 = new google.maps.Marker({
          position: thirdMarker,
          map: map,
          title:" Lviv",
          icon: "sign.png"
        });
        // text for InfoWindow

           var contentString = '<div id="content">'+
               '<div id="siteNotice">'+
               '</div>'+
                '<h1 id="firstHeading" class="firstHeading">KYIV</h1>'+
                '<div id="bodyContent">'+
                '<p>you are here!' +
                '</div>'+
                '</div>';

           var contentStr2 = '<div id="content">'+
               '<div id="siteNotice">'+
               '</div>'+
                '<h1 id="firstHeading" class="firstHeading">Lviv</h1>'+
                '<div id="bodyContent">'+
                '<p><b>Congratulations! </b>You are almost in Europe!' +
                '<p> dont miss your chance' +
               '</div>'+
                '</div>';

          var contentStr = '<div id="content">'+
               '<div id="siteNotice">'+
               '</div>'+
                '<h1 id="firstHeading" class="firstHeading">Odessa</h1>'+
                '<div id="bodyContent">'+
                '<p> Welcome to <b>Odessa </b>' +
               '</div>'+
                '</div>';

         // text-end

          var infowindow = new google.maps.InfoWindow({
           content: contentString
          });

          var infowindowA = new google.maps.InfoWindow({
           content: contentStr
          });

          var infowindowB = new google.maps.InfoWindow({
           content: contentStr2
          });


        point2.addListener('click', function() {
          infowindowA.open(map, point2);
        });

        point3.addListener('click', function() {
          infowindowB.open(map, point3);
        });

      marker.addListener('click', function() {
          infowindow.open(map, marker);
        });


// centering by marker

 marker.addListener('click', function() {
    map.setZoom(14);
    map.setCenter(marker.getPosition());
  });

 point2.addListener('click', function() {
    map.setZoom(14);
    map.setCenter(point2.getPosition());
  });

  point3.addListener('click', function() {
    map.setZoom(14);
    map.setCenter(point3.getPosition());
  });

        // direction added
        var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer;
        directionsDisplay.setMap(map); 

        var onChangeHandler = function() {
          calculateAndDisplayRoute(directionsService, directionsDisplay);
        };
        document.getElementById('start').addEventListener('change', onChangeHandler);
        document.getElementById('end').addEventListener('change', onChangeHandler);
      }

        function calculateAndDisplayRoute(directionsService, directionsDisplay) {
        directionsService.route({
          origin: document.getElementById('start').value,
          destination: document.getElementById('end').value,
          travelMode: 'DRIVING'
        }, function(response, status) {
          if (status === 'OK') {
            directionsDisplay.setDirections(response);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });

// end of direction  section

}


