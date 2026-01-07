
import Header from "../Component/Header";
import Hero from "../Component/Hero";
import UpcomingProjects from "../Component/UpcomingProjects";
import SearchBox from "../Component/SearchBox";
import TopDevelopers from "../Component/TopDevelopers";
import FeaturedProperties from "../Component/FeaturedProperties";
import Stats from "../Component/Stats";
import WhyCountryroof from "../Component/WhyCountryroof";


const Home = () => {
 
  return (
 <div className="mb-95 ">
   <Header/>
   <Hero/>
   <SearchBox/>
   <UpcomingProjects/>
   <TopDevelopers/>
   <FeaturedProperties/>
   <Stats/>
   <WhyCountryroof/>
 </div>
  );
};

export default Home;
