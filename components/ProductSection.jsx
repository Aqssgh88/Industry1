import Image from "next/image";

const products = [
  { image: "/Shirts/Mesh Sublimation Jersey.jpeg", title: "Mesh Sublimation Jersey" },
  { image: "/Shirts/Lettermen jacket.jpeg", title: "Lettermen jacket" },
  { image: "/Shirts/SweatSuit.jpeg", title: "SweatSuit" },
  { image: "/Shirts/IMG-20250826-WA0008.jpg", title: "Zipup Hoodie" },
  { image: "/Shirts/IMG-20250826-WA0017.jpg", title: "Embroidery and Stone Work Shirt/Shorts" },
  { image: "/Shirts/IMG-20250826-WA0018.jpg", title: "Knit Beanies" },
  { image: "/Shirts/IMG-20250826-WA0011.jpg", title: "SunFade, Screen Printing, Embroidery Stone Work" },
  { image: "/Shirts/IMG-20250826-WA0027.jpg", title: "Embroidery Cap" },
  { image: "/Shirts/DFT & Screen Printing.jpeg", title: "DTF & Screen Printing" },
  { image: "/Shirts/Distressed and vintage wash hoodie.png", title: "Distressed and vintage wash hoodie" },
  { image: "/Shirts/Embrodery work cap.jpeg", title: "3D Embroidery cap" },
  { image: "/Shirts/IMG-20250826-WA0029.jpg", title: "Screen Printing PullOver" },
  { image: "/Shirts/Embroidery work.jpeg", title: "Distressed patch hoodie" },
  { image: "/Shirts/faizi1.png", title: "screen printing work with stripes on pants and rhinestones" },
  { image: "/Shirts/Cotton fleece hoodie satin fabric inside hood.jpeg", title: "Cotton fleece hoodie satin fabric inside hood" },
  { image: "/Shirts/Leather sleeves with woo.jpeg", title: "lettermen jacket with embroidery and chenille work" },
  { image: "/Shirts/Screen Printing and acid watch.png", title: "Screen Printing and acid watch" },
  { image: "/Shirts/Distresses Patch and Stone Work.png", title: "Distresses Patch and Stones Work" },
  { image: "/Shirts/Distressed embroidery patches.png", title: "Distressed embroidery patches" },
  { image: "/Shirts/Tripple Layer screen printing with distressed patch.png", title: "Tripple Layer screen printing with distressed patch" },
  { image: "/Shirts/Screen Print Shirt and Shorts.png", title: "Screen Print Shirt and Shorts" },

];

export default function ProductSection() {
  return (
    <section id="products" className="w-full px-[12%] py-12 text-center">
      <h2 className="text-3xl font-bold mb-10">Our Collection</h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((item, index) => (
          <div
            key={index}
            className="border rounded-xl overflow-hidden shadow-md hover:shadow-lg transition cursor-pointer"
          >
            {/* Product Image */}
            <div className="relative w-full h-64 overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover hover:scale-110 transition duration-500"
              />
            </div>
            {/* Product Title */}
            <p className="p-4 text-lg font-medium text-gray-800 dark:text-gray-200">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
