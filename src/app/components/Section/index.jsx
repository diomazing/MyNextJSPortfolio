const Section = ({ children, id }) => {
  return (
    <section
      className="h-[100vh] w-full overflow-auto"
      style={{
        scrollSnapAlign: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        color: "lightgray",
        textDecoration: "none",
        textDecorationColor: "inherit",
      }}
      id={`${id}`}>
      {children}
    </section>
  );
};

export default Section;
