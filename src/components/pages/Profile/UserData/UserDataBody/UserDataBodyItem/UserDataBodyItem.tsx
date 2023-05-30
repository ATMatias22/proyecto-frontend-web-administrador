interface Props {
  category: string;
  value: string | undefined;
}


export const UserDataBodyItem = ({ category, value }: Props) => {
  return (
    <li className="list-group-item border-0 ps-0 pt-0 text-sm">
      <strong className="text-dark">{category}:</strong> &nbsp; {value}
    </li>
  );
};
