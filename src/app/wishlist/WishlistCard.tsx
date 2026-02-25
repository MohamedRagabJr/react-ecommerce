"use client";

import { useContext } from "react";
import { WishlistContext } from "../_context/WishlistContext";

export default function WishlistCard() {

  const { wishlistItems } = useContext(WishlistContext)!;

  return (

    <>

      {wishlistItems?.map((item) => (

        <div key={item._id}>

          {item.title}

        </div>

      ))}

    </>

  );
}