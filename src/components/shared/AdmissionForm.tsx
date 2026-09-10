"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import {
  admissionFormSchema,
  type AdmissionFormData,
  submitAdmissionEnquiry,
  classOptions,
} from "@/services/admissions";
import { cn } from "@/lib/utils";

export default function AdmissionForm() {
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AdmissionFormData>({
    resolver: zodResolver(admissionFormSchema),
    defaultValues: {
      parentName: "",
      studentName: "",
      phone: "",
      email: "",
      classApplyingFor: "",
      message: "",
    },
  });

  const onSubmit = async (data: AdmissionFormData) => {
    setSubmitStatus("loading");
    try {
      const result = await submitAdmissionEnquiry(data);
      if (result.success) {
        setSubmitStatus("success");
        setStatusMessage(result.message);
        reset();
      } else {
        setSubmitStatus("error");
        setStatusMessage(result.message);
      }
    } catch {
      setSubmitStatus("error");
      setStatusMessage(
        "Something went wrong. Please try again or call us directly."
      );
    }
  };

  if (submitStatus === "success") {
    return (
      <div className="text-center py-12 px-6 bg-green-50 rounded-xl border border-green-200">
        <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-navy-800 mb-2">
          Enquiry Submitted
        </h3>
        <p className="text-sm text-warm-500 mb-6 max-w-md mx-auto">
          {statusMessage}
        </p>
        <button
          onClick={() => setSubmitStatus("idle")}
          className="text-sm font-medium text-navy-600 hover:text-navy-800 underline underline-offset-4 transition-colors"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="space-y-5"
    >
      {submitStatus === "error" && (
        <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">
          <AlertCircle className="w-5 h-5 shrink-0" />
          {statusMessage}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Parent Name */}
        <div>
          <label
            htmlFor="parentName"
            className="block text-sm font-medium text-navy-800 mb-1.5"
          >
            Parent / Guardian Name <span className="text-red-500">*</span>
          </label>
          <input
            id="parentName"
            type="text"
            autoComplete="name"
            {...register("parentName")}
            className={cn(
              "w-full px-4 py-2.5 rounded-lg border bg-white text-charcoal text-sm",
              "focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent",
              "transition-shadow",
              errors.parentName ? "border-red-400" : "border-warm-300"
            )}
            placeholder="Enter parent name"
          />
          {errors.parentName && (
            <p className="mt-1 text-xs text-red-600">
              {errors.parentName.message}
            </p>
          )}
        </div>

        {/* Student Name */}
        <div>
          <label
            htmlFor="studentName"
            className="block text-sm font-medium text-navy-800 mb-1.5"
          >
            Student Name <span className="text-red-500">*</span>
          </label>
          <input
            id="studentName"
            type="text"
            autoComplete="off"
            {...register("studentName")}
            className={cn(
              "w-full px-4 py-2.5 rounded-lg border bg-white text-charcoal text-sm",
              "focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent",
              "transition-shadow",
              errors.studentName ? "border-red-400" : "border-warm-300"
            )}
            placeholder="Enter student name"
          />
          {errors.studentName && (
            <p className="mt-1 text-xs text-red-600">
              {errors.studentName.message}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-navy-800 mb-1.5"
          >
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            {...register("phone")}
            className={cn(
              "w-full px-4 py-2.5 rounded-lg border bg-white text-charcoal text-sm",
              "focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent",
              "transition-shadow",
              errors.phone ? "border-red-400" : "border-warm-300"
            )}
            placeholder="e.g. 9876543210"
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-red-600">
              {errors.phone.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-navy-800 mb-1.5"
          >
            Email Address
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            {...register("email")}
            className={cn(
              "w-full px-4 py-2.5 rounded-lg border bg-white text-charcoal text-sm",
              "focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent",
              "transition-shadow",
              errors.email ? "border-red-400" : "border-warm-300"
            )}
            placeholder="Enter email (optional)"
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-600">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      {/* Class Applying For */}
      <div>
        <label
          htmlFor="classApplyingFor"
          className="block text-sm font-medium text-navy-800 mb-1.5"
        >
          Class Applying For <span className="text-red-500">*</span>
        </label>
        <select
          id="classApplyingFor"
          {...register("classApplyingFor")}
          className={cn(
            "w-full px-4 py-2.5 rounded-lg border bg-white text-charcoal text-sm",
            "focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent",
            "transition-shadow appearance-none",
            errors.classApplyingFor ? "border-red-400" : "border-warm-300"
          )}
        >
          <option value="">Select a class</option>
          {classOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        {errors.classApplyingFor && (
          <p className="mt-1 text-xs text-red-600">
            {errors.classApplyingFor.message}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-navy-800 mb-1.5"
        >
          Message
        </label>
        <textarea
          id="message"
          rows={3}
          {...register("message")}
          className={cn(
            "w-full px-4 py-2.5 rounded-lg border bg-white text-charcoal text-sm resize-y",
            "focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent",
            "transition-shadow",
            errors.message ? "border-red-400" : "border-warm-300"
          )}
          placeholder="Any specific questions or requirements? (optional)"
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-600">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={submitStatus === "loading"}
        className={cn(
          "w-full sm:w-auto px-8 py-3 rounded-lg text-sm font-semibold transition-all",
          "bg-navy-800 text-white hover:bg-navy-700 active:bg-navy-900",
          "disabled:opacity-60 disabled:cursor-not-allowed",
          "flex items-center justify-center gap-2"
        )}
      >
        {submitStatus === "loading" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Submitting...
          </>
        ) : (
          "Submit Enquiry"
        )}
      </button>
    </form>
  );
}
