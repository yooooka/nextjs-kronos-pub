import { useState } from "react";

const Drawer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleDrawer}>Menu</button>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } absolute bg-white h-screen w-64`}
      >
        <button onClick={toggleDrawer}>Close</button>
        <ul>
          <li>Menu Item 1</li>
          <li>Menu Item 2</li>
          <li>Menu Item 3</li>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
