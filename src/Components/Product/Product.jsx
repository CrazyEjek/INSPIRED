import { API_URL } from '../../features/const';
import { ReactComponent as Like } from '../../assets/heart.svg';
import { NavLink } from 'react-router-dom';
import { ColorList } from '../ColorList/ColorList.jsx';
import s from './Product.module.scss';

export const Product = ({id, pic, title, price, colors}) => (
         <article  className={s.product}>
            <NavLink href={`product/${id}`} className={s.link}>
            <img className={s.img} src={`${API_URL}/${pic}`}/>
            <h3 className={s.title}>{title}</h3>
            </NavLink>

            <div className={s.row}>
                <p className={s.price}>{price} руб</p>
                <button className={s.favorite}>
                    <Like />
                </button>
            </div>
            <ColorList colors={colors} />
         </article>
    )