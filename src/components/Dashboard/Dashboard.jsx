import classes from "./Dashboard.module.css";
import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

import data from "./dashboard_items";

const Dashboard = () => {
  const [isVisible, setIsVisible] = useState({
    books: false,
    users: false,
    authors: false,
    genres: false,
    issues: false,
  });

  const toggleHandler = (e) => {
    const target = e.target.innerText.toLowerCase();
    console.log(target);
    setIsVisible((prevState) => {
      return {
        ...prevState,
        [target]: !prevState[target],
      };
    });
  };

  return (
    <div className={classes.dashboard}>
      <div className={classes.dashboard_items}>
        {data.map((item) => {
          return (
            <>
              <div
                key={item.id}
                className={classes.dashboard_item}
                onClick={toggleHandler}
              >
                <span>{item.title}</span>
                
              </div>
              {isVisible[item.title] &&
                item.dropdown.map((action) => {
                  return (
                    <div key={action.id} className={classes.dashboard_dropdown}>
                      <span>{action.title}</span>
                    </div>
                  );
                })}
            </>
          );
        })}
      </div>
      <div className={classes.dashboard_main}></div>
    </div>
  );
};

export default Dashboard;
