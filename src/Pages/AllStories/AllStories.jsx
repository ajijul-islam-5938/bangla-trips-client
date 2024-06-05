
import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import StoryCard from '../../Components/StoryCard/StoryCard';
import useAxios from '../../Hooks/useAxios';

const AllStories = () => {
    const {axiosPublic} = useAxios()
    const {data : stories} = useQuery({
        queryKey : ["stories"],
        queryFn : async ()=> {
            const res = await axiosPublic.get("/stories");
            return res.data
        }
    })
    console.log(stories);
    return (
        <div className='my-28'>
            <SectionTitle title="All Tourist Stories"/>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 my-8'>
                {
                    stories?.map(story => <StoryCard key={story._id} story={story}/> )
                }
                
            </div>
        </div>
    );
};

export default AllStories;