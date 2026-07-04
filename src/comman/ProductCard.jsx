function ProductCard() {
  return (
    <>
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 m-2">
        <img
          src="https://a2zithub.org/dairy/uploads/168259075648183048.jpg "
          alt="ABC"
          className="w-full h-56 object-cover"
        />
        <div className="p-4">
          <h3 className="font-semibold text-lg">ABC</h3>

          <div className="flex items-center justify-between mt-2">
            <span className="text-blue-600 font-bold">₹ 100</span>

            <span className="text-yellow-500">⭐</span>
          </div>

          <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
            Add To Cart
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
