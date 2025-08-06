import React from "react";

const images = [
  "https://images.squarespace-cdn.com/content/v1/586d154f03596e5605562ea7/505f73c1-ff6a-412a-934a-55ba07d97f53/mother+teresa.jpeg",
  "https://t3.ftcdn.net/jpg/05/75/82/22/360_F_575822240_dBlP0oH7vvWFSmn1Xafi2UHuzTtbZZaV.jpg",
  "https://t3.ftcdn.net/jpg/04/68/47/46/360_F_468474640_YcXTQsmw1U2sqnFG8vZyTq8SyoYsbvva.jpg",
  "https://static.vecteezy.com/system/resources/previews/022/013/205/non_2x/team-of-volunteer-worker-group-teaching-children-to-planting-tree-in-charitable-social-work-on-forest-rewilding-ngo-work-for-fighting-climate-change-and-global-warming-in-the-coastline-habitat-photo.jpg",
  "https://t3.ftcdn.net/jpg/05/37/44/52/360_F_537445204_qpG8LQ6QNassV6OF987veg5sVs4neZzY.jpg",
  "https://media.gettyimages.com/id/1498170916/photo/a-couple-is-taking-a-bag-of-food-at-the-food-and-clothes-bank.jpg?s=612x612&w=gi&k=20&c=OQXzpRYIt4_vr0b2tTz9Wsz8aCPi9FgUBwGSEeJaToM=",
];

function Gallery() {
  return (
    <div className="min-h-screen bg-black text-white py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-green-500 mb-8 text-center">
          Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <div key={idx} className="rounded-lg overflow-hidden shadow-lg">
              <img
                src={img}
                alt={`Gallery ${idx + 1}`}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;