
import Top from './../components/widget/cards/top';
import Map from './../components/widget/map/map';
const Home = () => {
    return (
        <section className=" flex h-screen ">
            <div className="bg-gray-100 w-full h-auto">

            <Top/>
            </div>
            <div className="bg-white w-[350px] hidden lg:flex">
                {/* Content can be added here */}
              <Map/>
            </div>  
        </section>
    );
};
export default Home;