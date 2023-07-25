import Avatar from "./Avatar";

// const homer = {
//   firstName: "Homer",
//   lastName: "Simpson",
//   image:
//     "https://www.stickees.com/files/cartoon/the-simpsons/2259-garage-band-homer-sticker.png",
// };

// const bart = {
//   firstName: "Bart",
//   lastName: "Simpson",
//   image:
//     "https://www.stickees.com/files/cartoon/the-simpsons/2242-bart-simpson-bartman.png",
// };

const users = [
  {
    id: 1,
    firstName: "Homer",
    lastName: "Simpson",
    image:
      "https://www.stickees.com/files/cartoon/the-simpsons/2259-garage-band-homer-sticker.png",
  },
  {
    id:2,
    firstName: "Bart",
    lastName: "Simpson",
    image:
      "https://www.stickees.com/files/cartoon/the-simpsons/2242-bart-simpson-bartman.png",
  },
  {
    id:2,
    firstName: "Bart",
    lastName: "Simpson",
    image:
      "https://www.stickees.com/files/cartoon/the-simpsons/2242-bart-simpson-bartman.png",
  },
  {
    id:2,
    firstName: "Bart",
    lastName: "Simpson",
    image:
      "https://www.stickees.com/files/cartoon/the-simpsons/2242-bart-simpson-bartman.png",
  },
  {
    id:2,
    firstName: "Bart",
    lastName: "Simpson",
    image:
      "https://www.stickees.com/files/cartoon/the-simpsons/2242-bart-simpson-bartman.png",
  },
];

function App() {
  return (
    <>
    {users.map(user => (
      <Avatar {...user} key={user.id} />
    ))}
      {/* <Avatar {...users[0]} />
      <Avatar {...users[1]} /> */}
    </>
  );
}

export default App;
