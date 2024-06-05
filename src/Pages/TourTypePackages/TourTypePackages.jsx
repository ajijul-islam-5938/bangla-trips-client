
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import { useLoaderData } from 'react-router-dom';
import PackageCard from '../../Components/PackageCard/PackageCard';

const TourTypePackages = () => {
    const packages = useLoaderData()
    console.log(packages);
    return (
        <div className='my-28'>
            <SectionTitle title={" Type Based Packages"}/>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    packages?.map(item => <PackageCard key={item._id} item={item}/>)
                }
            </div>
        </div>
    );
};

export default TourTypePackages;