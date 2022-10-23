import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'
import { CartContext } from '../../context/CartContext';
import { useContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const ItemDetail = ({product}) => {

    const notify = (quantity) => toast(`Se agregó ${quantity} ${product.title} al carrito!`, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });

    const {addToCart} = useContext(CartContext);

    const onAdd = (value) => {
        addToCart(value, product)
        notify(value)
    }

    const navigate = useNavigate();
    const goToCart = () => {
        navigate('/cart');
        window.scroll(0,0);
    }

    //recibo valor del estado count de itemCount
    const countValue = (count) => {
        setProductUnits(count < product.stock ? count + 1 : product.stock)
    } 

    const [productUnits, setProductUnits] = useState(1)

  return (
      <>
          <article className='cardDetail container bg-white p-3 rounded-2'>
                <div className='topSide'>
                    <div className="leftSide">
                        <div className="contImgID">
                            <img className="imgID" src={product.image} alt={product.title} />
                        </div>
                    </div>
                    <div className="rightSide">
                        <h2 className='productNameID' >{product.title}</h2>
                        <span className='priceID' >${product.price}</span>
                       
                        <hr />
                        <div className='payWith'>
                            <span className='messageID' >Medios de pago</span>
                            <div className='contIconsID'>
                                <img className='mercadoPagoIcon' src="https://res.cloudinary.com/dotaebdx8/image/upload/v1664993603/ecommerceReact/mercado-pago_hn3hsl.webp" alt="mercado-pago-icon" />
                                <img className='visaIcon' src="https://res.cloudinary.com/dotaebdx8/image/upload/v1664993671/ecommerceReact/visa_jlvgvq.webp" alt="visa-icon" />
                                <img className='naranjaIcon' src="https://res.cloudinary.com/dotaebdx8/image/upload/v1664993649/ecommerceReact/naranja_ira7vs.svg" alt="naranja-icon" />
                                <img className='americanExpressIcon' src="https://res.cloudinary.com/dotaebdx8/image/upload/v1664993525/ecommerceReact/american-express_vuas8z.png" alt="american-express-icon" />
                                <img className='brubankIcon' src="https://res.cloudinary.com/dotaebdx8/image/upload/v1664993534/ecommerceReact/brubank_x24iod.png" alt="brubank-icon" />
                                <img className='mastercardIconn' src="https://res.cloudinary.com/dotaebdx8/image/upload/v1664993585/ecommerceReact/mastercard_osyyn7.png" alt="mastercard-icon" />
                            </div>
                        </div>
                        <hr />
                        <span className='my-3 d-block fw-bold'>Stock disponible: {product.stock}</span>
                        <span className='my-3 d-block fw-bold'>Subtotal: ${productUnits * product.price}</span>
                        <ItemCount func={onAdd} func2={countValue} initial={1} stock={product.stock} />
                        <button className='btn btn-dark btnBuyID w-50 mx-5'>Comprar</button>
                    </div>
                </div>
                <hr />
                <div className="bottomSide">
                    <h5>Descrición</h5>
                    <span className='descriptID'>{product.description}</span>
                </div>
          </article>
          <ToastContainer onClick={goToCart} style={{"zIndex": 4545545}} />
      </>
  )
}

export default ItemDetail;