import styles from '../styles/components.module.css';
import Link from 'next/link';
import React, { useState } from 'react';

export default function Content({ children, components }) {
	const [page, setPage] = useState(0);
	return (
		<div className={styles.content}>
			<div className={styles.contentSideBar}>
				{components.map((page) => {
					return (
						<div className={styles.customButton}>
							<Link href={''}>
								<a
									className={styles.customButtonText}
									onClick={() => setPage(components.indexOf(page))}>
									{page}
								</a>
							</Link>
						</div>
					);
				})}
			</div>
			<div className={styles.contentMain}>{children[page]}</div>
		</div>
	);
}
