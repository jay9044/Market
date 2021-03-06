import React from "react";
import "../styles/MyMapComponent.scss";
import { compose, withProps, withStateHandlers } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import SingleMarker from "./SingleMarker";
// const {InfoWindow} = require("react-google-maps/lib/components/addons/InfoWindow")

//const demoFancyMapStyles = require("./demoFancyMapStyles.json");

const MyMapComponent = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=AIzaSyAMzOxPMWZ48_HxfwIoeLu6O0zpNmK2f6U&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,

    containerElement: <div className="my-map-height" />,

    mapElement: <div style={{ height: `100%` }} />,

    center: { lat: 51.520131, lng: -0.109311 }
  }),
  withScriptjs,
  withGoogleMap
)(props => {
  return (
    <GoogleMap defaultZoom={13.3} defaultCenter={props.center}>
      {props.marketInfo.map(market => {
        return (
          <SingleMarker
            showMarketDetails={props.showMarketDetails}
            market={market}
          />
        );
      })}
    </GoogleMap>
  );
});

export default MyMapComponent;
