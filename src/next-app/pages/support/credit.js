import styles from '../../styles/pages/Support.module.css';
import { TableHead, TableRow, TableCell } from '@mui/material';

export default function CreditPage() {
	return (
		<div className={styles.container}>
			<div className={styles.title}>
				<h1>Credit</h1>
			</div>
			<div>
				<TableHead>
					<TableRow>
						<TableCell>UI Icon</TableCell>
						<TableCell>
							<a href='https://www.formula1.com'>formula1.com</a>
						</TableCell>
					</TableRow>
				</TableHead>
			</div>
		</div>
	);
}
