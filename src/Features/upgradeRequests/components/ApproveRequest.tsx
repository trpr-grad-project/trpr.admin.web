import {CircleCheck} from 'lucide-react'

export default function ApproveRequest() {
  return (
    <div className="space-y-4 flex flex-col justify-between">
      <div>
        <h4 className="font-h3 text-xl text-[#2D2926] font-bold font-['Noto_Serif']">
          Approve Request
        </h4>
        <p className="text-sm leading-6 font-medium text-secondary mt-2">
          Verify that all documents are valid and the user meets all eligibility
          criteria for the Elite status.
        </p>
      </div>
      <button className="w-full py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary-container transition-all flex items-center justify-center gap-2 shadow-sm">
        <CircleCheck/>
        Approve Request
      </button>
    </div>
  );
}
