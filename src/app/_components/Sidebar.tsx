interface Props {
  active: string;
  setActive: (value: string) => void;
}

export default function Sidebar({ active, setActive }: Props) {
  const menu = [
      { id: "profile", label: "Profile" },
    { id: "addresses", label: "Addresses" },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm h-fit">
      <h2 className="text-xl font-semibold mb-6">My Account</h2>

      <ul className="space-y-3">
        {menu.map((item) => (
          <li
            key={item.id}
            onClick={() => setActive(item.id)}
            className={`cursor-pointer px-4 py-2 rounded-lg transition ${
              active === item.id
                ? "bg-green-600 text-white"
                : "hover:bg-gray-100"
            }`}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
}