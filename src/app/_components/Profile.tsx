export default function Profile() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">
        Profile Information
      </h2>

      <div className="grid gap-4">
        <input
          type="text"
          placeholder="Full Name"
          className="border rounded-lg px-4 py-3"
        />

        <input
          type="email"
          placeholder="Email Address"
          className="border rounded-lg px-4 py-3"
        />

        <button className="bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition">
          Save Changes
        </button>
      </div>
    </div>
  );
}