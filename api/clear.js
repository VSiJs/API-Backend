export default async (req, res) => {
    if (req.method === 'POST') {
        res.status(200).json({ message: 'Data cleared successfully' });
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
};
