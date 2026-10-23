import logInImage from "../../assests/logInImage2.png";

function AuthSidePanel() {
  return (
    <div className="h-dvh w-full bg-blue-50 flex overflow-hidden">
      <div className="px-20 py-8 flex flex-col gap-4 h-full">
        <h3 className="text-slate-950 font-bold text-3xl">Agency Portal</h3>

        <p className="text-primary font-medium text-sm">
          DISTRIBUTION, CONNECTED
        </p>

        <section className="flex flex-col gap-2">
          <h1 className="text-4xl text-slate-900 font-bold">Every Delivery,</h1>
          <h1 className="text-4xl text-slate-900 font-bold">
            Handled with care.
          </h1>
        </section>

        <p className="text-slate-800 font-light text-sm">
          Bring your stock , people and routes together. Keep your agency moving
          with confidence.
        </p>
        <div className="flex-1 min-h-0 flex items-center justify-center">
          <img
            src={logInImage}
            alt="deliveryTruckImage"
            className="max-w-full max-h-full object-contain"
          />
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-bold text-xl text-primary">
            Better cordination. EveryDay
          </p>

          <p className="text-sm text-primary font-light">
            Your People, stock and deliveries - working together.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AuthSidePanel;
