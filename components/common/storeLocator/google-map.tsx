import React, { useState, useRef, useEffect } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { useQueryClient } from "@tanstack/react-query";
import { LocationData } from "lib/types/common";
import { desktopScreenSize } from "lib/utils/common";
import useWindowSize from "lib/utils/useWindowSize";

type LatLngProps = {
  lat: number;
  lng: number;
};

interface GoogleMapProps {
  selectedMapPosition: LatLngProps;
  locationData: LocationData[];
  setLocationWithDistance?: Function;
}

export const GoogleMaps = ({
  selectedMapPosition,
  locationData,
  setLocationWithDistance,
}: GoogleMapProps): JSX.Element => {
  const [width] = useWindowSize();
  const [userLocation, setUserLocation] = useState<undefined | LatLngProps>();
  const [markerPositions, setMarkerPositions] = useState<any>();
  const mapObj: any = useRef();
  const userLocRef: any = useRef(undefined);

  useEffect(() => {
    createMapMarkers();
    // if (!mapObj.current) return;
    if (userLocRef?.current === undefined) {
      getUserLocation();
      getDetails();
      // return;
    }
    if (userLocRef?.current !== "refused") {
      getDetails();
      return;
    }
  }, [locationData]);

  const createMapMarkers = () => {
    const locationArray = locationData?.map((location) => {
      return {
        lat: Number(location?.latitude),
        lng: Number(location?.longitude),
      };
    });
    setMarkerPositions(locationArray);
  };

  const getUserLocation: () => {} | undefined = () => {
    if (window?.navigator?.geolocation) {
      window?.navigator?.geolocation?.getCurrentPosition(
        userLocationCallBack,
        () => {
          userLocationCallBack(undefined);
        }
      );
    }
    return undefined;
  };

  const userLocationCallBack: (
    position: GeolocationPosition | undefined
  ) => void = (position) => {
    let userLoc: any = undefined;
    if (position) {
      userLoc = {
        lat: position?.coords?.latitude,
        lng: position?.coords?.longitude,
      };
      userLocRef.current = userLoc;
      setUserLocation(userLoc);
      getDetails();
      return;
    }
    userLocRef.current = "refused";
  };

  const getDetails = async () => {
    // if (!userLocRef.current) return;
    // const userLoc = userLocRef.current;
    // const distanceService =
    //   typeof window !== undefined &&
    //   new window.google.maps.DistanceMatrixService();

    // const destinationCoordinatesArray = locationData?.flatMap(
    //   (location: LocationData, index) => {
    //     // if (index === 0) return [];
    //     // if (location.hasOwnProperty("distance")) return [];
    //     return new window.google.maps.LatLng(
    //       location?.latitude,
    //       location?.longitude
    //     );
    //   }
    // );
    // if (destinationCoordinatesArray?.length < 1) return;
    // distanceService?.getDistanceMatrix(
    // {
    //   origins: [
    //     new window.google.maps.LatLng(
    //       userLoc?.lat || (userLocation && userLocation?.lat),
    //       userLoc?.lng || (userLocation && userLocation?.lng)
    //     ),
    //   ],
    //   destinations: destinationCoordinatesArray,
    //   travelMode: window.google.maps.TravelMode.DRIVING,
    //   unitSystem: window.google.maps.UnitSystem.IMPERIAL,
    // },
    // async (response, status) => {
    // const updatedLocationsArray = response?.rows[0]?.elements?.map(
    //   (distanceObj, index) => {
    //     return {
    //       ...locationData[index],
    //       distance: distanceObj?.distance?.text,
    //     };
    //   }
    // );
    setLocationWithDistance(locationData);
    // }
    // );
  };

  const mapContainerStyle = {
    height: width > desktopScreenSize ? "100%" : "300px",
    width: "100%",
  };

  return (
    <>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={17}
        center={
          selectedMapPosition?.lat ? selectedMapPosition : { lat: 0, lng: 0 }
        }
        onLoad={(map) => {
          mapObj.current = map;
        }}
      >
        {userLocation ? <Marker position={userLocation} /> : null}
        {markerPositions &&
          markerPositions?.map((position: LatLngProps, index: number) => {
            return <Marker key={index} position={position} />;
          })}
      </GoogleMap>
    </>
  );
};
export default GoogleMaps;
