export default function CompaniesPage() {
  const companies = [
    { id: 1, name: "Total Logistics", status: "PENDING" },
    { id: 2, name: "Fast Transport", status: "APPROVED" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Companies</h1>

      <div className="mt-4 space-y-3">
        {companies.map((c) => (
          <div key={c.id} className="p-4 border rounded flex justify-between">
            <div>
              <p className="font-semibold">{c.name}</p>
              <p className="text-sm text-gray-500">{c.status}</p>
            </div>

            {c.status === "PENDING" && (
              <button className="bg-blue-600 text-white px-3 py-1 rounded">
                Approve
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}