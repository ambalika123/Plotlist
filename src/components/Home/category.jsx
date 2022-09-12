import React, { useState } from "react";
import { ProSidebar, Menu, MenuItem, SidebarContent } from "react-pro-sidebar";

const CategoryLayout = ({ category, image, desc }) => {
  //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(false);

  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };
  return (
    <>
      <div id="header">
        {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar>
          <SidebarContent>
            <Menu>
              {category.categories &&
                category.categories.map((cat) => <MenuItem>{cat}</MenuItem>)}
            </Menu>
          </SidebarContent>
        </ProSidebar>
      </div>
    </>
  );
};

export default CategoryLayout;
