export default async (req, res) => {
    if (req.method === 'POST') {
        const data = req.body;
        // Lưu data vào cơ sở dữ liệu hoặc dịch vụ lưu trữ
        // Ví dụ sử dụng Firebase Firestore hoặc MongoDB

        res.status(200).json({ message: 'Data saved successfully' });
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
};
