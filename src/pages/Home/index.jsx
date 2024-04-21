import {
    SectionFour,
    SectionOne,
    SectionThree,
    SectionTwo,
    Spacer,
} from '../../components';

const index = () => {
    return (
        <div className="mt-10 home">
            <SectionOne />
            <Spacer />

            <SectionTwo />
            <Spacer />

            <SectionThree title={'Bổ sung Protein'} />
            <Spacer />

            <SectionThree title={'Pre-workout'} />
            <Spacer />

            <SectionFour />
            <Spacer />
        </div>
    );
};

export default index;
