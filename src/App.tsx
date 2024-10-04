import DatesBlock from "./components/DatesBlock";

export default function App() {
  return (
    <>
      {/* FOR ADDING DatesBlock: The DatesBlock component must have a unique paginationClass for the animation to work correctly  */}
      {/* <DatesBlock paginationClass="pagination-2"/> */}

      <DatesBlock paginationClass="pagination-1"/>
    </>
  );
}
