function Application(props) {
  return props.data.map((d,i) => (
    <li
      style={{
        display: "table",
        margin: "0px auto 0px auto",
      }}
      key={i}
    >
      {d.value}
    </li>
  ));
}

export default Application;
