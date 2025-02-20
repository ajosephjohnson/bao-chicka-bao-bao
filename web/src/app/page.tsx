import Image from "next/image";
import { client } from "../sanity/lib/client";
import { defineQuery } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client);

const MENU_QUERY = defineQuery(`*[_type == "menuItem"]{
  title,
  description,
  price,
  image
}`);

async function getMenuData() {
  return await client.fetch(MENU_QUERY);
}

export default async function Home() {
  const menuItems = await getMenuData();
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-center mb-12">Our Menu</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {menuItems?.map((item, index) => (
          <div key={index} className="border rounded-lg overflow-hidden shadow-sm">
            {item.image && (
              <div className="relative h-48">
                <Image
                  src={builder.image(item.image).width(400).height(300).url()}
                  alt={item.title ?? ""}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <span className="text-lg font-mono">
                  ${typeof item.price === 'number' ? item.price.toFixed(2) : item.price}
                </span>
              </div>
              {item.description && (
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {item.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
