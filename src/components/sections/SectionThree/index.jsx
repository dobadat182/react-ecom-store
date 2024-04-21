import { ArrowRight } from 'lucide-react';
import { ProductCard } from '../..';
import { Splide, SplideSlide } from '@splidejs/react-splide';

const index = (props) => {
    const { title } = props;

    console.log(props);
    return (
        <section>
            <div className="container">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-3xl font-semibold uppercase">
                        {title || 'Title Section'}
                    </h2>
                    <a className="flex items-center" href="/tat-ca">
                        <span>Xem thêm</span>
                        <ArrowRight className="inline-block w-4 ml-2" />
                    </a>
                </div>

                <div className="">
                    <Splide
                        options={{
                            rewind: true,
                            perPage: 4,
                            gap: 24,
                            autoplay: true,
                            arrows: false,
                            pagination: false,
                        }}
                        aria-label="My Favorite Images"
                    >
                        {[...Array(8)].map((x, i) => (
                            <SplideSlide key={i}>
                                <ProductCard />
                            </SplideSlide>
                        ))}
                    </Splide>
                </div>
            </div>
        </section>
    );
};

export default index;
