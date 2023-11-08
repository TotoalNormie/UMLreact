import diagram from '../../public/Diagram.png';

function Stuktura() {
	return (
		<>
			<article>
				<h2>Kas tā ir un vai tā ir struktūras vai uzvedības modeļa daļa?</h2>
				<p>
					Entity Relationship (ER) diagramma ir datu modeļa daļa, kas tiek izmantota, lai
					attēlotu datu struktūru un attiecības starp dažādām datu vienībām sistēmā vai
					datubāzē. Tas ir viens no visbiežāk izmantotajiem rīkiem datubāzu projektēšanai
					un plānošanai, jo tas palīdz skaidri parādīt, kā dati ir saistīti un organizēti.
					ER diagramma var ietvert dažādas komponentes, kas attēlo datu struktūru un
					uzvedību.
				</p>
				<div className='img'>
					<img src={diagram} alt='Diagramma' />
				</div>
			</article>
		</>
	);
}

export default Stuktura;
