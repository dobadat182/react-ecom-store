import styled from 'styled-components';

const Section = styled.section``;

const index = () => {
    return (
        <Section>
            <div className="container">
                <div className="grid grid-cols-3 gap-5">
                    <div className="flex items-center justify-center rounded-2xl bg-slate-50 h-52">
                        PRODUCT 1
                    </div>
                    <div className="flex items-center justify-center rounded-2xl bg-slate-50 h-52">
                        PRODUCT 2
                    </div>
                    <div className="flex items-center justify-center rounded-2xl bg-slate-50 h-52">
                        PRODUCT 3
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default index;
