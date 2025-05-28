import { useEffect, useRef } from 'react';

const MapSection = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // In a real implementation, the Google Maps API would be loaded here
    // and the map would be initialized
    
    // This is a placeholder that would be replaced with actual Google Maps implementation
    if (mapRef.current) {
      // If we had Google Maps API loaded:
      // const map = new google.maps.Map(mapRef.current, {
      //   center: { lat: 28.4595, lng: 77.0266 }, // Gurgaon coordinates
      //   zoom: 14,
      // });
      // 
      // const marker = new google.maps.Marker({
      //   position: { lat: 28.4595, lng: 77.0266 },
      //   map: map,
      //   title: "Nirvik Group Headquarters"
      // });
    }
  }, []);

  return (
    <section className="h-96 w-full slide-up">
      <div ref={mapRef} className="h-full w-full bg-neutral-200 flex items-center justify-center">
        <div className="text-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#0056b3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-4">
            <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
          </svg>
          <p className="text-neutral-700">Google Maps would be embedded here</p>
          <p className="text-neutral-500 text-sm">Nirvik Tower, 123 Business Park, Sector 42, Gurugram</p>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
