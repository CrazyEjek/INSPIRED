 {/* Home work todo */}
 <ProductSize size={product.size}>
 <form action=""></form>
</ProductSize>

import s from './ProductSize.module.scss';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from '../Layout/Container/Container.jsx';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProduct } from '../../features/productSlice.js';
import { API_URL } from '../../features/const.js';
import {ColorList} from '../ColorList/ColorList.jsx';

export const ProductSize = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const {product} = useSelector(state => state.product);

    // функция выбора цвета товара
    const [selectedColor, setSelectedColor] = useState('');
    const handleColorChange = e => {
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
                   
                </form>
            </Container>
       </section>
    )
};


