import { useEffect, useState } from "react";
import { X } from "lucide-react";

import { useCreateCompanyTripMutation } from "../../../../src/store/api/companiesApi";

import type { CreateCompanyTripDto } from "../../../../src/types/company";

import BasicInfoSection from "./createTripModal/BasicInfoSection";
import ScheduleSection from "./createTripModal/ScheduleSection";
import ImagesSection from "./createTripModal/ImagesSection";
import TripDaysSection from "./createTripModal/TripDaysSection";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export interface FieldErrors {
  title?: string;
  description?: string;
  price?: string;
  themeId?: string;
  maxParticipantsCount?: string;
  startDate?: string;
  endDate?: string;
  images?: string;
  segmentsGeneral?: string;
}

export interface SegmentErrors {
  dayDate?: string;
  duration?: string;
  placesIds?: string;
}

const initialTrip: CreateCompanyTripDto = {
  title: "",
  description: "",

  price: 0,

  guideId: "",

  themeId: 0,

  startDate: "",
  endDate: "",

  images: [],

  maxParticipantsCount: 0,

  autoApprove: true,

  segments: [],
};

function validateTrip(trip: CreateCompanyTripDto): {
  fieldErrors: FieldErrors;
  segmentErrors: SegmentErrors[];
} {
  const fieldErrors: FieldErrors = {};

  if (!trip.title.trim()) {
    fieldErrors.title = "This field is required.";
  }

  if (!trip.description.trim()) {
    fieldErrors.description = "This field is required.";
  }

  if (!trip.price || trip.price <= 0) {
    fieldErrors.price = "Price must be greater than 0.";
  }

  if (!trip.themeId) {
    fieldErrors.themeId = "This field is required.";
  }

  if (!trip.maxParticipantsCount || trip.maxParticipantsCount <= 0) {
    fieldErrors.maxParticipantsCount = "Must be greater than 0.";
  }

  if (!trip.startDate) {
    fieldErrors.startDate = "This field is required.";
  }

  if (!trip.endDate) {
    fieldErrors.endDate = "This field is required.";
  }

  if (trip.startDate && trip.endDate) {
    const start = new Date(trip.startDate);
    const end = new Date(trip.endDate);

    if (start.getTime() < Date.now()) {
      fieldErrors.startDate = "Start date cannot be in the past.";
    }

    if (end.getTime() <= start.getTime()) {
      fieldErrors.endDate = "Must be after the start date.";
    }
  }

  if (!trip.images || trip.images.length === 0) {
    fieldErrors.images = "Please add at least one image.";
  }

  if (!trip.segments || trip.segments.length === 0) {
    fieldErrors.segmentsGeneral = "Please add at least one day.";
  }

  const segmentErrors: SegmentErrors[] = trip.segments.map((segment) => {
    const dayErrors: SegmentErrors = {};

    if (!segment.dayDate) {
      dayErrors.dayDate = "This field is required.";
    }

    if (!segment.duration || segment.duration <= 0) {
      dayErrors.duration = "Must be greater than 0.";
    }

    if (!segment.placesIds || segment.placesIds.length === 0) {
      dayErrors.placesIds = "Select at least one place.";
    }

    if (segment.dayDate && trip.startDate && trip.endDate && !dayErrors.dayDate) {
      const dayTime = new Date(segment.dayDate).getTime();
      const startTime = new Date(trip.startDate).getTime();
      const endTime = new Date(trip.endDate).getTime();

      if (dayTime < startTime || dayTime > endTime) {
        dayErrors.dayDate = "Must be between the trip's start and end dates.";
      }
    }

    return dayErrors;
  });

  return { fieldErrors, segmentErrors };
}

function hasAnyErrors(fieldErrors: FieldErrors, segmentErrors: SegmentErrors[]) {
  if (Object.keys(fieldErrors).length > 0) return true;
  return segmentErrors.some((e) => Object.keys(e).length > 0);
}

export default function CreateTripModal({ isOpen, onClose }: Props) {
  const [createTrip, { isLoading }] = useCreateCompanyTripMutation();

  const [trip, setTrip] = useState<CreateCompanyTripDto>(initialTrip);

  const [submitted, setSubmitted] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [segmentErrors, setSegmentErrors] = useState<SegmentErrors[]>([]);

  // Once the user has tried to submit at least once, keep re-validating live
  // so the red borders clear automatically as fields get fixed.
  useEffect(() => {
    if (!submitted) return;

    const result = validateTrip(trip);
    setFieldErrors(result.fieldErrors);
    setSegmentErrors(result.segmentErrors);
  }, [trip, submitted]);

  function handleClose() {
    setTrip(initialTrip);
    setSubmitted(false);
    setFieldErrors({});
    setSegmentErrors([]);

    onClose();
  }

  async function handleCreateTrip() {
    const result = validateTrip(trip);

    setSubmitted(true);
    setFieldErrors(result.fieldErrors);
    setSegmentErrors(result.segmentErrors);

    if (hasAnyErrors(result.fieldErrors, result.segmentErrors)) {
      return;
    }

    try {
      await createTrip(trip).unwrap();

      setTrip(initialTrip);
      setSubmitted(false);
      onClose();
    } catch (err) {
      console.error(err);
    }
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-6">
      <div className="w-full max-w-6xl max-h-[92vh] bg-surface rounded-2xl border border-outline-variant/20 shadow-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-outline-variant/20">
          <div>
            <h2 className="text-3xl font-bold font-['Noto_Serif'] text-on-surface">
              Create Trip
            </h2>

            <p className="text-secondary mt-1">
              Create a new trip for this company.
            </p>
          </div>

          <button
            onClick={handleClose}
            className="w-10 h-10 rounded-full hover:bg-surface-container flex items-center justify-center cursor-pointer"
          >
            <X className="text-primary" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-8 space-y-10">
          <BasicInfoSection trip={trip} setTrip={setTrip} errors={fieldErrors} />

          <ScheduleSection trip={trip} setTrip={setTrip} errors={fieldErrors} />

          <ImagesSection trip={trip} setTrip={setTrip} errors={fieldErrors} />

          <TripDaysSection
            trip={trip}
            setTrip={setTrip}
            generalError={fieldErrors.segmentsGeneral}
            segmentErrors={segmentErrors}
          />
        </div>

        {/* Footer */}
        <div className="px-8 py-6 border-t border-outline-variant/20 bg-surface-container-low">
          <div className="max-w-lg mx-auto flex gap-12">
            <button
              onClick={handleClose}
              className="flex-1 border border-outline-variant/30 text-secondary py-3.5 px-6 rounded-xl font-semibold hover:bg-surface-container transition-all cursor-pointer"
            >
              Cancel
            </button>

            <button
              onClick={handleCreateTrip}
              disabled={isLoading}
              className="flex-1 bg-primary text-on-primary py-3.5 px-6 rounded-xl font-bold text-base hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all cursor-pointer"
            >
              {isLoading ? "Creating..." : "Create Trip"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}