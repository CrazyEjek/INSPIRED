import { Container } from '../../Layout/Container/Container.jsx'
import s from './Top.module.scss';
import cn from 'classnames';
import logo from './logo.svg';
import { NavLink } from 'react-router-dom';
import { ReactComponent as LikeSVG } from '../../../assets/heart.svg';
import { ReactComponent as SearchSVG } from '../../../assets/search.svg';
import { ReactComponent as CartSVG } from '../../../assets/cart.svg';

export const Top = () => (
    <div className={s.top}>
        <Container className={s.container}>
            <a className={cn(s.link, s.phone)} href="tel:89304902620">8 930 490 26 20</a>
            
            <NavLink className= {s.logo} to="/">
            <img src={logo} alt="Логотип магазина Inspired"/>
            </NavLink>

            <div className={s.navigation}>
                <ul className={s.navList}>
                    <li className={s.navItem}>
                        <button className={s.link}>
                        < SearchSVG/>
                        </button>
                    </li>

                    <li className={s.navItem}> 
                    <NavLink to='/cart' className={s.link}>
                    < CartSVG/>
                    </NavLink>
                    </li>

                    <li className={s.navItem}> 
                    <NavLink to='/favorite' className={s.link, s.like}>
                        < LikeSVG/>
                    </NavLink >
                    </li>
                </ul>
            </div>
       </Container>
    </div>
)