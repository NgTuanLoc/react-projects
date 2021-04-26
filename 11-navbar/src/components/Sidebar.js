import { Fragment } from "react";
import { links } from "./data";

const Sidebar = ({ linksContainerRef, linksRef }) => {
  return (
    <Fragment>
      <div className="links-container" ref={linksContainerRef}>
        <ul className="links" ref={linksRef}>
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <li key={id}>
                <a href={url}>{text}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </Fragment>
  );
};

export default Sidebar;
