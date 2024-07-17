export default async (req, res) => {
    if (req.method === 'GET') {
        // Tải data từ cơ sở dữ liệu hoặc dịch vụ lưu trữ
        const data = {}; // Data đã được tải

        res.status(200).json(data);
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
};
