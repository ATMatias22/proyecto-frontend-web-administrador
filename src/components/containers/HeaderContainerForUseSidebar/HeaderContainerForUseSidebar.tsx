import "./styles.css"

type Props = {
  children: JSX.Element | JSX.Element[] | string | string[];
};

export const HeaderContainerForUseSidebar = ({ children }: Props) => {
  return <div id="page-content-wrapper">{children}</div>;
};
