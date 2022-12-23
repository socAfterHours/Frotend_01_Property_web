import ContentCard from "./ContentCard/ContentCard";
import ButtonPrimary from "../utilities/ButtonPrimary";

const ContentTable = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap md:mx-4">
        <ContentCard
          picture="https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          type="House"
          price={645000}
          rooms={3}
          location="Location"
          description="Chicharrones vinyl exercitation lomo, actually shaman lumbersexual
              bitters schlitz yes plz Taylor man in tech thundercats mumblecore
              succulents. Street art ascot tumeric echo park."
        />
        <ContentCard
          picture="https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          type="Flat"
          price={12}
          rooms={1}
          location="Location"
          description="Chicharrones vinyl exercitation lomo, actually shaman lumbersexual
              bitters schlitz yes plz Taylor man in tech thundercats mumblecore
              succulents. Street art ascot tumeric echo park."
        />
        <ContentCard
          picture="https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          type="Flat"
          price={245000}
          rooms={2}
          location="Location"
          description="Chicharrones vinyl exercitation lomo, actually shaman lumbersexual
              bitters schlitz yes plz Taylor man in tech thundercats mumblecore
              succulents. Street art ascot tumeric echo park."
        />
        <ContentCard
          picture="https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          type="Flat"
          price={345000}
          rooms={3}
          location="Location"
          description="Chicharrones vinyl exercitation lomo, actually shaman lumbersexual
              bitters schlitz yes plz Taylor man in tech thundercats mumblecore
              succulents. Street art ascot tumeric echo park."
        />
        <ContentCard
          picture="https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          type="House"
          price={10000000}
          rooms={3}
          location="Location"
          description="Chicharrones vinyl exercitation lomo, actually shaman lumbersexual
              bitters schlitz yes plz Taylor man in tech thundercats mumblecore
              succulents. Street art ascot tumeric echo park."
        />
        <ContentCard
          picture="https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          type="House"
          price={645000}
          rooms={3}
          location="Location"
          description="Chicharrones vinyl exercitation lomo, actually shaman lumbersexual
              bitters schlitz yes plz Taylor man in tech thundercats mumblecore
              succulents. Street art ascot tumeric echo park."
        />
      </div>
      <div className="flex justify-center items-center h-[5rem]">
        <ButtonPrimary className="border-bold-text border-2 text-bold-text hover:text-[#fff] hover:bg-secondary" text="Load More"/>
      </div>
      

    </div>
  );
};

export default ContentTable;
