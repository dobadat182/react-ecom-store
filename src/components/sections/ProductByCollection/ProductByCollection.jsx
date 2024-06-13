import { ArrowRight } from 'lucide-react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import ProductCard from '@/components/common/ProductCard/ProductCard';

const ProductByCollection = (props) => {
    const { title } = props;

    console.log(props);
    return (
        <section>
            <div className="container px-0">
                <div className="flex items-center justify-between px-5 mb-8">
                    <h2 className="pb-2 mt-10 text-3xl font-semibold tracking-tight transition-colors border-b scroll-m-20 first:mt-0">
                        {title || 'Title Section'}
                    </h2>

                    <a className="flex items-center" href="/tat-ca">
                        <span className="text-sm md:text-base">Xem thêm</span>
                        <ArrowRight className="inline-block w-3 ml-1" />
                    </a>
                </div>

                <div className="pl-5">
                    <Splide
                        options={{
                            rewind: true,
                            perPage: 4,
                            gap: 24,
                            autoplay: true,
                            arrows: false,
                            pagination: false,

                            breakpoints: {
                                640: {
                                    perPage: 2,
                                    padding: { right: '15%' },
                                },
                            },
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

export default ProductByCollection;
