import styles from '../../styles/pages/Support.module.css';
import {
	TableHead,
	TableRow,
	TableCell,
	Table,
	TableBody,
} from '@mui/material';

export default function CreditPage() {
	return (
		<div className={styles.container}>
			<div className={styles.title}>
				<h1>Credit</h1>
			</div>
			<div>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Content</TableCell>
							<TableCell>Website</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						<TableRow>
							<TableCell>Formula 1 Data</TableCell>
							<TableCell>
								<a href='https://www.formula1.com'>www.formula1.com</a>
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Formula 1 Description</TableCell>
							<TableCell>
								<a href='https://www.fia.com'>www.fia.com</a>
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Formula 1 Game's Details</TableCell>
							<TableCell>
								<a href='https://www.codemasters.com'>www.codemasters.com</a>
							</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</div>
		</div>
	);
}
