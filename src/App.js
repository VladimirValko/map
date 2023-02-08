import {
  YMaps,
  Map,
  GeolocationControl,
  ZoomControl,
  Placemark,
} from "@pbe/react-yandex-maps";
import { useEffect, useRef, useState } from "react";
import useGeolocation from "react-hook-geolocation";

import { tours } from "./mockData";

function App() {
  const [data, setData] = useState({});
  const mapRef = useRef();

  const geolocation = useGeolocation({
    enableHighAccuracy: true,
    maximumAge: 15000,
    timeout: 12000,
  });

  const locateMe = () => {
    mapRef ??
      mapRef?.current?.panTo([geolocation.latitude, geolocation.longitude]);
    console.log("panned");
  };

  window.addEventListener("message", (message) => {
    const obj = JSON.parse(message.data);
    setData(obj);
    alert(message.data);
  });

  // НУЖНО ЧТО БЫ КАРТА ПАНОРАМИЛАСЬ НА НАЧАЛО МАРШРУТА _ 1ю ТОЧКУ
  // НУЖНО ЧТО БЫ КАРТА ПАНОРАМИЛАСЬ НА НАЧАЛО МАРШРУТА _ 1ю ТОЧКУ
  // НУЖНО ЧТО БЫ КАРТА ПАНОРАМИЛАСЬ НА НАЧАЛО МАРШРУТА _ 1ю ТОЧКУ
  // НУЖНО ЧТО БЫ КАРТА ПАНОРАМИЛАСЬ НА НАЧАЛО МАРШРУТА _ 1ю ТОЧКУ
  // НУЖНО ЧТО БЫ КАРТА ПАНОРАМИЛАСЬ НА НАЧАЛО МАРШРУТА _ 1ю ТОЧКУ
  // НУЖНО ЧТО БЫ КАРТА ПАНОРАМИЛАСЬ НА НАЧАЛО МАРШРУТА _ 1ю ТОЧКУ
  // НУЖНО ЧТО БЫ КАРТА ПАНОРАМИЛАСЬ НА НАЧАЛО МАРШРУТА _ 1ю ТОЧКУ

  return (
    <YMaps
      query={{ lang: "ru_RU", apikey: "52b7642c-e57a-448f-924e-5573575bd8e1" }}
    >
      <Map
        instanceRef={mapRef}
        defaultState={{ center: [44.099, 39.071], zoom: 8 }}
        width={"100vw"}
        height={"100vh"}
        onLoad={() => locateMe()}
      >
        {data?.checkpoints?.map((point) => (
          <Placemark
            key={point.id}
            geometry={[point.latitude, point.longitude]}
            modules={["geoObject.addon.balloon"]}
            options={{
              preset: "islands#yellowStretchyIcon",
              iconColor: "green",
            }}
            properties={{
              balloonContentHeader: `${point.text}`,
              balloonContentBody: `${point.time}`,
              balloonContentFooter: "",
              iconContent: `${point.text}`,
            }}
          />
        ))}
        <GeolocationControl
          options={{ float: "none", position: { bottom: 50, right: 10 } }}
        />
        <ZoomControl
          options={{ float: "none", position: { bottom: 100, right: 10 } }}
        />
      </Map>
    </YMaps>
  );
}

export default App;
