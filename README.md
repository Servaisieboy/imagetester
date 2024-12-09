# AB Test Tool

Deze repository bevat een eenvoudige AB-test tool om afbeeldingen te vergelijken. De tool maakt gebruik van HTML, CSS, en JavaScript en is geschikt voor hosting op Vercel.

## Functies

- Toon meerdere afbeeldingen voor AB-testen.
- Sla de gemaakte keuze op via een API-endpoint.
- Redirect naar een bedankt-pagina na selectie.

## Deployen op Vercel

1. **Fork of clone deze repository.**
2. **Upload naar GitHub.**
3. **Koppel de repository aan je Vercel account.**
4. **Deploy de site via Vercel.**

De keuzes worden opgeslagen in `data/choices.json`.

## Bestanden

- **index.html** - Hoofdpagina met de afbeeldingen.
- **styles.css** - Stijling voor de tool.
- **script.js** - JavaScript om interacties af te handelen.
- **thanks.html** - Bedankt-pagina na een keuze.
- **api/save_choice.js** - API-endpoint voor het opslaan van de keuze.
- **vercel.json** - Configuratiebestand voor Vercel.
