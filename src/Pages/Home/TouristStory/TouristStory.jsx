import React from 'react';
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';
import StoryCard from '../../../Components/StoryCard/StoryCard';
import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import useAxios from '../../../Hooks/useAxios';

const TouristStory = () => {
    const {axiosPublic} = useAxios()
    const {data : stories} = useQuery({
        queryKey : ["stories"],
        queryFn : async ()=> {
            const res = await axiosPublic.get("/stories/last");
            return res.data
        }
    })
    return (
        <div>
            <SectionTitle title="Tourist Stories"/>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 my-8'>
                {
                    stories?.map(story => <StoryCard key={story._id} story={story}/> )
                }
                
            </div>
            <Link to="all-stories" className="text-center block mt-5">
                <Button size='small' color='pink' variant='gradient' className=''> See All story</Button>
            </Link>
        </div>
    );
};

export default TouristStory;