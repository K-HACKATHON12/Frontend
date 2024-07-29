/*Since the map was loaded on client side,
we need to make this component client rendered as well*/
'use client'

//Map component Component from library
import { GoogleMap } from "@react-google-maps/api";

//Map's styling
const defaultMapContainerStyle = {
    width: '100%',
    height: '70vh',
    borderRadius: '15px 15px 15px 15px',
};

//K2's coordinates
const defaultMapCenter = {
    lat: 37.565643683342,
    lng: 126.95524147826
}

//Default zoom level, can be adjusted
const defaultMapZoom = 18

//Map options
const defaultMapOptions = {
    zoomControl: true,
    tilt: 0,
    gestureHandling: 'auto',
    mapTypeId: 'roadmap',
};

const MapComponent = () => {
    return (
        <div className="w-full">
            <GoogleMap
                mapContainerStyle={defaultMapContainerStyle}
                center={defaultMapCenter}
                zoom={defaultMapZoom}
                options={defaultMapOptions}
            >
            </GoogleMap>
        </div>
    )
};

export { MapComponent };