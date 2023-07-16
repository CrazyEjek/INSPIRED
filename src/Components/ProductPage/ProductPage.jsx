import s from './ProductPage.module.scss';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from '../Layout/Container/Container.jsx';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProduct } from '../../features/productSlice.js';
import { API_URL } from '../../features/const.js';
import {ColorList} from '../ColorList/ColorList.jsx';
import { ReactComponent as Like}  from '../../assets/heart.svg';
import { Count } from '../Count/Count.jsx';

export const ProductPage = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const {product} = useSelector(state => state.product);
    const [count, setCount] = useState(1);

    const handleIncrement = () => {
            setCount((prevCount) => prevCount +1)
    };

    const handleDecrement = () => {
        if (count <1 ) {
            setCount((prevCount) =>  prevCount -1)
        }
    };

    // функция выбора цвета товара
    const [selectedColor, setSelectedColor] = useState('');
    const handleColorChange = (e) => {
        setSelectedColor(e.target.value);
    }

    // получение айдишника товара
    useEffect (() => {
        dispatch(fetchProduct(id));
    }, [id, dispatch]);
     
    return (
       <section className={s.card}>
           {/* тут надо посмотреть внимательней, ссылка на картинку!!!! */}
            <Container className={s.container}>
                <img src={`${API_URL}/${product?.pic}`} alt={`${product.title} ${product.description}`} />
                <form className={s.content}>
                    <h2 className={s.title}>{product.title}</h2>
                    <p className={s.price}>{product.price} руб</p>

                    <div className={s.vendorCode}>
                        <span className={s.subtitle}>Артикл</span>
                        <span className={s.id}>{product.id}</span>
                    </div>

                    <div className={s.color}>
                        <p className={cn(s.subtitle, s.colorTitle)}>Цвет</p>
                       <ColorList colors={product.colors}
                       selectedColor={selectedColor}
                       handleColorChange={handleColorChange}
                       />
                    </div>


                                  {/* Home work todo
                            <ProductSize size={product.size}>
                            <form action=""></form>
                            </ProductSize> */}

                            <div className={s.description}>
                                <p className={cn(s.subtitle, s.descriptionTitle)}>Описание</p>
                                <p className={s.descriptionText}>{product.description}</p>
                            </div>

                                <div className={s.control}>
                                    <Count
                                    className={s.count}
                                    count={count}
                                    handleIncrement={handleIncrement}
                                    handleDecrement={handleDecrement}
                                    />
                               
                                <button className={s.addCart}>В корзину</button>
                                <button className={s.favorite} aria-label='Добавить в избранное' type='button'></button>
                                    <Like />
                            </div>
                   
                </form>
            </Container>
       </section>
    )
};

