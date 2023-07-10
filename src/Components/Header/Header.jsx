import { Top } from './Top/Top.jsx';
import { Navigation } from './Navigation/Navigation.jsx';
import s from '../Header/Header.module.scss'

export const Header = () => (
    <header className={s.header}>
        <Top />
        <Navigation />
    </header>
)
