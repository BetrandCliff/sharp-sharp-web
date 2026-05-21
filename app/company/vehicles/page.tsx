export default function VehiclesPage() {
  const vehicles = [
    { id: 1, plate: "CE123AB", type: "Truck" },
    { id: 2, plate: "CE456CD", type: "Bike" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Vehicles</h1>

      <div className="mt-4 space-y-3">
        {vehicles.map((v) => (
          <div key={v.id} className="p-4 border rounded">
            <p className="font-semibold">{v.plate}</p>
            <p className="text-gray-500">{v.type}</p>
          </div>
        ))}
      </div>

      <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded">
        + Add Vehicle
      </button>
    </div>
  );
}