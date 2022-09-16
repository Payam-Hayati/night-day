//import Navbar from "./components/Navbar";
import styled from "styled-components";
import Switch from "react-switch";

function App() {
  return (
    <div className="w-[1000px] mx-auto pt-7 pl-20 pr-20">
      <Container>

        <div className="nav">
          <ul>
            <li> خانه </li>
            <li> قیمت ها </li>
            <li> تیم </li>
            <li> تماس </li>
          </ul>
        </div>
        <div className="swith">
          {/* <Switch /> */}  switch
        </div>
      </Container>
    </div>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  background-color: white;
  border-radius: 10px;
  justify-content: space-between;
  direction: rtl;
  /* flex-wrap: wrap; */
  flex:1;
  flex-grow:1;

  ul {
    list-style-type: none;
    li {
      display: inline-block;
      padding-right: 20px;
      font-weight: bold;
      cursor: pointer;
    }
  }
`;
