import { z } from "zod";

export const admissionFormSchema = z.object({
  parentName: z
    .string()
    .min(2, "Parent/Guardian name must be at least 2 characters")
    .max(100, "Name is too long"),
  studentName: z
    .string()
    .min(2, "Student name must be at least 2 characters")
    .max(100, "Name is too long"),
  phone: z
    .string()
    .regex(
      /^(\+91[\-\s]?)?[6-9]\d{9}$/,
      "Please enter a valid Indian mobile number"
    ),
  email: z
    .string()
    .email("Please enter a valid email address")
    .optional()
    .or(z.literal("")),
  classApplyingFor: z.string().min(1, "Please select a class"),
  message: z.string().max(500, "Message is too long").optional().or(z.literal("")),
});

export type AdmissionFormData = z.infer<typeof admissionFormSchema>;

export interface AdmissionSubmissionResult {
  success: boolean;
  message: string;
}

/**
 * Submit an admission enquiry.
 * Currently returns a simulated success response.
 * Ready for Supabase integration — replace the body
 * of this function with a Supabase insert call.
 */
export async function submitAdmissionEnquiry(
  data: AdmissionFormData
): Promise<AdmissionSubmissionResult> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // In production, replace with:
  // const { error } = await supabase.from('admission_enquiries').insert(data);
  // if (error) return { success: false, message: error.message };

  console.log("Admission enquiry submitted:", data);

  return {
    success: true,
    message:
      "Thank you for your enquiry! We have received your admission request and will contact you shortly.",
  };
}

export const classOptions = [
  "LKG",
  "UKG",
  "1st Standard",
  "2nd Standard",
  "3rd Standard",
  "4th Standard",
  "5th Standard",
  "6th Standard",
  "7th Standard",
  "8th Standard",
  "9th Standard",
  "10th Standard",
];
