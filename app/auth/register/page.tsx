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

  companyDocuments: File[];

  ceoName: string;
  ceoEmail: string;
  ceoPhone: string;

  ceoDocuments: File[];
};

export default function MultiStepRegister() {
  const router = useRouter();

  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState<FormData>({
    companyName: "",
    address: "",
    phone: "",
    email: "",

    companyDocuments: [],

    ceoName: "",
    ceoEmail: "",
    ceoPhone: "",

    ceoDocuments: [],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "company" | "ceo"
  ) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);

      setFormData((prev) => ({
        ...prev,

        companyDocuments:
          type === "company"
            ? files
            : prev.companyDocuments,

        ceoDocuments:
          type === "ceo"
            ? files
            : prev.ceoDocuments,
      }));
    }
  };

  const nextStep = () => {
    setStep(step + 1);
    console.log("STEP IS ", step);
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
    console.log("STEP IS ", step);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 4) return;

    console.log("Submitted Data:", formData);
    router.push("/company/dashboard");
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-6 transition-colors duration-300">

      <div className="w-full max-w-lg">

        {/* LOGO */}
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

        {/* PROGRESS */}
        <div className="flex justify-between mb-10 px-2">
          {[1, 2, 3, 4].map((s) => (
            <div key={s} className="flex flex-col items-center flex-1">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all
                ${
                  step === s
                    ? "bg-orange-500 border-orange-500 text-black"
                    : step > s
                    ? "bg-emerald-500 border-emerald-500 text-white"
                    : "border-border text-muted-foreground"
                }`}
              >
                {step > s ? (
                  <Check className="w-5 h-5" />
                ) : (
                  s
                )}
              </div>

              <p className="text-[11px] text-muted-foreground mt-2 text-center">
                {s === 1 && "Company"}
                {s === 2 && "Company Docs"}
                {s === 3 && "CEO Info"}
                {s === 4 && "CEO Docs"}
              </p>
            </div>
          ))}
        </div>

        {/* CARD — ONLY THIS LINE FIXED */}
        <div className="bg-card text-card-foreground border border-border rounded-3xl p-10">

          <form onSubmit={handleSubmit}>

            {/* STEP 1 */}
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
                      placeholder="Yaoundé, Cameroon"
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
                        placeholder="+237 6XX XXX XXX"
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
                        placeholder="info@company.com"
                        className="mt-2"
                        required
                      />
                    </div>

                  </div>
                </div>
              </div>
            )}

            {/* STEP 2 (UNCHANGED UI) */}
            {step === 2 && (
              <div>
                <h2 className="text-2xl font-semibold text-center mb-8">
                  Company Documents
                </h2>

                <div className="border-2 border-dashed border-border rounded-2xl p-10 text-center">

                  <Upload className="w-12 h-12 mx-auto text-muted-foreground mb-4" />

                  <p className="text-muted-foreground mb-5">
                    Upload company registration,
                    tax certificate, CAC, etc.
                  </p>

                  <input
                    type="file"
                    multiple
                    onChange={(e) => handleFileChange(e, "company")}
                    className="block w-full text-sm text-muted-foreground
                    file:mr-4 file:py-3 file:px-6 file:rounded-xl
                    file:border-0 file:text-sm file:font-medium
                    file:bg-orange-500 file:text-black
                    hover:file:bg-orange-600"
                  />

                  {formData.companyDocuments.length > 0 && (
                    <p className="mt-4 text-emerald-500 text-sm">
                      {formData.companyDocuments.length} file(s) selected
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <div>
                <h2 className="text-2xl font-semibold text-center mb-8">
                  CEO / Admin Information
                </h2>

                <div className="space-y-6">

                  <Input
                    name="ceoName"
                    value={formData.ceoName}
                    onChange={handleChange}
                    placeholder="John Doe"
                  />

                  <Input
                    name="ceoEmail"
                    value={formData.ceoEmail}
                    onChange={handleChange}
                    placeholder="ceo@company.com"
                  />

                  <Input
                    name="ceoPhone"
                    value={formData.ceoPhone}
                    onChange={handleChange}
                    placeholder="+237 6XX XXX XXX"
                  />

                </div>
              </div>
            )}

            {/* STEP 4 (UNCHANGED UI) */}
            {step === 4 && (
              <div>
                <h2 className="text-2xl font-semibold text-center mb-8">
                  CEO Documents
                </h2>

                <div className="border-2 border-dashed border-border rounded-2xl p-10 text-center">

                  <Upload className="w-12 h-12 mx-auto text-muted-foreground mb-4" />

                  <p className="text-muted-foreground mb-5">
                    Upload national ID and selfie
                    with ID card.
                  </p>

                  <input
                    type="file"
                    multiple
                    onChange={(e) => handleFileChange(e, "ceo")}
                    className="block w-full text-sm text-muted-foreground
                    file:mr-4 file:py-3 file:px-6 file:rounded-xl
                    file:border-0 file:text-sm file:font-medium
                    file:bg-orange-500 file:text-black
                    hover:file:bg-orange-600"
                  />

                  {formData.ceoDocuments.length > 0 && (
                    <p className="mt-4 text-emerald-500 text-sm">
                      {formData.ceoDocuments.length} file(s) selected
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* BUTTONS */}
            <div className="flex justify-between mt-10">

              {step > 1 ? (
                <Button type="button" variant="outline" onClick={prevStep}>
                  <ArrowLeft className="mr-2 w-4 h-4" />
                  Back
                </Button>
              ) : (
                <div />
              )}

              {step < 4 && (
                <Button type="button" onClick={nextStep} className="bg-orange-500 text-black">
                  Next
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              )}

              {step === 4 && (
                <Button type="submit" className="bg-emerald-600 text-white">
                  Submit Application
                </Button>
              )}

            </div>

          </form>
        </div>

        <p className="text-center mt-6 text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link href="/auth/login" className="text-orange-500 hover:underline">
            Sign in
          </Link>
        </p>

      </div>
    </div>
  );
}