import { Mail, Lock, Compass } from "lucide-react";
import loginBackground from "../../../../assets/images/loginBackground.png";
import Input from "../../../../Components/UI/Input";

export default function Login() {
  return (
    <div
      className="relative flex min-h-screen w-full p-4 items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${loginBackground})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-surface/50"></div>

      {/* Card */}
      <div className="relative w-full max-w-120 bg-surface-container-lowest dark:bg-surface-container-highest rounded-xl shadow-xl overflow-hidden border border-primary-container/10">
        
        {/* Header */}
        <div className="px-8 pt-10 pb-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="bg-primary-container text-on-primary p-2 rounded-lg">
              <Compass size={24} />
            </div>

            <h1 className="text-2xl font-bold tracking-tight text-on-surface dark:text-on-primary">
              TouRA <span className="text-primary-container">Admin</span>
            </h1>
          </div>

          <p className="text-on-surface-variant text-sm">
            Welcome back! Please login to your account.
          </p>

          {/* Security note */}
          <p className="text-xs text-secondary mt-2">
            This area is restricted to authorized administrators only.
          </p>
        </div>

        {/* Form */}
        <form className="px-8 pb-6 space-y-5">

          <Input
            type="email"
            label="Email Address"
            placeholder="admin@toura.com"
            icon={Mail}
          />

          <Input
            type="password"
            label="Password"
            placeholder="••••••••"
            icon={Lock}
          />

          {/* Remember & Forgot */}
          <div className="flex items-center justify-between py-1">
            
            <label
              className="flex items-center gap-2 cursor-not-allowed opacity-60"
              title="Will be available soon"
            >
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-outline-variant text-primary-container focus:ring-primary-container"
                disabled
              />
              <span className="text-sm text-secondary">
                Remember me
              </span>
            </label>

            <a
              className="text-sm font-medium text-primary-container hover:text-primary-container/80 hover:underline transition-colors"
              href="#"
            >
              Forgot Password?
            </a>
          </div>

          {/* Button */}
          <button
            type="button"
            className="w-full py-3 px-4 bg-primary-container hover:bg-primary-container/90 hover:shadow-xl text-on-primary font-semibold rounded-lg shadow-lg shadow-primary-container/20 transition-all active:scale-[0.98]"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <div className="px-8 py-6 bg-surface-container-low border-t border-outline-variant text-center">
          <p className="text-xs text-secondary">
            © 2024 TouRA Travel Solutions. All rights reserved.
            <br />
            <a className="hover:underline mt-1 inline-block" href="#">
              Privacy Policy
            </a>{" "}
            •{" "}
            <a className="hover:underline" href="#">
              Terms of Service
            </a>
          </p>
        </div>

      </div>
    </div>
  );
}