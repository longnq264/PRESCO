import BackgroundSlider from "@/components/Home/BackgroundSlider";
import Filter from "@/components/Home/Filter";
import CoreMain from "@/components/Home/CoreMain";
import Categories from "@/components/Home/Categories";
import ListMember from "@/components/Home/ListMember";
import LastestNew from "@/components/Home/LastestNew";

export default function Home() {
  return (
    <main className="main-site">
      <div className="main-container">
        <BackgroundSlider />
        <Filter />
        <CoreMain />
        <Categories />
        <ListMember />
        <LastestNew />
      </div>
    </main>
  );
}

