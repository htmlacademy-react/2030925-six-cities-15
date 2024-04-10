import { useEffect, useRef } from 'react';
import leaflet, { LayerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const';
import { CardType, City } from '../../types/card-type';
import useMap from '../hooks/useMap';

type MapComponentProps = {
  mapType: string;
  city: City;
  cards: CardType[];
  activeCardId?: string | null;
};

const defaultCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});


export default function MapComponent({city, cards, activeCardId, mapType}: MapComponentProps): JSX.Element {
  const mapRef = useRef<HTMLDivElement>(null);
  const map = useMap({location: city.location, mapRef: mapRef});
  const markerLayer = useRef<LayerGroup>(leaflet.layerGroup());

  useEffect((): void => {
    if (map) {
      map.setView([city.location.latitude, city.location.longitude], city.location.zoom);
      markerLayer.current.addTo(map);
      markerLayer.current.clearLayers();
    }
  }, [city, map]);

  useEffect((): void => {
    if (map) {
      cards.forEach((card): void => {
        leaflet
          .marker({
            lat: card.location.latitude,
            lng: card.location.longitude
          }, {
            icon: card.id === activeCardId ? currentCustomIcon : defaultCustomIcon,
          })
          .addTo(markerLayer.current);
      });
    }
  }, [activeCardId, map, cards]);

  useEffect(() => {
    if (map) {
      map.setView([city.location.latitude, city.location.longitude], city.location.zoom);
    }
  }, [map, city]);
  return(
    <section className={`${mapType} map`} ref={mapRef}/>
  );
}
