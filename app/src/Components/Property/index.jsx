import Display from "./display";
import Text from "./text";
import { Tooltip } from "antd";
import { domId } from "../../redux/selector";
import { useSelector } from "react-redux";
export default function Property(params) {
  const idDom = useSelector(domId);
  const currentDom = document.getElementById(idDom);
  if (idDom != null || idDom != undefined) {
    return (
      <nav
        className="z-10 bg-custom rounded-l-sm w-11 h-96 right-0 fixed shadow-xl shadow-slate-400 bottom-0"
        style={{
          top: "70px",
        }}>
        <Tooltip placement="leftTop" title="display">
          <Display dom={currentDom} />
        </Tooltip>
        <Tooltip placement="leftTop" title="text">
          <Text dom={currentDom} />
        </Tooltip>
      </nav>
    );
  }
}
