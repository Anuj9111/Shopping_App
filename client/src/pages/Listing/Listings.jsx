function Listings({product}){
    return(
        <div className="w-full h-[400px] flex flex-col justify-center items-center border-2 rounded-xl gap-4" >
            <img  className="rounded-2xl w-[300px] h-[200px]" src={product.image} alt="product image" />
            <h2 className="text-2xl">{product.title}</h2>
            <p className="text-xl">₹{product.price}</p>
            <button className="border w-40 rounded-xl h-10 text-white bg-red-500 hover:bg-red-300">Add to Cart</button>

        </div>
    )
}

export default Listings;