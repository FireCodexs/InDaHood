import React, {useState} from 'react'

const Card = ({product}) => {
    const { id, name, price, image, hoverImage, sizes, category, tags} = product;
    const [isHovered, setIsHovered] = useState(false);
    const discount = parseFloat((price * 1.1).toFixed(2));

  return (   
        <div class="bg-white text-gray-700 w-72 min-h-[10rem] shadow-lg rounded-md overflow-hidden">
                        <img
                        className='w-full h-72 object-cover'
                        src={isHovered ? hoverImage : image}
                        onMouseOver={() => setIsHovered(true)}
                        onMouseOut={() => setIsHovered(false)}
                        alt={name}
                        />
            {/* Top Buttons */}
            <div className="p-5 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                    <span className='badge px-3 py-1 rounded-full text-xs bg-green-100'>In Stock</span>
                    <span className="badge px-3 py-1 rounded-full text-xs bg-red-100">Not Official Store</span>
                </div>

                {/* Title */}
                <h2 className='font-semibold text-2xl overflow-ellipsis overflow-hidden whitespace-nowrap' title={name}>
                    {name}
                </h2>
                {/* Price */}
                <div className='price-container'>
                    <span class="text-xl font-bold">
                        {price}₤
                    </span>
                    <div className='flex items-center gap-2 mt-2'>
                        <span className='text-sm line-through opacity-50'>
                        {discount}₤
                        </span>
                        <span className='bg-green-400 px-1.5 py-0.5 rounded-md text-xs text-white'>
                            save 10%
                        </span>
                    </div>
                </div>
                {/* Sizes */}
                <div className="size-container">

                </div>
                {/* AddtoCart Button */}
                <div className="mt-3 flex gap-2">
                    <button class ="px-6 py-2 bg-yellow-500/80 hover:bg-yellow-500/90 rounded-md text-white font-medium tracking-wider transition">
                        Add to Cart
                    </button>
                    <button className='flex-grow flex justify-center items-center bg-gray-300/60 hover:bg-gray-300/80 transition rounded-md'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M15.653 19.415c-1.162 1.141-2.389 2.331-3.653 3.585-6.43-6.381-12-11.147-12-15.808 0-4.005 3.098-6.192 6.281-6.192 2.197 0 4.434 1.042 5.719 3.248 1.279-2.195 3.521-3.238 5.726-3.238 3.177 0 6.274 2.171 6.274 6.182 0 1.269-.424 2.546-1.154 3.861l-1.483-1.484c.403-.836.637-1.631.637-2.377 0-2.873-2.216-4.182-4.274-4.182-3.257 0-4.976 3.475-5.726 5.021-.747-1.54-2.484-5.03-5.72-5.031-2.315-.001-4.28 1.516-4.28 4.192 0 3.442 4.742 7.85 10 13l2.239-2.191 1.414 1.414zm7.347-5.415h-3v-3h-2v3h-3v2h3v3h2v-3h3v-2z"/>
                        </svg>
                    </button>
                    <button className='flex-grow flex justify-center items-center bg-gray-300/60 hover:bg-gray-300/80 transition rounded-md'>
                        <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="m17.5 11c2.484 0 4.5 2.016 4.5 4.5s-2.016 4.5-4.5 4.5-4.5-2.016-4.5-4.5 2.016-4.5 4.5-4.5zm-5.346 6.999c-.052.001-.104.001-.156.001-4.078 0-7.742-3.093-9.854-6.483-.096-.159-.144-.338-.144-.517s.049-.358.145-.517c2.111-3.39 5.775-6.483 9.853-6.483 4.143 0 7.796 3.09 9.864 6.493.092.156.138.332.138.507s-.046.351-.138.507l-.008.013c-1.079-1.18-2.631-1.92-4.354-1.92-.58 0-1.141.084-1.671.24-.498-1.643-2.025-2.84-3.829-2.84-2.208 0-4 1.792-4 4 0 2.08 1.591 3.792 3.622 3.982-.014.171-.022.343-.022.518 0 .893.199 1.74.554 2.499zm3.071-2.023 1.442 1.285c.095.085.215.127.333.127.136 0 .271-.055.37-.162l2.441-2.669c.088-.096.131-.217.131-.336 0-.274-.221-.499-.5-.499-.136 0-.271.055-.37.162l-2.108 2.304-1.073-.956c-.096-.085-.214-.127-.333-.127-.277 0-.5.224-.5.499 0 .137.056.273.167.372zm-3.277-2.477c-1.356-.027-2.448-1.136-2.448-2.499 0-1.38 1.12-2.5 2.5-2.5 1.193 0 2.192.837 2.44 1.955-1.143.696-2.031 1.768-2.492 3.044z" fill-rule="nonzero"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
  )
}

export default Card