import { getUserOrders } from "../api/getUserOrders";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Image from "next/image"
export default async function OrdersPage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {

  const page = Number(searchParams.page) || 1;

  const ordersPerPage = 3;

  const orders = await getUserOrders();

  /// pagination logic

  const start = (page - 1) * ordersPerPage;

  const end = start + ordersPerPage;

  const currentOrders = orders.slice(start, end);

  const totalPages = Math.ceil(orders.length / ordersPerPage);
  console.log(currentOrders)
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">My Orders</h1>

      {/* orders */}

      <div className="space-y-5 flex gap-5">
        {currentOrders.map((order: any) => (
          <div className="w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2 p-2"  key={order._id} >
            <Card className="w-full">
              <div className="flex flex-nowrap ">
                {order.cartItems.map((item) => (
                  <div key={item._id} >
                    <Image
                      height={550}
                      width={550}
                      src={item.product.imageCover}
                      alt={item.product.title}
                      className="h-62.5 w-full object-contain rounded-xl"
                    />
                    </div>
                  ))}
              </div>
              
              <CardHeader>
                <CardTitle>Order #{order._id}</CardTitle>
              </CardHeader>
                 <CardContent>
                  {order.cartItems.map((item) => (
                    <div key={item._id} className="mb-2">
                      <p className="font-medium">{item.product.title}</p>
                      <p className="text-sm text-muted-foreground">
                        Qty: {item.count} × {item.price} EGP
                      </p>
                    </div>
                  ))}

                  <div className="mt-4 font-bold">
                    Total: {order.totalOrderPrice} EGP
                  </div>
                </CardContent>
            </Card>
          </div>
        ))}
      </div>

      {/* pagination */}

      <Pagination className="mt-10">
        <PaginationContent>
          {/* previous */}

          <PaginationItem>
            <PaginationPrevious href={`/orders?page=${Math.max(1,page-1)}`} />
          </PaginationItem>

          {/* pages */}

          {Array.from({
            length: totalPages,
          }).map((_, index) => (
            <PaginationItem key={index}>
              <PaginationLink
                href={`/orders?page=${index + 1}`}
                isActive={page === index + 1}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}

          {/* next */}

          <PaginationItem>
            <PaginationNext href={`/orders?page=${Math.min(totalPages,page+1)}`} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
