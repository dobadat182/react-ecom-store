import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();
    const [time, setTime] = useState(0);

    useEffect(() => {
        const backToHome = setTimeout(() => {
            navigate('/');
        }, 3000);

        const countDown = setInterval(() => {
            setTime((time) => time + 1);
        }, 1000); // Tăng time mỗi giây

        // Dọn dẹp setTimeout và setInterval khi component bị unmount hoặc useEffect gọi lại
        return () => {
            clearTimeout(backToHome);
            clearInterval(countDown);
        };
    }, [navigate]);

    return (
        <div>
            <h1>Not Found</h1>
            <p>Return to home in {time} </p>
        </div>
    );
};

export default NotFound;
