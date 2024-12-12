
import Top from './../components/widget/cards/top';
import Map from './../components/widget/map/map';
import Render from './../components/widget/graphs/render';
const Home = () => {
    return (
        <section className=" flex h-screen bg-gray-100  ">
            <div className="w-full h-auto">
                <Top />
                <Render/>
            </div>
            <div className="border border-l-gray-200  w-[350px] hidden lg:grid">
                {/* Content can be added here */}
              <Map/>
            </div>  
        </section>
    );
};
export default Home;