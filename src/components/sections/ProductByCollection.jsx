import { MoveRight } from 'lucide-react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { ProductCard } from '@/features/products';
import { Link } from 'react-router-dom';

const ProductByCollection = ({ title, data }) => {
    console.log(data);
    return (
        <section>
            <div className="container px-0">
                <div className="flex items-center justify-between px-5 mb-8">
                    <h2 className="pb-2 mt-10 text-3xl font-semibold tracking-tight transition-colors border-b scroll-m-20 first:mt-0">
                        {title || 'Title Section'}
                    </h2>

                    <Link
                        className="flex items-center transition-colors duration-150 hover:text-blue-700"
                        href="/tat-ca"
                    >
                        <span className="text-sm font-medium md:text-base ">
                            View More
                        </span>
                        <MoveRight className="inline-block ml-2" />
                    </Link>
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
                        {data?.map((product) => (
                            <SplideSlide key={product.id}>
                                <ProductCard {...product} />
                            </SplideSlide>
                        ))}
                    </Splide>
                </div>
            </div>
        </section>
    );
};

export default ProductByCollection;
