export default async (req, res) => {
    if (req.method === 'GET') {
        const data = {
            selects: [],
            textareas: []
        };
        res.status(200).json(data);
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
};
