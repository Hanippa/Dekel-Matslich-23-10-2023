import { Search } from "../components/Search";
import { Chart } from "../components/Chart";
import { Forecast } from "../components/Forecast";
import { CurrentWeatherDetails } from "../components/CurrentWeatherDetails";

const Home = () => {
  return (
    <main className="font-rubik font-normal text-center bg-background dark:bg-darkBackgroud w-screen h-screenNav flex flex-col md:flex-row p-8 gap-4 md:gap-0">
      <section
        id="left-section"
        className="w-full md:w-1/4 h-full flex flex-col gap-4 min-w-fit"
      >
        <Search />
        <CurrentWeatherDetails />
      </section>
      <section
        id="right-section"
        className="w-full md:w-3/4 h-full md:pl-4 flex flex-col gap-4"
      >
        <Chart />
        <Forecast />
      </section>
    </main>
  );
};

export default Home;
