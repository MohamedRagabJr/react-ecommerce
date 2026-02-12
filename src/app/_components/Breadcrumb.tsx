import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  link?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="breadcrumb" className="content-center px-8 py-8 breadcrumb bg-gray-50 border-b">
        <div className="container mx-auto">            
            <ol className="flex flex-wrap text-sm text-gray-500">
                {items.map((item, index) => (
                <li key={index} className="flex items-center">
                    {index > 0 && <span className="mx-2">/</span>}
                    {item.link ? (
                    <Link href={item.link} className=" hover:underline">
                        {item.label}
                    </Link>
                    ) : (
                    <span className="text-gray-700 ">{item.label}</span>
                    )}
                </li>
                ))}
            </ol>
        </div>
    </nav>
  );
}