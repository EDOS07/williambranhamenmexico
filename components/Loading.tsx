import LoadingIcon from "@/public/svg/Loading.svg"

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <LoadingIcon style={{ fill: "rgba(26,131,216, .6)" }} className="w-24 h-24" />
      <h1 className="text-LightBlue">Cargando...</h1>
    </div>
  );
}
