import { useEffect, useState } from "react";
import users from '../../data/users.json';
import '../styles/profile.css'

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
      <h1 className="bienv">Hola, {profile.name}</h1>

      <div className="datosUser">
        <h3>Datos de usuario</h3>

        <div className="nombreCompleto">
          <div>
          <label>Nombre:</label>
          <p>{profile.name}</p>
          </div>

          <div>
            <label>Apellido:</label>
          <p>{profile.surname}</p>
          </div>
        </div>

        <label>Email de empresa:</label>
        <p>{profile.email}</p>
        <label>Puesto actual:</label>
        <p> {profile.position}</p>
      </div>

      <div className="datosUser">
        <h3>Formación</h3>
        <label>Tipo de formación</label>
        <p>{profile.training}</p>
        <label>Nombre de formación</label>
        <p>{profile.training_name}</p>
        <label>Institución</label>
        <p>{profile.training_institution}</p>
        <label>Fecha de curso</label>
        <p>{profile.training_date}</p>
      </div>

      <div className="datosUser">
        <h3>Datos personales</h3>
        <label>Calle de vivienda personal</label>
        <p>{profile.personal_address_street}</p>
        <label>Número de vivienda</label>
        <p>{profile.personal_address_number}</p>
        <label>Número de piso</label>
        <p>{profile.personal_address_apartment}</p>
        <label>Email personal</label>
        <p>{profile.personal_email}</p>
        <label>Número de teléfono</label>
        <p>{profile.personal_numtelf}</p>
      </div>

    </>
  );
}

export default Profile;
