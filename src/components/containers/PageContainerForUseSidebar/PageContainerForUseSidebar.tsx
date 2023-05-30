type Props = {
  children: JSX.Element | JSX.Element[] | string | string[];
};

export const PageContainerForUseSidebar = ({  children }: Props) => {
  return <div className="container-fluid px-2 px-md-4">{children}</div>;
};
