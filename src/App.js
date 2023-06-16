import { useState } from "react";
import Star from "./components/Star";

function App() {
  const users = [1, 2, 3, 4, 5];
  const [clickedIndex, setClickedIndex] = useState(3);
  const [moseOverFunc, setMoseOverFunc] = useState();

  return (
    <div className="main">
      <Star
        stars={users}
        oncleakfunc={(e) => setClickedIndex(e)}
        clickedColor={clickedIndex}
        moseOverFunc={setMoseOverFunc}
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
