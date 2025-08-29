export default function Contact() {
  return (
    <div className="px-8 py-20 text-center border-t bg-[url('/bg4.jpg')] bg-cover bg-center text-white">
      <h1 className="text-3xl font-bold mb-4">
        Can’t find what you’re looking for?
      </h1>
      <p className="text-white max-w-2xl mx-auto mb-6">
        We source through a network of thousands of businesses in Thailand,
        with little to no cost upfront.
      </p>

      {/* Input + Button */}
      <div className="flex justify-center items-center gap-2 max-w-md mx-auto text-white">
        <input
          type="text"
          placeholder="Enter your email and we’ll reach back to you"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
        <button className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition">
          send
        </button>
      </div>
    </div>
  )
}
