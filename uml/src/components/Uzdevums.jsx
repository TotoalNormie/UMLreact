function Uzdevums() {
	return (
		<>
			<article>
				<h2>Uzdevums</h2>
				<p>
					Dodies uz <a href='draw.io'>draw.io</a> un izveido šādu ER Diagramu:
				</p>
				<div className='wrapper'>
					<ul>
						<strong>Klienti (tabula 1)</strong>
						<li>Klienta_ID (Primārais atslēgas lauks)</li>
						<li>Vārds (teksts)</li>
						<li>Uzvārds (teksts)</li>
						<li>E-pasts (teksts)</li>
						<li>Telefona numurs (teksts)</li>
						<li>Pasūtījumi (tabula 2)</li>
					</ul>

					<ul>
						<strong>Pasūtījuma_ID (Primārais atslēgas lauks)</strong>
						<li>Pasūtījuma datums (datums)</li>
						<li>Pasūtījuma summa (decimālskaitlis)</li>
						<li>Piegādes adrese (teksts)</li>
					</ul>

					<ul>
						<strong>Preces (tabula 3)</strong>
						<li>Preces_ID (Primārais atslēgas lauks)</li>
						<li>Preces nosaukums (teksts)</li>
						<li>Preces cena (decimālskaitlis)</li>
						<li>Pieejamie daudzumi (veselie skaitļi)</li>
					</ul>
				</div>
			</article>
		</>
	);
}

export default Uzdevums;
