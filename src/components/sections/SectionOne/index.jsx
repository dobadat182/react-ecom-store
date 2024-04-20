import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';

const Section = styled.section`
    .splide__slide {
        height: 50vh;
        border-radius: 16px;
    }
`;

function index() {
    return (
        <Section>
            <div className="container flex gap-5">
                <div className="basis-2/3">
                    <Splide aria-label="My Favorite Images">
                        <SplideSlide className={'bg-slate-50'}>
                            <div className="flex items-center justify-center h-full">
                                <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                                    BANNER ONE
                                </h2>
                            </div>
                        </SplideSlide>
                        <SplideSlide className={'bg-slate-50'}>
                            <div className="flex items-center justify-center h-full">
                                <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                                    BANNER TWO
                                </h2>
                            </div>
                        </SplideSlide>
                    </Splide>
                </div>

                <div className="flex flex-col gap-5 basis-1/3">
                    <div className="flex items-center justify-center h-1/2 bg-slate-50 rounded-2xl">
                        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                            BANNER SIDE ONE
                        </h2>
                    </div>
                    <div className="flex items-center justify-center h-1/2 bg-slate-50 rounded-2xl">
                        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                            BANNER SIDE TWO
                        </h2>
                    </div>
                </div>
            </div>
        </Section>
    );
}

export default index;
