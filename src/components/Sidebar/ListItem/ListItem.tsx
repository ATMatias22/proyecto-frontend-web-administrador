import { Item } from "../Item/Item";
import { SECTIONS } from "../sections";


export const ListItem = () => {
  return (
    <ul className="list-group list-group-flush ">
      {SECTIONS.map((section) => (
        <Item
          key={section.key}
          nameSection={section.name}
          icon={section.icon}
          route={section.route}
        />
      ))}
    </ul>
  );
};
