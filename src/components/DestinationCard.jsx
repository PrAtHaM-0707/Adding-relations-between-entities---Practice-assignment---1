function DestinationCard({ destination }) {
  return (
    <div style={{
      width: "300px",
      border: "1px solid #ccc",
      borderRadius: "12px",
      overflow: "hidden",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      backgroundColor: "#fff",
    }}>
      <img
        src={destination.image}
        alt={destination.name}
        style={{ width: "100%", height: "200px", objectFit: "cover" }}
      />
      <div style={{ padding: "15px" }}>
        <h2>{destination.name}</h2>
        <p style={{ fontWeight: "bold", color: "#888" }}>{destination.location}</p>
        <p>{destination.description}</p>
        <p style={{ fontWeight: "bold", color: "#4CAF50" }}>{destination.price}</p>
      </div>
    </div>
  );
}

export default DestinationCard;
