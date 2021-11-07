import { React, useState, useEffect } from "react";
import MyTable from "./Table/MyTable";
import { Container } from "react-bootstrap";
import Nav from "./Nav";
import Toast from "./Form/MyToast";
import Loader from "./Loader";
import Axios from "axios";
import { GetCookie } from "./Cookies";

const Home = ({ userData, setUser }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [dataList, setDataList] = useState([]);
  const [toastActive, isToastActive] = useState({
    message: "",
    active: false,
  });

  useEffect(() => {
    const idUser = parseInt(GetCookie("data").id_usuario);
    Axios.get("https://gastos-app-back.herokuapp.com/budgest/list").then((response) => {
      let newArrayData = response.data.reduce((acc, x) => {
        if (x.id_usuario !== idUser) {
          return acc;
        }
        x.fecha = x.fecha.substr(0, 10);
        return acc.concat(x);
      }, []);
      setDataList(newArrayData);
      setIsLoading(false);
    });
  }, []);

  return (
    <div>
      <Nav
        userData={userData}
        setUser={({ data, active }) => setUser({ data, active })}
      />
      <Toast toastActive={toastActive} setToast={isToastActive} />
      {isLoading ? (
        <Loader />
      ) : (
        <Container>
          <MyTable setToast={isToastActive} data={dataList} />
        </Container>
      )}
    </div>
  );
};

export default Home;
