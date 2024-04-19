import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
const Section = styled.section`
    .splide__slide {
        height: 500px;
    }
`;

function index() {
    return (
        <Section>
            <div className="container flex">
                <div className="basis-2/3">
                    <Splide aria-label="My Favorite Images">
                        <SplideSlide>
                            <div className="flex items-center justify-center h-full">
                                <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                                    BANNER ONE
                                </h2>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className="flex items-center justify-center h-full">
                                <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                                    BANNER TWO
                                </h2>
                            </div>
                        </SplideSlide>
                    </Splide>
                </div>

                <div className="grid-cols-1 basis-1/3">
                    <div>BANNER SIDE ONE</div>
                    <div>BANNER SIDE TWO</div>
                </div>
            </div>
        </Section>
    );
}

export default index;
