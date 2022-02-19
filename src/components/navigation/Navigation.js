const sections = [
  {
    icon: "fa-solid fa-table-cells-large",
    title: "Home",
  },
  {
    icon: "fa-solid fa-chart-column",
    title: "Section 1",
  },
  {
    icon: "fa-solid fa-table-cells-large",
    title: "Section 2",
  },
  {
    icon: "fa-solid fa-chart-column",
    title: "Section 3",
  },
  {
    icon: "fa-solid fa-table-cells-large",
    title: "Section 4",
  },
  {
    icon: "fa-solid fa-chart-column",
    title: "Section 5",
  },
  {
    icon: "fa-solid fa-table-cells-large",
    title: "Section 6",
  },
  {
    icon: "fa-solid fa-chart-column",
    title: "Section 7",
  },
];

const Navigation = () => {
  return (
    <section id="navigation">
      <div className="d-flex flex-column">
        <div className="container-fluid">
          <div className="logo-heading">
            <div className="logo">N</div>
            <p>Name</p>
            <i className="fa-solid fa-arrow-left"></i>
          </div>
          <nav className="navbar navbar-dark">
            <ul className="navbar-nav">
              {sections.map((section, index) => (
                
                  <li className="nav-item" key={index}>
                    <i className={section.icon}></i>
                    {section.title}
                  </li>
            
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Navigation;
