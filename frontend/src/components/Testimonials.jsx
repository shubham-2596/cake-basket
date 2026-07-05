import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";

const Testimonials = () => {
  const reviews = [
    {
      name: "Aditi Sharma",
      text: "The cake was absolutely delicious and looked exactly like the image. Loved it!",
      rating: 5,
      image:
        "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Rahul Mehta",
      text: "Super fast delivery and amazing taste. Highly recommended!",
      rating: 4,
      image:
        "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Priya Nair",
      text: "Best birthday cake I ever ordered. Beautiful design and fresh cream.",
      rating: 5,
      image:
        "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      name: "Vikram Joshi",
      text: "Packaging, taste, and service — everything was perfect!",
      rating: 5,
      image:
        "https://randomuser.me/api/portraits/men/75.jpg",
    },
  ];

  return (
    <section className="py-20 bg-white px-6">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-[#4E342E] text-center mb-10">
          What Our Customers Say 💬
        </h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >

          {reviews.map((r, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#FFF8F0] p-6 rounded-3xl shadow-lg hover:scale-105 transition">

                {/* User */}
                <div className="flex items-center gap-4">
                  <img
                    src={r.image}
                    className="w-12 h-12 rounded-full"
                    alt={r.name}
                  />

                  <div>
                    <h3 className="font-semibold text-[#4E342E]">
                      {r.name}
                    </h3>

                    <p className="text-yellow-500">★★★★★</p>
                  </div>
                </div>

                {/* Text */}
                <p className="text-gray-600 mt-4">
                  "{r.text}"
                </p>

              </div>
            </SwiperSlide>
          ))}

        </Swiper>

      </div>
    </section>
  );
};

export default Testimonials;