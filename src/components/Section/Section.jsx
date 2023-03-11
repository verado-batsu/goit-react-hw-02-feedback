import { SectionBox } from 'components/Section/Section.styled';

function Section({ title, children }) {
	return (
		<SectionBox>
			<h2>{title}</h2>
			{children}
		</SectionBox>
	)
}

export { Section };