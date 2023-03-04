import { useParams } from "react-router-dom";

function Detail() {
  const param = useParams();
  console.log(param);
  return <h1>Detail</h1>;
}
export default Detail;
