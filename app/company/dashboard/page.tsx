export default function CompanyDashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Company Dashboard</h1>

      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="p-4 shadow rounded">Drivers: 10</div>
        <div className="p-4 shadow rounded">Vehicles: 5</div>
        <div className="p-4 shadow rounded">Active Orders: 3</div>
      </div>
    </div>
  );
}