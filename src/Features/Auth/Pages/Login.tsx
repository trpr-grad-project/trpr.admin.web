import { Mail, Lock, Compass, Eye, EyeOff, Loader2 } from "lucide-react";
import loginBackground from "../../../assets/images/loginBackground.png";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAuth } from "../../../hooks/useAuth";

const validationSchema = Yup.object({
  identifier: Yup.string().email("Invalid email address").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { handleLogin } = useAuth();

  const formik = useFormik({
    initialValues: {
      identifier: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      setError(null);
      try {
        await handleLogin(values.identifier, values.password);
      } catch {
        setError("Invalid email or password.");
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div
      className="relative flex min-h-screen w-full p-4 items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${loginBackground})` }}
    >
      <div className="absolute inset-0 bg-surface/50"></div>

      <div className="relative w-full max-w-120 bg-surface-container-lowest rounded-xl shadow-xl overflow-hidden border border-outline-variant/30">
        
        <div className="px-8 pt-10 pb-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="bg-primary-container text-on-primary p-2 rounded-lg">
              <Compass size={24} />
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-on-surface">
              TouRA <span className="text-primary-container">Admin</span>
            </h1>
          </div>
          <p className="text-on-surface-variant text-sm">
            Welcome back! Please login to your account.
          </p>
          <p className="text-xs text-secondary mt-2">
            This area is restricted to authorized administrators only.
          </p>
        </div>

        <form onSubmit={formik.handleSubmit} className="px-8 pb-6 space-y-5">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-on-surface">
              Email Address
            </label>
            <div className="relative flex items-center">
              <div className="absolute left-3 text-on-surface-variant">
                <Mail size={20} />
              </div>
              <input
                type="email"
                name="identifier"
                placeholder="admin@toura.com"
                value={formik.values.identifier}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                disabled={formik.isSubmitting}
                className="w-full pl-10 pr-4 py-3 
                bg-surface-container-lowest 
                border border-outline-variant 
                rounded-lg outline-0
                focus:ring-2 focus:ring-primary-container focus:border-primary-container 
                transition-all 
                text-on-surface 
                placeholder:text-on-surface-variant/60
                disabled:opacity-60 disabled:cursor-not-allowed"
              />
            </div>
            {formik.touched.identifier && formik.errors.identifier && (
              <p className="text-xs text-error">{formik.errors.identifier}</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-on-surface">
              Password
            </label>
            <div className="relative flex items-center">
              <div className="absolute left-3 text-on-surface-variant">
                <Lock size={20} />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="••••••••"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                disabled={formik.isSubmitting}
                className="w-full pl-10 pr-10 py-3 
                bg-surface-container-lowest 
                border border-outline-variant 
                rounded-lg outline-0
                focus:ring-2 focus:ring-primary-container focus:border-primary-container 
                transition-all 
                text-on-surface 
                placeholder:text-on-surface-variant/60
                disabled:opacity-60 disabled:cursor-not-allowed"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                disabled={formik.isSubmitting}
                className="absolute right-3 text-on-surface-variant hover:text-on-surface cursor-pointer transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {formik.touched.password && formik.errors.password && (
              <p className="text-xs text-error">{formik.errors.password}</p>
            )}
          </div>

          {error && (
            <p className="text-sm text-error text-center">{error}</p>
          )}

          <button
            type="submit"
            disabled={formik.isSubmitting}
            className="w-full py-3 px-4 
            bg-primary-container hover:bg-primary-container/90 
            text-on-primary text-[17px]
            cursor-pointer font-bold rounded-lg 
            shadow-lg shadow-primary-container/20 
            transition-all active:scale-[0.98]
            disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {formik.isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <Loader2 size={20} className="animate-spin" />
                Logging in...
              </span>
            ) : "Login"}
          </button>
        </form>

        <div className="px-8 py-6 bg-surface-container-low border-t border-outline-variant text-center">
          <p className="text-xs text-secondary">
            © 2024 TouRA Travel Solutions. All rights reserved.
            <br />
            <a className="hover:underline mt-1 inline-block" href="#">Privacy Policy</a>{" "}
            •{" "}
            <a className="hover:underline" href="#">Terms of Service</a>
          </p>
        </div>
      </div>
    </div>
  );
}