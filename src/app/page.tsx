import ListingCard from "@/components/ListingCard";
import { getListings } from '@/lib/airtable';
import HomeClient from './HomeClient';

export const revalidate = 60; // ISR - cache listings for 1 minute

export default async function HomePage() {
  const listings = await getListings();

  // The listings array is already sanitized, so just pass it directly.
  // There is no need to map over it and use .get()
  return (
    <HomeClient listings={listings} />
  );
}