import { motion } from 'framer-motion'
import React, { useContext, useEffect, useState } from 'react'
import Data from '../features/data/data'
import { FaCartShopping, FaHeart } from 'react-icons/fa6'
import Feature from '../component/layout/feature.jsx'
import Footer from '../component/layout/footer.jsx'
import { ShoppingCart } from '../context/ProductContext'
import Header from '../component/layout/header.jsx'
import { useNavigate, useParams } from 'react-router-dom'

function ProductDetail() {

  const {itemSelect, AddCart, cartSelect, quantity, setQuantity} = useContext(ShoppingCart)
  const [active, setActive] = useState('detail')
  const { id } = useParams(); // Get product ID from URL
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Find product by ID
    const selectedProduct = Data.find((p, index) => index === parseInt(id));
    setProduct(selectedProduct);
  }, [id]);
  
  if (!product) return <p>Loading...</p>;
  

  return (
  <div className='flex flex-col items-center w-full bg-neutral'>
        <div className="h-[35rem] flex items-center p-4 justify-evenly">
            <img src={product.image} className='size-[28rem] rounded-2xl shadow-xl' alt="" />
            <div className="w-1/2 space-y-4" id='img-detail'>
                <h2 className='text-4xl font-ubuntu'>{product.name}</h2>
                <h4 className='text-2xl font-playfair'>$ {product.price}</h4>
                <p className='text-lg font-roboto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil reiciendis molestiae vero est sequi quo! Natus rerum, 
                  molestias vitae nam officia deserunt voluptatibus sapiente amet cupiditate et voluptatum, quisquam odit.</p>
                <div className="flex gap-4">
                  <input type="number" name="" id="" onChange={e => setQuantity(e.target.value)} defaultValue={quantity} className='p-4 w-20 h-10 border-2 bg-white border-black rounded-xl' />
                  <motion.button 
                  whileHover={{
                    backgroundColor: 'var(--secondary-color)',
                    scale: 1.1
                  }}
                  whileTap={{
                    scale:0.9
                  }}
                  onClick={AddCart(product)}
                  className='bg-accent text-white py-2 rounded-xl px-4 flex items-center gap-2'>Add To Cart <FaCartShopping /></motion.button>
                  <motion.button
                   whileHover={{
                    scale: 1.1
                  }}
                  whileTap={{
                    scale:0.9
                  }}
                  >
                    <FaHeart size={20} />
                  </motion.button>
                </div>
            </div>
        </div>
        <div className="h-[40rem] w-[60rem]">
          <ul className="flex items-center justify-evenly p-0 m-0 h-20 bg-primary bg-opacity-30">  
              <motion.li
              onClick={() => setActive('detail')}
              className={active === 'detail' ? 'px-8 cursor-pointer py-4 border-t-2 border-accent bg-gray-200 mt-6' : 'px-8 cursor-pointer py-4 mt-6'}
              >Description</motion.li>
              <motion.li 
              onClick={() => setActive('image')}
              className={active === 'image' ? 'px-8 cursor-pointer py-4 border-t-2 border-accent bg-gray-200 mt-6' : 'px-8 cursor-pointer py-4 mt-6'}
              >Image</motion.li>
              <motion.li 
              onClick={() => setActive('review')}
              className={active === 'review' ? 'px-8 cursor-pointer py-4 border-t-2 border-accent bg-gray-200 mt-6' : 'px-8 cursor-pointer py-4 mt-6'}
              >Reviews</motion.li>
          </ul>
          <div className="p-4 flex justify-center items-center">
              { active === 'detail' && 
                  <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis architecto, inventore nesciunt ea illum eligendi nam dolores rem maiores quasi eos pariatur dolorum neque doloribus laboriosam delectus tempore aperiam adipisci.
                  Qui voluptatem magni quibusdam ipsum! Sint perferendis ipsum, voluptates beatae cdivpa aut laboriosam reprehenderit consequuntur, nihil facere enim sed ipsa nostrum dignissimos, voluptatem illo cupiditate? Similique aliquam corrupti ex repudiandae.
                  Dolorum explicabo, magni quia dignissimos excepturi delectus architecto unde sed velit laudantium suscipit, adipisci iste corporis distinctio nulla minus neque cum sequi! Autem temporibus cum totam quia quibusdam odit at!
                  Iusto earum praesentium consequatur illo velit cum est quidem, eveniet, odio possimus quos repellendus iure quaerat sint magni error cupiditate nesciunt expedita alias eum asperiores et perspiciatis impedit? Recusandae, praesentium.
                  Corporis repellendus ad fuga fugiat ipsam. Quam distinctio perspiciatis voluptate aspernatur, tempore reprehenderit! Necessitatibus culpa fuga nemo natus iusto officia, obcaecati, aliquid, facere numquam similique aperiam. Commodi inventore ullam sapiente.</p>
              }
              {active === 'image' && 
                  <img src={product.image} alt="" className='size-[33rem]' />
              }
          </div>
        </div>
        <Feature />
        <Footer />
    </div>
  )
}

export default ProductDetail;
