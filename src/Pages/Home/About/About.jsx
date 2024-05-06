import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200 py-4">
  <div className="hero-content flex-col lg:flex-row">
    <div className='w-1/2 relative'>
    <img src={person} className='rounded-lg shadow-2xl w-3/4' />
    <img src={parts}className='rounded-lg shadow-2xl w-1/2 absolute right-8 top-1/2 border-8 border-white' />
    </div>
    <div className='w-1/2 space-y-5'>
        <h3 className='text-3xl text-orange-500 font-bold'>About us</h3>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-4">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <p className="py-4">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn text-white bg-orange-600">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default About;