export const metadata = {
  title: "Web tutorials-create layout",
  description: "Generated by twgu",
  icons: { icon: "/teacher.png" },
};

export default function Layout(props) {
  return (
    <>
      <h2>create layout</h2>
      {props.children}
    </>
  );
}