import loading1 from "../../assets/svg/loading.svg";
import clsx from "clsx";
import s from "../../assets/css/app.module.css"
export default function LoadingDetail() {
  return <div className={clsx(
    s['w-full'],
    s['h-full'],
    s['bg-gray-300/70'],
    s['z-50'],
    s['flex'],
    s['items-center'],
    s['justify-center']
  )}>
    <img src={loading1} className={clsx(s['scale-50'])} alt="Loading" />
  </div>

}