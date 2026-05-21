export default function DriversPage() {
  const drivers = [
    { id: 1, name: "John Doe", phone: "670000000" },
    { id: 2, name: "Alice", phone: "680000000" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Drivers</h1>

      <div className="mt-4 space-y-3">
        {drivers.map((d) => (
          <div key={d.id} className="p-4 border rounded">
            <p className="font-semibold">{d.name}</p>
            <p className="text-gray-500">{d.phone}</p>
          </div>
        ))}
      </div>

      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
        + Add Driver
      </button>
    </div>
  );
}