import axios from 'axios';

// Tạo Axios instance với cấu hình cơ bản
const api = axios.create({
    baseURL: 'https://dummyjson.com/', // URL cơ sở cho tất cả các yêu cầu
    timeout: 10000, // Thời gian chờ tối đa cho mỗi yêu cầu là 10 giây
    headers: {
        'Content-Type': 'application/json',
        // Các header tùy chỉnh khác nếu cần
    },
});

// Thêm Interceptor để xử lý yêu cầu trước khi gửi và phản hồi sau khi nhận
api.interceptors.request.use(
    (config) => {
        // Thêm logic xử lý trước khi gửi yêu cầu
        console.log('Request Config:', config);
        return config;
    },
    (error) => {
        // Xử lý lỗi khi gửi yêu cầu
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => {
        // Xử lý phản hồi thành công
        console.log('Response:', response);
        return response;
    },
    (error) => {
        // Xử lý lỗi khi nhận phản hồi
        console.error('Response Error:', error);
        return Promise.reject(error);
    }
);

export default api;
