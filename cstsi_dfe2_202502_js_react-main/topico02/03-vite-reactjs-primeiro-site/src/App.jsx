/* eslint-disable react/prop-types */
import './App.css';


function App() {
  console.info('render');
   const profiles = [];
    <Profile key={users[0].name} user={users[0]} />,
     <Profile key={users[1].name} user={users[1]} />,
     <Profile key={users[2].name} user={users[2]} />;
  
   users.forEach((user) => {
     profiles.push(<Profile key={user.name} user={user} />);
   });
  
  return (
    <>
      {users.map((user) =>
          <Profile key={user.name} user={user} />
      )}
    </>
  );
}



export default App;
