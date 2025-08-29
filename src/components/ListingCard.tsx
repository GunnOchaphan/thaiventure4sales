// components/ListingCard.jsx

interface Listing {
  imageUrl: string;
  netProfitMonthly: number;
  askingPrice: number;
  title: string;
  description: string;
}

export default function ListingCard({ listing }: { listing: Listing }) {
  return (
    <div
      className="relative rounded-lg border shadow hover:shadow-md transition overflow-hidden h-60"
      style={{
        backgroundImage: `url(${listing.imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay across the whole image (optional, helps readability) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/40"></div>

      {/* Top-left info (entire box blurred) */}
      <div className="absolute top-4 left-4 px-4 py-3 rounded-lg backdrop-blur-md bg-white/10 border border-white/20 shadow-md">
        <p className="font-bold text-emerald-300 text-lg md:text-xl">
          ฿{listing.netProfitMonthly}/mo profit
        </p>
        <p className="text-slate-100 text-sm">
          Asking: ฿{listing.askingPrice}
        </p>
      </div>

      {/* Bottom-left info */}
      <div className="absolute bottom-4 left-4">
        <h2 className="text-lg font-semibold text-white drop-shadow">
          {listing.title}
        </h2>
        <p className="text-sm text-slate-200 mt-1 drop-shadow text-left">
          {listing.description}
        </p>
      </div>
    </div>
  );
}
