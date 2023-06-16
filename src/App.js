import { useState } from "react";
import Star from "./components/Star";

function App() {
  const users = [1, 2, 3, 4, 5];
  // number of stars that clicked
  const [clickedIndex, setClickedIndex] = useState(3);
  // number of strars that hovered
  const [moseOverFunc, setMoseOverFunc] = useState();

  return (
    <div className="main">
      <Star
        stars={users}
        // set stars index 
        oncleakfunc={(e) => setClickedIndex(e)}
        // pass to component how many stars should be yellow
        clickedColor={clickedIndex}
        // set stars that hovered
        moseOverFunc={setMoseOverFunc}
        // pass to component how many stars should be green
        moseOvercolor={moseOverFunc}
      />
    </div>
  );
}

export default App;

// useEffect(() => {
//   fetch("https://api.github.com/users")
//     .then((res) => res.json())
//     .then((res) => {
//       setUsers(res);
//     });
// }, []);

// const userView = users.map((user) => (
//   <div key={user.id} className="img-container">
//     {user.fname}
//     <img src={user.avatar_url} alt={user.login} className="img" />
//   </div>
// ));
