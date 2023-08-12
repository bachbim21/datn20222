import loading1 from "../../assets/svg/loading.svg";
import clsx from "clsx";
import s from "../../assets/css/app.module.css"
export default function Loading({text}) {
  return (
    <div className={clsx(
      s['fixed'],
      s['z-50'],
      s['top-0'],
      s['left-0'],
      s['w-screen'],
      s['h-screen'],
      s['bg-gray-500/70'],
      s['flex'],
      s['items-center'],
      s['justify-center']
    )}>
      <div className={clsx(
        s['w-56'],
        s['h-36'],
        s['bg-white'],
        s['flex'],
        s['justify-center'],
        s['items-center'],
        s['rounded'],
        s['flex-col'],
        s['p-3']
      )}>
        <img src={loading1} className={clsx(s['w-1/2'])} alt="Loading" />
        <span className={clsx(s['mb-2'])}>{text ? text : "Đang xử lý..."}</span>
      </div>
    </div>
  );

}