import s from './Footer.module.scss';
import { Container } from '../Layout/Container/Container.jsx';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import { Development } from './Development/Development';
import { Copyright } from './Copyright/Copyright';
import { Contacts } from './Contacts/Contacts';
import { Social } from './Social/Social';
import { useSelector } from 'react-redux';


export const Footer = () => {
    const {genderList, categories} = useSelector(state => state.navigation);
            console.log('genderList', genderList);
            console.log('categories', categories);
    
    return (
<footer>
    <Container>
        <div className={s.container}>
            <div className={s.category}>
                <h2 className={cn(s.title, s.categoryTitle)}>Каталог</h2>
                
                <ul className={s.categoryList}>
                   {genderList.map((gender) => (
                     <li key={gender} className={s.categoryItem}>
                    <h3 className={s.categorySubtitle}>
                        <NavLink to={`/catalog/${gender}`} className={s.link}>
                            {categories[gender].title}
                            </NavLink>
                    </h3>
                    <ul className={s.categorySublist}>
                        {categories[gender].list.map((category) =>(
                            <li key={category.slug}>
                                <NavLink 
                                className={s.link}
                                to={`/catalog/${gender}/${category.slug}`}
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
)};