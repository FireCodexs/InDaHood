import React from 'react';
import products from '../../datasource.json';




function ProductPage() {
  
 
  //  let [productCard, setProductCard] = useState(productData)

  var currentURL = window.location.href
  // console.log(currentURL.split("/")[currentURL.split("/").length -1])
  //use your id to search for the right product
  let targetId = currentURL.split("/")[currentURL.split("/").length - 1]

  // console.log(productData)
  targetId = +targetId
  console.log(targetId)

  let [item] = products.filter(product => targetId === product.id)

  // console.log(productData.id)
  // console.log(item.name)
  // console.log(item.id)

  return  <div>  
  <div className='grid grid-cols-2 bg-white justify-center items-center pl-20'>




    <div id='product-page' className=' flex-row justify-center items-center'>



      <div className="p-4 bg-white mx-auto">
        <div className="max-w-sm overflow-hidden rounded-lg">
          <img className="h-72 w-72 max-w-full object-cover" src={item.image} alt="" />
        </div>
        <div className="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
          <div className="flex flex-row items-start">
            <button type="button" className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-gray-900 text-center">
              <img className="h-full w-full object-cover" src={item.hoverImage} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-white">
      <h1 className="text-2xl font-bold text-black ">{item.name}</h1>

      <h2 className="mt-8 text-black text-xl">Size</h2>
      <div className="mt-3 flex flex-wrap items-center gap-1 py-4">
        <label className="">
          <input type="radio" name="type" className="peer sr-only" checked />
          <p className="peer-checked:bg-black peer-checked:text-white rounded-lg border cursor-pointer border-black px-6 py-2 font-bold">{item.sizes[0]}</p>
        </label>
        <label className="">
          <input type="radio" name="type" className="peer sr-only" />
          <p className="peer-checked:bg-black peer-checked:text-white rounded-lg border cursor-pointer border-black px-6 py-2 font-bold">{item.sizes[1]}</p>
        </label>
        <label className="">
          <input type="radio" name="type" value="Groud" className="peer sr-only" />
          <p className="peer-checked:bg-black peer-checked:text-white rounded-lg border cursor-pointer border-black px-6 py-2 font-bold">{item.sizes[2]}</p>
        </label>
      </div>


      <button  type="button" className="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-gray-900 bg-none px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800">
        Add to cart
      </button>
    </div>








  </div>
  </div>

}

export default ProductPage