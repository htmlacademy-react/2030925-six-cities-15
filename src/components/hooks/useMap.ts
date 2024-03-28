import { useEffect, useRef, useState } from 'react';
import leaflet from 'leaflet';
import { Location } from '../../types/card-type';
import { TILE_LAYER_ATTRIBUTION, TILE_LAYER_URL } from '../../const';

type UseMapProps = {
    mapRef: React.MutableRefObject<HTMLElement | null>;
    location: Location;
}

export default function useMap({mapRef, location}: UseMapProps): leaflet.Map | null {
  const [map, setMap] = useState<leaflet.Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect((): void => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: location.latitude,
          lng: location.longitude
        },
        zoom: location.zoom
      });

      leaflet
        .tileLayer(
          TILE_LAYER_URL, {
            attribution: TILE_LAYER_ATTRIBUTION,
          })
        .addTo(instance);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, location]);

  return map;
}
