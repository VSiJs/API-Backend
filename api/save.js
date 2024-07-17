export default async (req, res) => {
    if (req.method === 'POST') {
        const data = req.body;
        res.status(200).json({ message: 'Data saved successfully' });
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
};
