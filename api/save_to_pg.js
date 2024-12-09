import { Client } from 'pg';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { choice } = req.body;

        // Maak een nieuwe client met de PostgreSQL URL uit omgevingsvariabelen
        const client = new Client({
            connectionString: process.env.DATABASE_URL,
            ssl: {
                rejectUnauthorized: false
            }
        });

        try {
            await client.connect();
            const query = 'INSERT INTO choices (choice) VALUES ($1)';
            await client.query(query, [choice]);

            res.status(200).json({ message: 'Keuze succesvol opgeslagen' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Fout bij het opslaan van de keuze', error: error.message });
        } finally {
            await client.end();
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}