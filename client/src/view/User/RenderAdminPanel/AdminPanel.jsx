import { useState } from "react";
import style from "./AdminPanel.module.css";
import SearchUser from "./SearchUser/SearchUser";
import Statistics from "./Statistics/Statistics";

function AdminPanel() {
  const [renderView, setRenderView] = useState("SearchUser");
  let contentRender;
  if (renderView === "SearchUser") {
    contentRender = <SearchUser />;
  }
  if (renderView === "Statistics") {
    contentRender = <Statistics />;
  }

  return (
    <div className={style.viewAdminPanel}>
      <div className={style.navAdmin}>
        <button
          onClick={() => setRenderView("SearchUser")}
          className={
            renderView === "SearchUser" ? style.btnsActive : style.btnsInactive}>
          Buscar Usuario
        </button>
        <button
          onClick={() => setRenderView("Statistics")}
          className={
            renderView === "Statistics" ? style.btnsActive : style.btnsInactive}>
          Estadisticas
        </button>
      </div>
      <div className={style.adminInterface}>
        {contentRender}
      </div>
    </div>
  );
}

export default AdminPanel;
