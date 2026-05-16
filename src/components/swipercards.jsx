import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function ProductSwiper() {
  const products = [
    {
      id: 1,
      title: "Men T-Shirt",
      price: "₹499",
      oldPrice: "₹999",
      img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    },
    {
      id: 2,
      title: "Running Shoes",
      price: "₹1999",
      oldPrice: "₹3999",
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    },
    {
      id: 3,
      title: "Smart Watch",
      price: "₹2999",
      oldPrice: "₹5999",
      img: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d",
    },
    {
      id: 4,
      title: "Headphones",
      price: "₹1499",
      oldPrice: "₹2999",
      img: "https://images.unsplash.com/photo-1518444028785-8f5c56a77f9b",
    },
    {
      id: 5,
      title: "Headphones",
      price: "₹1499",
      oldPrice: "₹2999",
      img: "https://images.unsplash.com/photo-1518444028785-8f5c56a77f9b",
    },
    {
      id: 6,
      title: "Headphones",
      price: "₹1499",
      oldPrice: "₹2999",
      img: "https://images.unsplash.com/photo-1518444028785-8f5c56a77f9b",
    },
    {
      id: 7,
      title: "Headphones",
      price: "₹1499",
      oldPrice: "₹2999",
      img: "https://images.unsplash.com/photo-1518444028785-8f5c56a77f9b",
    },
    {
      id: 8,
      title: "Headphones",
      price: "₹1499",
      oldPrice: "₹2999",
      img: "https://images.unsplash.com/photo-1518444028785-8f5c56a77f9b",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-8">
      <h2 className="text-2xl font-semibold mb-4">Best Deals</h2>

      <Swiper
        spaceBetween={15}
        slidesPerView={4}
        grabCursor={true}
        breakpoints={{
          320: { slidesPerView: 1.2 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {products.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-3">
              
              {/* Image */}
              <div className="w-full h-40 overflow-hidden rounded-lg">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
              </div>

              {/* Content */}
              <div className="mt-3">
                <h3 className="text-sm font-medium">{item.title}</h3>

                <div className="flex items-center gap-2 mt-1">
                  <span className="text-lg font-bold text-green-600">
                    {item.price}
                  </span>
                  <span className="text-sm line-through text-gray-400">
                    {item.oldPrice}
                  </span>
                </div>

                <p className="text-xs text-green-500">
                  {Math.floor(
                    (1 -
                      parseInt(item.price.replace("₹", "")) /
                        parseInt(item.oldPrice.replace("₹", ""))) *
                      100
                  )}
                  % off
                </p>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}