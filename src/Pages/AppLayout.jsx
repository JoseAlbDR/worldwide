import Map from "../components/Map";
import SearchBar from "../components/SearchBar";
import Sidebar from "../components/Sidebar";
import User from "../components/User";
import { useAuth } from "../context/FakeAuthContext";
import styles from "./AppLayout.module.css";

function AppLayout() {
  const { isAuthenticated } = useAuth();

  return (
    <div className={styles.app}>
      <Sidebar />
      <SearchBar />
      <Map />
      <User />
    </div>
  );
}

export default AppLayout;
