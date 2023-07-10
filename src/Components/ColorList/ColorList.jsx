import { useSelector } from 'react-redux';
import { Color } from './Color/Color.jsx';
import s from './ColorList.module.scss';

export const ColorList = ({colors}) => {
        const {colorList} = useSelector(state => state.color);
    
        return (
        <ul className={s.colorList}>
            {colors.map((id, i) => {
                const color = colorList.find(color => color.id === id);
                return <Color key={id} color={color?.code} check={!i} />
            })}
        </ul>
    )
}