import { Fragment } from "react";
import { links, social } from "./data";

const Sidebar = ({showLinks, linksContainerRef, linksRef}) => {
  return (
    <Fragment>
      <div className='links-container' ref={linksContainerRef}>
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