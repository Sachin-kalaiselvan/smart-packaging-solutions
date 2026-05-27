import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapPin } from "lucide-react";

// Fix Leaflet marker icons
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

const deliveryZones = [
  { name: "Bengaluru Metro", coords: [12.9716, 77.5946], coverage: "1-2 days", color: "#00B050" },
  { name: "Karnataka Region", coords: [15.3173, 75.7139], coverage: "2-3 days", color: "#0070C0" },
  { name: "South India", coords: [13.0827, 80.2707], coverage: "3-5 days", color: "#FFC000" },
  { name: "Pan India", coords: [20.5937, 78.9629], coverage: "5-7 days", color: "#FF6B6B" },
];

export function DeliveryMap() {
  const mapRef = useRef<L.Map | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    mapRef.current = L.map(containerRef.current).setView([13.0827, 80.2707], 5);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '© OpenStreetMap contributors',
      maxZoom: 19,
    }).addTo(mapRef.current);

    deliveryZones.forEach((zone) => {
      const customIcon = L.divIcon({
        html: `
          <div style="
            background-color: ${zone.color};
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 20px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.2);
            border: 3px solid white;
          ">
            📍
          </div>
        `,
        iconSize: [40, 40],
        iconAnchor: [20, 20],
        popupAnchor: [0, -20],
      });

      L.marker(zone.coords as [number, number], { icon: customIcon })
        .bindPopup(
          `<div style="font-weight: bold;">${zone.name}</div><div style="font-size: 12px;">Delivery: ${zone.coverage}</div>`
        )
        .addTo(mapRef.current!);
    });

    return () => {
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, []);

  return (
    <div className="space-y-4">
      <div>
        <h3 className="font-display text-xl font-bold text-primary flex items-center gap-2">
          <MapPin className="h-5 w-5 text-accent" />
          Delivery Coverage Map
        </h3>
        <p className="text-sm text-muted-foreground">We deliver across India</p>
      </div>

      <div
        ref={containerRef}
        className="h-96 rounded-2xl border border-border shadow-soft overflow-hidden"
        style={{ zIndex: 1 }}
      />

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {deliveryZones.map((zone) => (
          <div key={zone.name} className="rounded-xl border border-border bg-card p-3">
            <div className="flex items-center gap-2">
              <div
                className="h-3 w-3 rounded-full"
                style={{ backgroundColor: zone.color }}
              />
              <span className="text-sm font-semibold text-primary">{zone.name}</span>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">⏱️ {zone.coverage}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
