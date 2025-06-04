// BookMySlot – Démonstration de gestion d’API de réservation + tracking + React/JS

import { useState, useEffect } from "react";
import { format } from "date-fns";

const mockSlots = [
  { id: 1, date: "2025-06-06", time: "10:00" },
  { id: 2, date: "2025-06-06", time: "14:00" },
  { id: 3, date: "2025-06-07", time: "11:30" },
];

export default function BookMySlot() {
  const [slots, setSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [userData, setUserData] = useState({ name: "", email: "" });
  const [confirmation, setConfirmation] = useState(null);

  // Simuler appel API pour récupérer les créneaux
  useEffect(() => {
    // Tracking de chargement (Google Analytics simulation)
    console.log("Page de réservation chargée (tracking)");
    setSlots(mockSlots);
  }, []);

  const handleSubmit = () => {
    if (!selectedSlot || !userData.name || !userData.email) return;

    // Simule envoi API
    console.log("Envoi vers API de réservation", {
      ...userData,
      slot: selectedSlot,
    });

    // Tracking conversion (simulé)
    console.log("Conversion enregistrée (Google Ads / Meta Ads)");

    setTimeout(() => {
      setConfirmation({ ...userData, ...selectedSlot });
    }, 500);
  };

  if (confirmation) {
    return (
      <div className="confirmation">
        <h2>✅ Réservation confirmée</h2>
        <p>Merci {confirmation.name}, RDV le {format(new Date(confirmation.date), "dd/MM/yyyy")} à {confirmation.time}</p>
      </div>
    );
  }

  return (
    <div className="booking-app">
      <h1>Réserver un créneau</h1>

      <div className="slots">
        {slots.map((slot) => (
          <button
            key={slot.id}
            onClick={() => setSelectedSlot(slot)}
            style={{
              backgroundColor: selectedSlot?.id === slot.id ? "#4f46e5" : "#f3f4f6",
              color: selectedSlot?.id === slot.id ? "white" : "black",
              margin: "5px",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          >
            {format(new Date(slot.date), "dd/MM/yyyy")} - {slot.time}
          </button>
        ))}
      </div>

      <div className="form" style={{ marginTop: "20px" }}>
        <input
          placeholder="Nom"
          value={userData.name}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
        /><br />
        <input
          placeholder="Email"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        /><br />
        <button onClick={handleSubmit} style={{ marginTop: "10px" }}>Réserver</button>
      </div>
    </div>
  );
}
