const Section = ({ children, id, ref }) => {
  return (
    <section
      className="h-[100vh] w-full overflow-auto"
      style={{
        scrollBehavior: "smooth",
        scrollSnapAlign: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        color: "lightgray",
        textDecoration: "none",
        textDecorationColor: "inherit",
      }}
      id={`${id}`}
      ref={ref}>
      {children}
    </section>
  );
};

export default Section;
