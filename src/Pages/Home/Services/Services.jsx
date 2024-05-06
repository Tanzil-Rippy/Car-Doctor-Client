import { useState } from "react";
import ServicesCard from "./ServicesCard";


const Services = () => {
    const [services, setservices] = useState([]);

    useState(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data=>setservices(data))
    },[])
    return (
        <div className="mt-4">
            <div className="text-center">
                <h3 className="text-2xl text-orange-600 font-bold">Services</h3>
                <h3 className="text-5xl font-bold">Our Services Area</h3>
                <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit.consectetur adipisicing elit. <br /> Nesciunt enim deleniti dolores quibusdam</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {
                    services.map(service => <ServicesCard key={service._id} service={service}></ServicesCard> )
                }
            </div>
        </div>
    );
};

export default Services;