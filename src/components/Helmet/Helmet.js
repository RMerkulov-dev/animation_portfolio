const Helmet = ({ children, title }) => {
  document.title = "Serhii Bielik-" + `${title}`;
  return <div>{children}</div>;
};

export default Helmet;
