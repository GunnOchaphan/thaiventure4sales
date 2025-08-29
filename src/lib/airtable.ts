import Airtable from "airtable";

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base(process.env.AIRTABLE_BASE_ID!);

export async function getListings() {
  const tableName = process.env.AIRTABLE_TABLE_NAME || "Listings";

  const records = await base(tableName).select({}).all();

  return records.map((record) => ({
    id: record.id,
    title: record.get("Title") as string,
    category: record.get("Category") as string,
    industry: record.get("Industry") as string,
    location: record.get("Location") as string,
    siteAgeYears: Number(record.get("SiteAgeYears")),
    monetization: record.get("Monetization") as string,
    netProfitMonthly: Number(record.get("NetProfitMonthly")),
    askingPrice: Number(record.get("AskingPrice")),
    originalPrice: record.get("OriginalPrice")
      ? Number(record.get("OriginalPrice"))
      : undefined,
    verified: Boolean(record.get("Verified")),
    managedBy: record.get("ManagedBy") as string,
    sponsored: Boolean(record.get("Sponsored")),
    editorsChoice: Boolean(record.get("EditorsChoice")),
    imageUrl: (record.get("ImageUrl") as string) || "/placeholder.png",
    description: record.get("Description") as string,
    badges: (record.get("Badges") as string)?.split(",") ?? [],
  }));
}
