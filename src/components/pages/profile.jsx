import { useEffect, useState } from "react";
import users from '../../data/users.json';

function Profile() {

  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      const email = parsedUser.email;


      const findUser = users.find(
        (user) => user.email === email
      );

      setProfile(findUser);
    }
  }, []);

  if (!profile) {
    return <h1>Cargando perfil...</h1>;
  }

  return (
    <>
      <h1>Perfil</h1>
      <h1>Hola, {profile.name}</h1>
      <p>{profile.email}</p>
    </>
  );
}

export default Profile;
