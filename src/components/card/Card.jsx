import React, {useState} from 'react';


const Card = (props) => {

    const [isHovered, setIsHovered] = useState(false);

  return (
        <div class="shadow-xl shadow-red-400/100 rounded overflow-hidden shadow-lg">
            <div class="">
                    <img
                        className='w-40'
                        src={isHovered ? props.hoverImage : props.image}
                        onMouseOver={() => setIsHovered(true)}
                        onMouseOut={() => setIsHovered(false)}
                        alt={props.alt}
                        />
                </div>
                <div className="p-4">
                    <h4 className="text-xl font-semibold tracking-tight text-blue-600">
                        {props.name}
                    </h4>
                    <p className="mb-2 leading-normal">
                        Sizes: {props.sizes}
                        Category: {props.category}
                        Tags: {props.tags}
                    </p>
                    <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
                       Add To Cart {props.price}
                    </button>
                </div>
            </div>
  )
}

export default Card