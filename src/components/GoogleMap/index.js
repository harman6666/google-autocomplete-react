import React from 'react';
import scriptLoader from 'react-async-script-loader';
//import GoogleStyles from './GoogleMapsStyle';
import './Map.css';

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zoom: 15,
      maptype: 'roadmap',
      place_formatted: '',
      place_id: '',
      place_location: '',
      title: 'Quandoo Office',
      defaultLat: 52.5486836,
      defaultLng: 13.40719880000006
    };
    this.manualLocWithAutocomplete = this.manualLocWithAutocomplete.bind(this);
    this.autoCompleteFunc = this.autoCompleteFunc.bind(this);
    this.nearByResults = this.nearByResults.bind(this);
    this.createMarker = this.createMarker.bind(this);
    this.nearBySearch = this.nearBySearch.bind(this);
    this.closePopup = this.closePopup.bind(this);
  }
  /***** 
  This function will only execute when this component will receive props through script loader. Once the Google API returns the result with success then this function will receive isScriptLoaded and isScriptLoadSucceed quals to true. 
  *******/
  componentWillReceiveProps({ isScriptLoaded, isScriptLoadSucceed }) {
    if (isScriptLoaded && !this.props.isScriptLoaded) { // load finished
      if (isScriptLoadSucceed) {
        this.google = window.google;
        this.map = new this.google.maps.Map(document.getElementById('map'), {
          zoom: this.state.zoom,
          //styles: GoogleStyles
        });
        /* Checking geolocation on the browser */
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
            this.setState({
              defaultLat: position.coords.latitude,
              defaultLng: position.coords.longitude
            })
            this.nearBySearch();
            const pos = {
              lat: this.state.defaultLat,
              lng: this.state.defaultLng
            };

            this.map.setCenter(pos);
            this.marker = new this.google.maps.Marker({
              position: pos,
              map: this.map
            });
            this.autoCompleteFunc();
          }, () => {
            this.nearBySearch();
            this.manualLocWithAutocomplete();
            console.log('navigator disabled');
          });
        } else {
          this.manualLocWithAutocomplete();
        }
      } else {
        console.log('script load error');
      }
    }
  }
  /*******
  This is a default autocomplete functionality when user declines the geolocation option on the browser then this function fires with the default location values.

  *******/
  manualLocWithAutocomplete() {
    let mapProp = {
        center: { lat: this.state.defaultLat, lng: this.state.defaultLng },
        zoom: this.state.zoom,
        mapTypeId: 'roadmap',
    };
    this.map = new this.google.maps.Map(document.getElementById('map'), mapProp);

    this.map.addListener('zoom_changed', () => {
        this.setState({
            zoom: this.map.getZoom(),
        });
    })

    this.map.addListener('maptypeid_changed', () => {
        this.setState({
            maptype: this.map.getMapTypeId(),
        });
    });

    this.marker = new this.google.maps.Marker({
        map: this.map,
        position: { lat: this.state.defaultLat, lng: this.state.defaultLng },
        title: this.state.title
    });
    this.autoCompleteFunc();
  }
  /********
  Autocomplete functionality.
  When user types anything in the textbox then they will get the desired results as per the text written in the textbox. Once they select any place from the dropdown they should be able to see the place on the map with the 'place_changed' event.
  *********/
  autoCompleteFunc() {
    // initialize the autocomplete functionality using the #map-location-search input box
    let inputNode = this.inputField;
    this.map.controls[this.google.maps.ControlPosition.TOP_LEFT].push(inputNode);
    let options = {
      types: ['(cities)']
    }
    let autoComplete = new this.google.maps.places.Autocomplete(inputNode, options);
    let placeInfoBox = this.placesContainer;
    autoComplete.addListener('place_changed', () => {
        let place = autoComplete.getPlace();
        if (!place.geometry) {
          // User entered the name of a Place that was not suggested and
          // pressed the Enter key, or the Place Details request failed.
          console.log("No details available for input: '" + place.name + "'");
          return;
        }
        let location = place.geometry.location;

        this.setState({
            place_formatted: place.formatted_address,
            place_id: place.place_id,
            place_location: location.toString(),
            defaultLat: location.lat(),
            defaultLng: location.lng()
        });
        placeInfoBox.style.display = 'block';
        this.nearBySearch();

        // bring the selected place in view on the map
        this.map.fitBounds(place.geometry.viewport);
        this.map.setCenter(location);
        this.map.setZoom(13);

        this.marker.setPlace({
            placeId: place.place_id,
            location: location
        });
    });
  }
  /*******
  Searches all the resturant nearby to the place searched.
  ********/
  nearBySearch() {
    let service = new this.google.maps.places.PlacesService(this.map);
    service.nearbySearch({
      location: { lat: this.state.defaultLat, lng: this.state.defaultLng },
      radius: 5000,
      type: ['resturant']
    }, this.nearByResults);
  }
  /*******
  Get all the nearby result.
  *******/
  nearByResults(results, status) {
    if (status === this.google.maps.places.PlacesServiceStatus.OK) {
      for (let i = 0; i < results.length; i++) {
        this.createMarker(results[i]);
      }
    }
  }
  /*******
  Marker/icons creation of the searched nearby places.
  *******/
  createMarker(place) {
    let icon = {
      url: place.icon,
      size: new this.google.maps.Size(71, 71),
      origin: new this.google.maps.Point(-25, 0),
      anchor: new this.google.maps.Point(17, 34),
      scaledSize: new this.google.maps.Size(25, 25)
    },
    marker = new this.google.maps.Marker({
      map: this.map,
      position: place.geometry.location,
      icon: icon
    }),
    infowindow = new this.google.maps.InfoWindow();
    this.google.maps.event.addListener(marker, 'click', () => {
      infowindow.close();
      infowindow.setContent(place.name);
      infowindow.open(this.map, marker);
    });
  }
  
  closePopup(e) {
    if(e) { 
      e.currentTarget.parentElement.parentElement.style.display = 'none';
    } else {
      return false;
    }
  }

  render() {
    return ( 
      <div id = 'mapWrapper'>
        <div id = 'map'> </div> 
        <div className="placesInfo" ref={ref => {this.placesContainer = ref}}>
          <div className="close__button"> <button onClick={this.closePopup}>x</button></div>
          <p> Place: { this.state.place_formatted } </p> 
          <p> Place ID: { this.state.place_id } </p> 
          <p> Location: { this.state.place_location } </p> 
        </div>
        <div id='pac-container' className="place__input--container">
          <input id='map-location-search' ref={autoCompleteInput => {this.inputField = autoCompleteInput}} type='text' name="search" placeholder='Enter a location' />
        </div>
      </div>
    );
  }
};

export default scriptLoader(
    ['https://maps.googleapis.com/maps/api/js?key=AIzaSyDVq2H8gTgDd2zBqo9s4i8SxTWPRwtK-W4&libraries=places']
)(Map)