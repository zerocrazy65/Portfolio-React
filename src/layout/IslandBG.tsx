import Navigation from "./Navigation";
const IslandBG = ({ children }: any) => {
   return (
      <section className="island d-flex justify-content-center align-items-center">
         <div className="bg-inside">
            <Navigation />
            <div className="content">{children}</div>
         </div>
      </section>
   );
};

export default IslandBG;
