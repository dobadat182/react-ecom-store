import styled from 'styled-components';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';

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
                                TOP SUMMER CYCLING PICKS.
                            </h2>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-8 basis-2/3">
                        <div className="h-full rounded-2xl bg-slate-50"></div>
                        <div className="h-full rounded-2xl bg-slate-50"></div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default CollectionBySeason;
