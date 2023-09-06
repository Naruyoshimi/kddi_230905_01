import React, { useState } from "react";
import { Marker, InfoWindow } from "@react-google-maps/api";

export default function PlaceInfo() {
  const places = [
    {
      info: "info1",
      location: { lat: 27.216841151924207, lng: 128.67918386809181 }
    },
    {
      info: "info2",
      location: { lat: 28.216841151924207, lng: 129.67918386809181 }
    }
  ];

  const [selected, setSelected] = useState(null);

  return (
    <>
      {places.map((marker) => (
        <Marker
          key={`${marker.location.lat * marker.location.lng}`}
          position={{
            lat: marker.location.lat,
            lng: marker.location.lng
          }}
          onMouseOver={() => {
            setSelected(marker);
            // マウスオーバーで<InfoWindow>が描画されます。
          }}
          icon={{
            url: "url of icon",
            origin: new window.google.maps.Point(0, 0),
            anchor: new window.google.maps.Point(15, 15),
            scaledSize: new window.google.maps.Size(30, 30)
            // ここでアイコン表示の設定ができます。
          }}
        />
      ))}

      {selected ? (
        // MarkerにマウスオーバーされたときにInfoWindowが表示されます。
        <InfoWindow
          position={{
            lat: selected.location.lat,
            lng: selected.location.lng
          }}
          onCloseClick={() => {
            setSelected(null);
          }}
        >
          <div>{selected.info}</div>
        </InfoWindow>
      ) : null}
    </>
  );
}
