// app/HomeClient.jsx
'use client'

import { useState } from 'react';
import ListingCard from "@/components/ListingCard";

interface Listing {
  id: string; // Ensure there's an id for key prop
  imageUrl: string;
  netProfitMonthly: number;
  askingPrice: number;
  title: string;
  description: string;
  category?: string; // Optional category field
}

interface HomeClientProps {
  listings: Listing[];
}

export default function HomeClient({ listings }: HomeClientProps) {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = ['all', 'restaurants', 'hotels/apartments', 'services', 'other'];

  const filteredListings = listings.filter(listing => {
    // Access the property directly now
    const category = listing.category ? listing.category.toLowerCase() : '';
    
    if (activeTab === 'all') {
      return true;
    }
    
    return category === activeTab;
  });

  return (
    <section className="text-center">
      <div className="grid md:grid-cols-2 h-[410px]">
      {/* Left - Text on white bg */}
      <div className="flex flex-col justify-center px-10 bg-white text-left">
        <h1 className="text-4xl font-extrabold mb-4 text-gray-900">
          Thailand&apos;s business that makes money
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Buy and sell businesses with ease on our platform. <br />
          Your first step to business ownership in Thailand starts here.
        </p>
      </div>

      {/* Right - Image background */}
      <div className="bg-[url('/bg.jpg')] bg-cover " />


    </div>

      <div className="px-8 py-8">
        <div className="flex space-x-8 border-b pb-2 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 ${
                activeTab === tab
                  ? 'font-medium border-b-2 border-black'
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredListings.map((listing) => (
            // Pass the sanitized object to ListingCard
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </div>
    </section>
  );

}
