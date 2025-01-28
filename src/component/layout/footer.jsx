import * as Fa from "react-icons/fa"; 

function Footer() {
  return (
    <div className='flex flex-col items-center w-full bg-blue-950 p-4 h-fit gap-4'>
        <div className="">
            <h1 className="m-4 font-semibold text-4xl text-slate-300">Get Expclusive Offers on your Email</h1>
            <h4 className="text-slate-300">Subscribe to our newsletter and stay updated</h4>
            <div className="space-x-4 m-2">
                <input type="text" placeholder="Enter Your Email" className="bg-slate-text-slate-300 p-4 rounded-xl w-96 h-10 text-sm" />
                <button className="bg-sky-950 border border-white rounded-3xl w-28 h-10 text-slate-300 hover:bg-blue-950 active:scale-90">Subscribe</button>
            </div>
        </div>
        <div className="flex flex-col items-center gap-4">
            <h1 className="text-4xl font-serif text-slate-300">Shina Store</h1>
            <nav>
                <ul className="flex gap-8 text-slate-300">
                    <li>Home</li>
                    <li>Products</li>
                    <li>Carts</li>
                    <li>Shop</li>
                </ul>
            </nav>
            <div className="flex gap-4 text-2xl text-slate-300">
                <Fa.FaTwitter />
                <Fa.FaFacebook />
                <Fa.FaWhatsapp />
                <Fa.FaInstagram />
            </div>

            <div className="w-[30rem] text-center p-2 border-t text-slate-300">
                <h2>Copyright @ 2024 - All Right Reserve</h2>
            </div>

        </div>
    </div>
  )
}

export default Footer