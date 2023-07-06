import s from './Footer.module.scss';
import { Container } from '../Layout/Container/Container.jsx';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import { Development } from './Development/Development';
import { Copyright } from './Copyright/Copyright';
import { Contacts } from './Contacts/Contacts';
import { Social } from './Social/Social';


export const Footer = ({list}) => (
<footer>
    <Container>
        <div className={s.container}>
            <div className={s.category}>
                <h2 className={cn(s.title, s.categoryTitle)}>Каталог</h2>
                <ul className={s.categoryList}>
                   {list.map((item) => (
                     <li key={item.link} className={s.categoryItem}>
                    <h3 className={s.categorySubtitle}>
                        <NavLink to={item.link} className={s.link}>{item.title}</NavLink>
                    </h3>
                    <ul className={s.categorySublist}>
                        {item.categories.map(category =>(
                            <li key={category.link}>
                                <NavLink 
                                className={s.link}
                                to={`${item.link}/${category.link}`}
                                >
                                  {category.title}  
                                </NavLink>
                            </li>
                        ))}

                    </ul>
                 </li>
                   ))}
                </ul>
            
            
            </div>     
        <Social />
        <Contacts />
        <Copyright />
        <Development />
        </div>
    </Container>
</footer>
);