

const Sectionhead = ({icons , title, className}) => {
  return (
    <>
      <div className={`section__head ${className}`}>
        <span>{icons}</span>
        <h2>{title}</h2>
      </div>
    </>
  );
};

export default Sectionhead;
