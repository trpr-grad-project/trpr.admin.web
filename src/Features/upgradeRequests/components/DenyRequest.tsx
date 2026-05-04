import {CircleX} from 'lucide-react'

export default function DenyRequest() {
  return (
    <div className="space-y-4 pt-8 md:pt-0 md:pl-8 md:border-l border-outline-variant/30">
      <h4 className="font-h3 text-xl text-on-surface font-bold font-['Noto_Serif']">
        Deny Request
      </h4>
      <div className="space-y-3">
        <label className="text-[10px] font-bold text-secondary uppercase tracking-widest pb-1 block">
          Rejection Reason (Required)
        </label>
        <textarea
          className="outline-0 w-full bg-surface text-on-surface rounded-lg border border-error focus:ring-1 focus:ring-error focus:border-error p-4 placeholder-secondary/70 text-sm"
          placeholder="State clearly why the request was denied..."
          rows={3}></textarea>
      </div>
      <button className="w-full py-4 bg-error text-surface font-bold rounded-lg hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer">
        <CircleX/>
        Confirm &amp; Deny Request
      </button>
    </div>
  );
}
