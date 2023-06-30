import { useNavigate } from "react-router-dom";
import Map from "../components/Map";
import Sidebar from "../components/Sidebar";
import styles from "./AppLayout.module.css";
import { useEffect } from "react";

function AppLayout() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("cities");
  }, [navigate]);

  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
    </div>
  );
}

export default AppLayout;
