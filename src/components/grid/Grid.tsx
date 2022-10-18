// export default function grid() {
//   return <div>Hello</div>;
// }

type GridProps = {
  name?: string;
};

export default function grid(props: GridProps) {
  return <div> Hello {props.name}</div>;
}
