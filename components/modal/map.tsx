/*Since the map was loaded on client side,
we need to make this component client rendered as well*/
'use client'

//Map component Component from library
import { GoogleMap, Marker } from "@react-google-maps/api";
import { useState, useEffect } from 'react';
import { useMarkerStore } from "@/stores/chart";

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
    const [markers, setMarkers] = useState([]);
    const setMarkerData = useMarkerStore((state) => state.setMarkerData);
    const setChartData = useMarkerStore((state) => state.setChartData);

    useEffect(() => {
        fetch('http://158.180.75.20:8000/query/loc')
            .then(response => response.json())
            .then(data => setMarkers(data))
            .catch(error => console.error('Error fetching marker data:', error));
    }, []);

    const handleMarkerClick = (trdar_cd) => {
        const url = `http://158.180.75.20:8000/query/pop/age/${trdar_cd}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setMarkerData(data);
                setChartData(data); // 차트 데이터를 스토어에 설정
                console.log('Fetched data:', data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };

    return (
        <div className="w-full">
            <GoogleMap
                mapContainerStyle={defaultMapContainerStyle}
                center={defaultMapCenter}
                zoom={defaultMapZoom}
                options={defaultMapOptions}
            >
                {markers.map((marker, index) => (
                    <Marker
                        key={index}
                        position={{ lat: marker.latitude, lng: marker.longitude }}
                        onClick={() => handleMarkerClick(marker.TRDAR_CD)}
                    />
                ))}
            </GoogleMap>
        </div>
    )
};

export { MapComponent };