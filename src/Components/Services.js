import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchRequest } from '../redux/action';


const Services = () => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.services);
    const loading = useSelector(state => state.loading);
    const error = useSelector(state => state.error);

    useEffect(() => {
        dispatch(fetchRequest());
    }, [dispatch]);

    if (loading) {
        return <div>Redirecting to the services page</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
      
        <div className=' m-5 '>
        
       
            <h1 className='text-3xl'>Services</h1>
            <p className='text-7xl'>At <span className='text-blue-500'>NAXA</span>, we work on <span className='text-blue-500'>ideas</span>; ideas <br/>that can provide simple solutions to <br/><span className='text-blue-500'>complex problems.</span></p>

           <p className='pt-5 text-text-2xl font-bold'> We work as a team to generate, explore, build and validate ideas. We also <br/>contextualize innovations around the world to find the best fitting solutions <br/>to local problems.</p>

            <div className='flex gap-4 pt-5'>
           {
            items.map((service,id)=>{
                return(
                    <div className='hover:cursor-pointer border border-blue-500'>
                    
                    {service.title}
                    </div>
                   
                    
                )
            })
           }
            </div>
            
           
            <ul className='pt-20 grid gap-10 '>
                {items.map(service => (
                    <div className='bg-blue-100 hover:cursor-pointer'>
                    <li key={service.id} className="">
                    <li className='text-5xl '> {service.title}</li>
                    <div className='flex'>
                    <p className='pt-5'> {service.description1}
                     {service.description2}</p>
                        <img className="h-[200px]" src={service.photo} alt={service.title} />
                        </div>
                    </li>
                    </div>
                ))}
            </ul>
            
        </div>
    );
};

export default Services;
