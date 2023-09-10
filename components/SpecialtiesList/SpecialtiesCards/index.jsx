import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import styles from './styles.module.css';

const SpecialtiesCards = ({
	SpecialtyIcon,
	iconColor = 'black',
	title,
	description,
}) => {
	const [shouldShowLink, setShouldShowLink] = useState(false);

	const handleShouldShowLink = value => {
		setShouldShowLink(value);
	};

	return (
		<div
			className={styles.specialty_container}
			onMouseEnter={() => handleShouldShowLink(true)}
			onMouseLeave={() => handleShouldShowLink(false)}
		>
			<SpecialtyIcon
				className={styles.specialty_icon}
				style={{ color: iconColor }}
			/>

			<Typography
				variant="h6"
				component="h6"
				className={styles.specialty_title}
			>
				{title}
			</Typography>

			<Typography
				variant="body1"
				component="p"
				className={styles.specialty_description}
			>
				{description}
			</Typography>

			{shouldShowLink && (
				<Box className={styles.specialty_link_container}>
					<Typography
						variant="button"
						component="p"
						className={styles.specialty_link}
					>
						Saber más
					</Typography>
				</Box>
			)}
		</div>
	);
};

export default SpecialtiesCards;