import diagramm from '../../public/Capture.png';

const Diagramma = () => {
	return (
		<article>
			<h2>Kā šī diagramma izskatās Bloga gadījumā?</h2>
			<p>
				<a href='https://skolo.lv/mod/assign/view.php?id=79610492' target='_blank'>
					Bloga
				</a>{' '}
				darba gadjumā šī diagramma izskatās kā viena tabula, ar titulu un aprakstu, bez
				nekādām relācijām.
			</p>
			<div className='img'>
				<img src={diagramm} alt='' />
			</div>
		</article>
	);
};

export default Diagramma;
