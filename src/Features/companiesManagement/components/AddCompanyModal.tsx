import { useState } from "react";
import { X, Upload, Eye, EyeOff } from "lucide-react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function CompanyModal({ isOpen, onClose }: Props) {
  const [logoPreview, setLogoPreview] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  if (!isOpen) return null;

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const preview = URL.createObjectURL(file);
    setLogoPreview(preview);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-6">
      <div className="w-full max-w-3xl max-h-[90vh] overflow-hidden rounded-2xl border border-outline-variant/30 bg-surface shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-outline-variant/20">
          <h3 className="text-2xl font-bold text-on-surface">
            Add New Company
          </h3>

          <button
            onClick={onClose}
            className="text-secondary rounded-full w-9 h-9 flex items-center justify-center hover:bg-secondary-container transition cursor-pointer"
          >
            <X />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-8 space-y-8">
          {/* Logo */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-secondary mb-3">
              Company Logo
            </label>

            <label
              htmlFor="company-logo"
              className="w-full h-40 border-2 border-dashed border-outline-variant/40 rounded-xl overflow-hidden flex flex-col items-center justify-center gap-3 cursor-pointer hover:bg-surface-container-low transition"
            >
              {logoPreview ? (
                <img
                  src={logoPreview}
                  alt="Company Logo"
                  className="w-full h-full object-cover"
                />
              ) : (
                <>
                  <Upload className="w-8 h-8 text-primary" />

                  <span className="text-sm font-semibold text-on-surface">
                    Upload Company Logo
                  </span>

                  <span className="text-xs text-secondary">
                    PNG, JPG, JPEG or WEBP
                  </span>
                </>
              )}

              <input
                id="company-logo"
                type="file"
                accept="image/png,image/jpeg,image/jpg,image/webp"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
          </div>

          {/* Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Identifier */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-secondary mb-2">
                Identifier
              </label>

              <input
                type="text"
                placeholder="Enter company identifier"
                className="w-full rounded-xl border border-outline-variant/30 bg-surface px-4 py-3 text-sm text-on-surface outline-none focus:border-primary"
              />
            </div>

            {/* Name */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-secondary mb-2">
                Company Name
              </label>

              <input
                type="text"
                placeholder="Enter company name"
                className="w-full rounded-xl border border-outline-variant/30 bg-surface px-4 py-3 text-sm text-on-surface outline-none focus:border-primary"
              />
            </div>

            {/* Password */}
            <div className="md:col-span-2">
              <label className="block text-xs font-bold uppercase tracking-widest text-secondary mb-2">
                Password
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter company password"
                  className="w-full rounded-xl border border-outline-variant/30 bg-surface px-4 py-3 pr-12 text-sm text-on-surface outline-none focus:border-primary"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary hover:text-primary cursor-pointer"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <label className="block text-xs font-bold uppercase tracking-widest text-secondary mb-2">
                Description
              </label>

              <textarea
                rows={5}
                placeholder="Write company description..."
                className="w-full rounded-xl border border-outline-variant/30 bg-surface px-4 py-3 text-sm text-on-surface outline-none resize-none focus:border-primary"
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-8 py-6 border-t border-outline-variant/20 bg-surface-container-low">
          <div className="max-w-lg mx-auto flex gap-12">
            <button
              onClick={onClose}
              className="flex-1 border border-outline-variant/30 text-secondary py-3.5 px-6 rounded-xl font-semibold hover:bg-surface-container transition-all cursor-pointer"
            >
              Cancel
            </button>

            <button className="flex-1 bg-primary text-on-primary py-3.5 px-6 rounded-xl font-bold text-base hover:opacity-90 transition-all cursor-pointer">
              Save Company
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
