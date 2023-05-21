import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { CartContext } from '../contexts/CartContext';

const Product = ({product}) => {
  const { addToCart } = useContext(CartContext)
  const {id, image, category, title, price } = product;

  return( 
  <div>
    <div className='border border-[#e4e4e4] h-[300px] mb-4 relative 
    overflow-hidden group transition rounded-2xl bg-white drop-shadow-md'>
        
        <div className='w-full h-full flex justify-center items-center '>
            <div className='w-[200px] mx-auto flex justify-center items-center'>
                <img className='max-h-[160px] group-hover:scale-110 transition duration-300' src={image} alt=''/>
            </div>
        </div>

        <div className='absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col items-center 
        justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300 '>
            <button onClick={() => addToCart(product,id)}>
                <div className='flex justify-center items-center text-white w-12 h-12 bg-red-400'>
                    <AddIcon className='text-3xl'/>
                </div>
            </button>
            <Link to={`/product/${id}`} className='w-12 h-12 bg-white flex justify-center items-center 
            text-primary drop-shadow-xl'>
                <RemoveRedEyeIcon/>
            </Link>
        </div>

    </div>
    
    <div>
        <div className='text-sm capitalize mb-1'>{category}</div>
        <Link to={`/product/${id}`}>
            <h2 className='font-semibold mb-1'>{title}</h2>
        </Link>
        <div className='font-semibold'>$ {price}</div>
    </div>
    
  </div>

  
  );
};

export default Product;