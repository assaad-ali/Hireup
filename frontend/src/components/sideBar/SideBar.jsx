import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

const SideBar = () => {
  return (
    <>
      <Sidebar>
        <Menu>
          <SubMenu>
            <MenuItem> settings </MenuItem>
            <MenuItem> privacy </MenuItem>
          </SubMenu>
          <MenuItem> netrworks </MenuItem>
          <MenuItem> messages </MenuItem>
        </Menu>
      </Sidebar>
    </>
  );
};

export default SideBar;
