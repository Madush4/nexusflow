import logInImage from "../../assests/logInImage2.png";

function AuthSidePanel() {
  return (
    <div className="w-full bg-blue-50 flex overflow-hidden lg:h-dvh transition-all duration-300 ease-in-out">
      <div className="w-full flex flex-col gap-3 lg:gap-4 px-6 py-6 sm:px-10 md:px-14 lg:px-20 lg:py-8">
        <h3 className="text-slate-950 font-bold text-2xl lg:text-3xl">
          Agency Portal
        </h3>

        <p className="text-primary font-medium text-xs lg:text-sm">
          DISTRIBUTION, CONNECTED
        </p>

        <h1 className="text-slate-900 font-bold text-2xl sm:text-3xl lg:text-4xl leading-tight transition-all duration-300">
          <span className="block">Every delivery,</span>
          <span className="block">Handled with care.</span>
        </h1>

        <p className="text-slate-800 font-medium text-sm max-w-xl">
          Bring your stock , people and routes together. Keep your agency moving
          with confidence.
        </p>
        <div className="hidden sm:flex items-center justify-center h-56 md:h-72 lg:h-auto lg:flex-1 lg:min-h-0">
          <img
            src={logInImage}
            alt="deliveryTruckImage"
            className="max-w-full max-h-full object-contain"
          />
        </div>
        <div className="hidden lg:flex flex-col gap-1">
          <p className="font-bold text-xl text-primary">
            Better cordination. EveryDay
          </p>

          <p className="text-sm text-primary font-medium">
            Your people, stock and deliveries - working together.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AuthSidePanel;
