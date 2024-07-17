export default async (req, res) => {
    if (req.method === 'POST') {
        // Giả sử xóa dữ liệu từ cơ sở dữ liệu hoặc dịch vụ lưu trữ
        res.status(200).json({ message: 'Data cleared successfully' });
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
};
