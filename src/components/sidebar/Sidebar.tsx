import { useNavigate } from "react-router-dom";
import styles from '../styles/sidebar/sidebar.module.css';
import computerImg from '../../../public/img/computerImage.png';

const Sidebar = () => {
    return(
        <div className={styles.sidebar_box}>
            <div className={styles.sidebar_h1_box}>
                <h1 className={styles.sidebar_h1}>E-office</h1>
            </div>
            <div className={styles.sidebar_ul_box}> 
                <ul className={styles.sidebar_ul}>
                    <li className={styles.sidebar_li}><a className={styles.slider_a}>회의실 등록</a></li> 
                    <li className={styles.sidebar_li}><a className={styles.slider_a}>회의실 수정/삭제</a></li>
                    <li className={styles.sidebar_li}><a className={styles.slider_a}>회의실 예약</a></li>
                    <li className={styles.sidebar_li}><a className={styles.slider_a}>회의록 작성</a></li>
                </ul>
            </div>
            <div className={styles.sidebar_bottom_box}>
                <li className={styles.sidebar_li}><a className={styles.slider_a}>프로필 수정</a></li>
                <img src={computerImg} className={styles.sidebar_img}/>
            </div>
        </div>
    );
}

export default Sidebar;