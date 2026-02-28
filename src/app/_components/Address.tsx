"use client";

import { useEffect, useState } from "react";
import { Address, AddressInput, getUserAddresses, addAddress } from "../api/addresses";
import Modal from "../account/Modal";

export default function Addresses() {
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState<AddressInput>({
    name: "",
    details: "",
    phone: "",
    city: "",
  });

  const fetchAddresses = async () => {
    try {
      setLoading(true);
      const data = await getUserAddresses();
      setAddresses(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAddresses();
  }, []);

  const handleAddAddress = async () => {
    try {
      await addAddress(form);
      setShowModal(false);
      setForm({ name: "", details: "", phone: "", city: "" });
      fetchAddresses();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">My Addresses</h2>
        <button
          onClick={() => setShowModal(true)}
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
        >
          + Add Address
        </button>
      </div>

      {loading ? (
        <p className="text-gray-500">Loading addresses...</p>
      ) : addresses.length === 0 ? (
        <div className="border rounded-xl p-6 text-gray-500">
          No addresses found.
        </div>
      ) : (
        <div className="space-y-4">
          {addresses.map((address) => (
            <div key={address._id} className="border p-6 rounded-xl">
              <h3 className="font-semibold">{address.name}</h3>
              <p className="text-gray-600">{address.details}</p>
              <p className="text-gray-600">{address.city}</p>
              <p className="text-gray-600">{address.phone}</p>
            </div>
          ))}
        </div>
      )}

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <h3 className="text-xl font-semibold mb-6">Add New Address</h3>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Address Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full border rounded-lg px-4 py-3"
            />
            <input
              type="text"
              placeholder="Details"
              value={form.details}
              onChange={(e) => setForm({ ...form, details: e.target.value })}
              className="w-full border rounded-lg px-4 py-3"
            />
            <input
              type="text"
              placeholder="City"
              value={form.city}
              onChange={(e) => setForm({ ...form, city: e.target.value })}
              className="w-full border rounded-lg px-4 py-3"
            />
            <input
              type="text"
              placeholder="Phone"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full border rounded-lg px-4 py-3"
            />
          </div>
          <div className="flex justify-end gap-3 mt-6">
            <button
              onClick={() => setShowModal(false)}
              className="px-4 py-2 rounded-lg border"
            >
              Cancel
            </button>
            <button
              onClick={handleAddAddress}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
              Save
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
}