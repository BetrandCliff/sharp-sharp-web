// app/auth/register/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Truck,
  ArrowLeft,
  ArrowRight,
  Upload,
  Check,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type FormData = {
  companyName: string;
  address: string;
  phone: string;
  email: string;
  documents: File[];
  ceoName: string;
  ceoEmail: string;
  ceoPhone: string;
};

export default function MultiStepRegister() {
  const router = useRouter();

  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState<FormData>({
    companyName: "",
    address: "",
    phone: "",
    email: "",
    documents: [],
    ceoName: "",
    ceoEmail: "",
    ceoPhone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files) {
      setFormData({
        ...formData,
        documents: Array.from(e.target.files),
      });
    }
  };

  const nextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Submitted Data:", formData);

    // alert("✅ Registration submitted successfully!");

    // Navigate to dashboard
    router.push("/admin/dashboard");
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center p-6">
      <div className="w-full max-w-lg">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-3">
            <Link href="/">
              <div className="w-14 h-14 bg-orange-500 rounded-2xl flex items-center justify-center cursor-pointer">
                <Truck className="w-8 h-8 text-black" />
              </div>
            </Link>

            <h1 className="text-4xl font-bold tracking-tight">
              Sharp-Sharp
            </h1>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="flex justify-between mb-8 px-4">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className="flex flex-col items-center"
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all
                ${
                  step === s
                    ? "bg-orange-500 border-orange-500 text-black"
                    : step > s
                    ? "bg-emerald-500 border-emerald-500 text-white"
                    : "border-zinc-700 text-zinc-500"
                }`}
              >
                {step > s ? (
                  <Check className="w-5 h-5" />
                ) : (
                  s
                )}
              </div>

              <p className="text-xs text-zinc-400 mt-2">
                {s === 1 && "Company"}
                {s === 2 && "Documents"}
                {s === 3 && "CEO Info"}
              </p>
            </div>
          ))}
        </div>

        {/* Form Card */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10">
          <form onSubmit={handleSubmit}>
            {/* ================= STEP 1 ================= */}
            {step === 1 && (
              <div>
                <h2 className="text-2xl font-semibold text-center mb-8">
                  Company Information
                </h2>

                <div className="space-y-6">
                  <div>
                    <Label htmlFor="companyName">
                      Company Name
                    </Label>

                    <Input
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="FastHaul Logistics Ltd"
                      className="mt-2"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="address">
                      Company Address
                    </Label>

                    <Input
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Lagos, Nigeria"
                      className="mt-2"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">
                        Phone Number
                      </Label>

                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+234 801 234 5678"
                        className="mt-2"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">
                        Email Address
                      </Label>

                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="info@fasthaul.com"
                        className="mt-2"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ================= STEP 2 ================= */}
            {step === 2 && (
              <div>
                <h2 className="text-2xl font-semibold text-center mb-8">
                  Company Documents
                </h2>

                <div className="border-2 border-dashed border-zinc-700 rounded-2xl p-10 text-center">
                  <Upload className="w-12 h-12 mx-auto text-zinc-500 mb-4" />

                  <p className="text-zinc-400 mb-4">
                    Upload CAC Certificate, Tax ID, etc.
                  </p>

                  <input
                    type="file"
                    multiple
                    onChange={handleFileChange}
                    className="block w-full text-sm text-zinc-400
                    file:mr-4
                    file:py-3
                    file:px-6
                    file:rounded-xl
                    file:border-0
                    file:text-sm
                    file:font-medium
                    file:bg-orange-500
                    file:text-black
                    hover:file:bg-orange-600"
                  />

                  {formData.documents.length > 0 && (
                    <p className="mt-4 text-emerald-500 text-sm">
                      {formData.documents.length} file(s)
                      selected
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* ================= STEP 3 ================= */}
            {step === 3 && (
              <div>
                <h2 className="text-2xl font-semibold text-center mb-8">
                  CEO / Admin Information
                </h2>

                <div className="space-y-6">
                  <div>
                    <Label htmlFor="ceoName">
                      Full Name
                    </Label>

                    <Input
                      id="ceoName"
                      name="ceoName"
                      value={formData.ceoName}
                      onChange={handleChange}
                      placeholder="Mr. John Doe"
                      className="mt-2"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="ceoEmail">
                      Email Address
                    </Label>

                    <Input
                      id="ceoEmail"
                      name="ceoEmail"
                      type="email"
                      value={formData.ceoEmail}
                      onChange={handleChange}
                      placeholder="ceo@company.com"
                      className="mt-2"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="ceoPhone">
                      Phone Number
                    </Label>

                    <Input
                      id="ceoPhone"
                      name="ceoPhone"
                      value={formData.ceoPhone}
                      onChange={handleChange}
                      placeholder="+234 803 456 7890"
                      className="mt-2"
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-10">
              {step > 1 ? (
                <Button
                  type="button"
                  variant="outline"
                  onClick={prevStep}
                >
                  <ArrowLeft className="mr-2 w-4 h-4" />
                  Back
                </Button>
              ) : (
                <div />
              )}

              {step < 3 ? (
                <Button
                  type="button"
                  onClick={nextStep}
                  className="bg-orange-500 hover:bg-orange-600 text-black"
                >
                  Next
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              ) : (
                <Button
                  type="submit"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white"
                >
                  Submit Application
                </Button>
              )}
            </div>
          </form>
        </div>

        {/* Footer */}
        <p className="text-center mt-6 text-sm text-zinc-500">
          Already have an account?{" "}
          <Link
            href="/auth/login"
            className="text-orange-500 hover:underline"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}