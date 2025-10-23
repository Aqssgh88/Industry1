import Image from "next/image";

export default function FactorySection() {
  return (
    <section id="factory" className="w-full px-[12%] py-12 text-center">
      <h2 className="text-3xl font-bold mb-4">Our Factory</h2>
      <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 mb-10">
        We operate with state-of-the-art manufacturing facilities, offering 
        high-quality production with worldwide shipping. From custom clothing, 
        sublimation, embroidery to cut & sew services — everything is done in-house 
        to ensure premium quality for our clients globally.
      </p>

      {/* Factory Images Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
        {[
          "/Shirts/ORders.jpeg",
          "/Shirts/Factory2.jpg",
          "/Shirts/machinework.png",
          "/Shirts/mchinework2.png",
          "/Shirts/BulkOrder.jpeg",
          "/Shirts/Bulk2.png",
        ].map((src, i) => (
          <div
            key={i}
            className="relative w-full h-64 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
          >
            <Image
              src={src}
              alt={`Factory ${i + 1}`}
              fill
              className="object-cover hover:scale-110 transition duration-500"
            />
          </div>
        ))}
      </div>

      {/* 🎥 Factory Videos Section */}
      <h3 className="text-2xl font-semibold mb-6">Behind the Scenes</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
        <video
          controls
          className="w-full h-64 object-cover rounded-xl shadow-md hover:shadow-lg transition"
        >
          <source src="/videos/factory1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <video
          controls
          className="w-full h-64 object-cover rounded-xl shadow-md hover:shadow-lg transition"
        >
          <source src="/videos/factory2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Worldwide Shipping Section */}
      <div className="inline-flex items-center justify-center gap-4 p-3 rounded-full bg-gray-100 shadow-md">
        <Image
          src="/Shirts/faizi-logo.png"
          alt="Faizi Logo"
          width={80}
          height={80}
          className="object-contain"
        />
        <p className="text-lg font-medium text-gray-700 dark:text-gray-900 max-w-lg">
          We proudly provide{" "}
          <span className="text-green-600 font-semibold">Worldwide Shipping </span> 
          so you can enjoy our products no matter where you are!
        </p>
      </div>
    </section>
  );
}
