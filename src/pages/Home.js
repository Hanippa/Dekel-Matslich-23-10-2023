import { Search } from "../components/Search";
import { Chart } from "../components/Chart";
import { Forecast } from "../components/Forecast";
import { CurrentWeatherDetails } from "../components/CurrentWeatherDetails";

const Home = () => {
  return (
    <main className="font-rubik font-normal text-center bg-background dark:bg-darkBackgroud w-screen max-w-full h-screenNav flex flex-col lg:flex-row p-8 gap-4 lg:gap-0">
      <section
        id="left-section"
        className="w-full lg:w-1/4 h-full flex flex-col gap-4"
      >
        <Search />
        <CurrentWeatherDetails />
      </section>
      <section
        id="right-section"
        className="w-full lg:w-3/4 h-full lg:pl-4 flex flex-col gap-4"
      >
        <Chart />
        <Forecast />
      </section>
    </main>
  );
};

export default Home;
