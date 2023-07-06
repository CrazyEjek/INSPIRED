import s from '../Footer.module.scss';

export const Development = () => (
    <div className={s.development}>
    <ul className={s.developmentList}>
        <li className={s.developmentItem}>
            Designer:
            <a className={s.link} href="https://t.me/Mrshmallowww"> Anastasia Ilina</a>
        </li>
        <li className={s.developmentItem}>
            Developer:
            <a className={s.link} href="https://vk.com/myejek"> Egor Bondarenko</a>
        </li>
    </ul>
</div>
                )