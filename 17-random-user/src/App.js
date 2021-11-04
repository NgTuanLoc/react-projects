import { useState, useEffect } from "react";
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from "react-icons/fa";
const url = "https://randomuser.me/api";
const defaultImage = "https://randomuser.me/portraits/men/51.jpg";

const App = () => {
  const [title, setTitle] = useState("name");
  const [loading, setLoading] = useState(true);
  const [person, setPerson] = useState(null);
  const [value, setValue] = useState("random user");

  const fetchUser = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const person = data.results[0];
    const { first, last } = person.name;
    const email = person.email;
    const { age } = person.dob;
    const { number: streetNumber, name: streetName } = person.location.street;
    const { phone } = person;
    const { password } = person.login;
    const { large: image } = person.picture;
    console.log(person.phone);

    const newValue = {
      name: `${first} ${last}`,
      email,
      age,
      street: `${streetNumber} ${streetName}`,
      phone,
      password,
      image,
    };
    console.log(newValue);
    setPerson(newValue);
    setValue(newValue.name);
    setTitle("name");
    setLoading(false);
    // name, email, age, street, phone, password
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const handleValue = (event) => {
    if (event.target.classList.contains("icon")) {
      const newValue = event.target.dataset.label;
      setTitle(newValue);
      setValue(person[newValue]);
    }
  };

  return (
    <main>
      <div className="block bcg-black"></div>
      <div className="block">
        <div className="container">
          <img
            src={(person && person.image) || defaultImage}
            alt="person"
            className="user-img"
          />
          <p className="user-title">my {title} is</p>
          <p className="user-value">{value}</p>
          <div className="values-list">
            <button
              className="icon"
              data-label="name"
              onMouseOver={handleValue}
            >
              <FaUser />
            </button>
            <button
              className="icon"
              data-label="email"
              onMouseOver={handleValue}
            >
              <FaEnvelopeOpen />
            </button>
            <button className="icon" data-label="age" onMouseOver={handleValue}>
              <FaCalendarTimes />
            </button>
            <button
              className="icon"
              data-label="street"
              onMouseOver={handleValue}
            >
              <FaMap />
            </button>
            <button
              className="icon"
              data-label="phone"
              onMouseOver={handleValue}
            >
              <FaPhone />
            </button>
            <button
              className="icon"
              data-label="password"
              onMouseOver={handleValue}
            >
              <FaLock />
            </button>
          </div>
          <button className="btn" type="button" onClick={() => fetchUser()}>
            {loading ? "...loading" : "random user"}
          </button>
        </div>
      </div>
    </main>
  );
};

export default App;
