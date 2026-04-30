import {Hourglass} from "lucide-react"
import { mockStats } from '../../../mocks/upgradeRequests.mock';

export default function StatsCard() {
  return (
    <div className="bg-primary-container/10 p-6 rounded-xl border border-primary-container/20 flex items-center justify-between w-full">

      <div>
        <p className="text-xs font-label-sm uppercase tracking-widest text-primary">
          Pending Queue
        </p>

        <h3 className="text-3xl font-h2 text-on-primary-container">
          {mockStats.pendingCount} Requests
        </h3>
      </div>

      <div className="w-12 h-12 bg-primary-container rounded-full flex items-center justify-center text-on-primary-container shadow-inner">
        <Hourglass/>
      </div>

    </div>
  );
}