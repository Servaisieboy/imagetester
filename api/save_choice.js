const fs = require('fs');
const path = require('path');

export default function handler(req, res) {
    if (req.method === 'POST') {
        const filePath = path.join(process.cwd(), 'data', 'choices.json');
        const data = req.body;

        // Zorg dat de data-map bestaat
        if (!fs.existsSync(path.dirname(filePath))) {
            fs.mkdirSync(path.dirname(filePath), { recursive: true });
        }

        // Sla de keuze op in een JSON-bestand
        fs.appendFileSync(filePath, JSON.stringify(data) + '\n');
        res.status(200).json({ message: 'Keuze opgeslagen' });
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}