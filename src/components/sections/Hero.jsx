import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';

const Section = styled.section`
    .splide__slide {
        height: 50vh;
        border-radius: 16px;
    }
`;

function Hero({ data }) {
    console.log(data);
    return (
        <Section>
            <div className="container flex gap-5">
                <div className="w-full">
                    <Splide aria-label="">
                        {data.map((element, index) => (
                            <SplideSlide
                                key={index} // Đảm bảo rằng mỗi phần tử có một key duy nhất
                                className="overflow-hidden rounded-2xl"
                            >
                                <div className="relative h-full">
                                    <img
                                        className=""
                                        src={element.urls.full}
                                        alt=""
                                    />
                                    <div className="absolute bottom-0 left-0 p-8">
                                        <h2 className="text-2xl font-bold leading-7 text-gray-100 sm:truncate sm:text-3xl sm:tracking-tight">
                                            {element.alt_description ||
                                                `BANNER ${index + 1}`}
                                        </h2>
                                    </div>
                                </div>
                            </SplideSlide>
                        ))}
                    </Splide>
                </div>
            </div>
        </Section>
    );
}

export default Hero;
