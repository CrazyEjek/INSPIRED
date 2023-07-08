
import { Category } from './Category/Category.jsx';
import { Container } from '../../Layout/Container/Container.jsx';
import { Gender } from './Gender/Gender.jsx';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setActiveGender } from '../../../features/navigationSlice.js';
import { useEffect } from 'react';



export  const Navigation = () => {
        const dispatch = useDispatch();
        const location = useLocation();
        const gender = location.pathname.split('/')[1] || 'women';
      
    useEffect(() => {
        dispatch(setActiveGender(gender));
    }, [gender, dispatch]);
    return (
    <nav>
        <Container>
            <Gender />
            <Category />
        </Container>
    </nav>
)};