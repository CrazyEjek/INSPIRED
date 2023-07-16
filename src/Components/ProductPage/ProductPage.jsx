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
import { ProductSize } from './ProductSize/ProductSize.jsx';
import { Goods } from '../Goods/Goods.jsx'
import { fetchCategory } from '../../features/goodsSlice.js';

export const ProductPage = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const {product} = useSelector(state => state.product);

    const {gender, category} = product;
    const [count, setCount] = useState(1);
    const [selectedSize, setSelectedSize] = useState('');


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
    };

    // функция выбора размера товара
    const handleSizeChange = (e) => {
        setSelectedSize(e.target.value);
    }

    // получение айдишника товара
    useEffect (() => {
        dispatch(fetchProduct(id));
    }, [id, dispatch]);

    // в категории вам может понравится сортировка по полу или категории, 4 товара в линию и исключение повтора товара
    
    useEffect (() => {
        dispatch(fetchCategory({gender, category, count:4, top: true, exclude: id }));
    }, [gender, category, id, dispatch])     
     
    return (
       <>
       <section className={s.card}>
            <Container className={s.container}>
                <img className={s.image} 
                src={`${API_URL}/${product?.pic}`} 
                alt={`${product.title} ${product.description}`} />
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

                            <div className={s.description}>
                                <p className={cn(s.subtitle, s.descriptionTitle)}>Описание</p>
                                <p className={s.descriptionText}>{product.description}</p>
                            </div>

                                    <ProductSize
                                    size={product.size}
                                    selectedSize={selectedSize}
                                    handleSizeChange={handleSizeChange}
                                    />


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
            <Goods title='Вам также может понравиться'/>
       </>
    );
};

