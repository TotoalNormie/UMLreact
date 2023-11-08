function Uzdevums() {
	return (
		<>
			<article>
				<h2>Uzdevums</h2>
                <p>Dodies uz <a href="draw.io">draw.io</a> un izveido šādu ER Diagramu:</p>
                <p>Klienti (tabula 1)</p>

                <strong>Klienta_ID (Primārais atslēgas lauks)</strong>
                <ul>
                <li>Vārds (teksts)</li>
                <li>Uzvārds (teksts)</li>
                <li>E-pasts (teksts)</li>
                <li>Telefona numurs (teksts)</li>
                <li>Pasūtījumi (tabula 2)</li>
                </ul>

                <strong>Pasūtījuma_ID (Primārais atslēgas lauks)</strong>
                <ul>
                <li>Pasūtījuma datums (datums)</li>
                <li>Pasūtījuma summa (decimālskaitlis)</li>
                <li>Piegādes adrese (teksts)</li>
                </ul>

                <strong>Preces (tabula 3)</strong>
                <ul>
                <li>Preces_ID (Primārais atslēgas lauks)</li>
                <li>Preces nosaukums (teksts)</li>
                <li>Preces cena (decimālskaitlis)</li>
                <li>Pieejamie daudzumi (veselie skaitļi)</li>
                </ul>
			</article>
		</>
	);
}

export default Uzdevums;
