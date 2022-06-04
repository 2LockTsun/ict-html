import styles from '../styles/components.module.css';
import React, {useState} from 'react';

export default function Content({children, components}) {
    const [ page, setPage ] = useState(0)
    return(
        <div className={styles.content}>
            <div className={styles.contentSideBar}>
                { components.map( page => { return ( <div className={styles.customButton}><a className={styles.customButtonText} onClick={() => setPage(components.indexOf(page))}>{page}</a></div> ) } ) }
            </div>
            <div className={styles.contentMain}>
                {children[page]}
            </div>
        </div>
    )
}