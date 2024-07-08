import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import styled from 'styled-components';

const Section = styled.section``;

const CollectionBySeason = () => {
    return (
        <Section>
            <div className="container">
                <div className="flex gap-8">
                    <div className="basis-1/3">
                        <div className="p-5 bg-lime-200 rounded-2xl">
                            <a className="inline-block px-4 py-2 mb-5 text-xs border rounded-full border-slate-950">
                                Category
                            </a>
                            <h2 className="text-5xl font-bold">
                                TOP SUMMER EDITOR PICKS.
                            </h2>
                        </div>
                    </div>
                    <div className="basis-2/3">
                        <Splide
                            hasTrack={false}
                            options={{
                                perPage: 2,
                                rewind: true,
                                gap: '1rem',
                                pagination: false,
                                padding: { right: 100 },
                            }}
                            className="w-full h-full"
                            aria-label="My Favorite Images"
                        >
                            <SplideTrack className="h-full">
                                <SplideSlide className="h-full">
                                    <div className="flex items-center justify-center h-full rounded-2xl bg-slate-100">
                                        Category 1
                                    </div>
                                </SplideSlide>
                                <SplideSlide>
                                    <div className="flex items-center justify-center h-full rounded-2xl bg-slate-100">
                                        Category 2
                                    </div>
                                </SplideSlide>
                                <SplideSlide>
                                    <div className="flex items-center justify-center h-full rounded-2xl bg-slate-100">
                                        Category 3
                                    </div>
                                </SplideSlide>
                            </SplideTrack>
                        </Splide>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default CollectionBySeason;
