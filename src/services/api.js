// services/api.js
import axios from 'axios';

// Tạo một instance của axios với cấu hình cơ bản
const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    timeout: 5000, // Thời gian chờ 5 giây
    headers: {
        'Content-Type': 'application/json',
    },
});
export const apiInstance2 = axios.create({
    baseURL: 'https://another-api.com',
    timeout: 7000,
    headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer YOUR_TOKEN', // Thêm token hoặc tiêu đề khác nếu cần
    },
});

// Hàm để lấy sản phẩm theo danh mục
export const getProductsByCategory = async (category) => {
    try {
        const response = await axiosInstance.get(
            `/products/category/${category}`
        );
        return response.data.products;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Ném lỗi để xử lý ở nơi gọi hàm
    }
};

export const getBanners = async () => {
    try {
        const response = await axios.get(
            'https://api.unsplash.com/photos?client_id=2sNq2iBNDsC3v0avzVqAVxDFfsul-pPg0ohiHDuPcsY&per_page=4'
        );

        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};
