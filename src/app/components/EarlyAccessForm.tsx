import { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export function EarlyAccessForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    project: "",
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<"success" | "error" | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    const submissionData = new FormData();
    submissionData.append("access_key", "7ba042d9-be41-4a9a-9335-321d01f3882d");
    submissionData.append("name", formData.name);
    submissionData.append("email", formData.email);
    submissionData.append("company", formData.company);
    submissionData.append("message", formData.project);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submissionData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("success");
        setFormData({
          name: "",
          email: "",
          company: "",
          project: "",
        });
      } else {
        setResult("error");
      }
    } catch (error) {
      setResult("error");
    }

    setLoading(false);
  };
return (
  <section className="relative py-28 px-6 bg-black">
    <div className="max-w-xl mx-auto">
      <div className="bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-500 rounded-3xl shadow-2xl px-8 py-14 md:px-12 md:py-16">
        
        <h2 className="text-4xl md:text-5xl font-bold text-black text-center">
          Get Early Access
        </h2>

        <p className="text-sm text-black/80 text-center mt-4 mb-10 max-w-md mx-auto leading-relaxed">
          Be the first to experience our upgraded platform. Contact us for early sign-up and more information.
        </p>

        {result === "success" ? (
          <div className="bg-black/10 border border-black/20 text-black text-center py-5 rounded-xl font-semibold">
            🎉 Thank you! We'll be in touch soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            
            <Input
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="bg-white border-0 text-black placeholder:text-gray-400 h-12 rounded-xl px-4 shadow-sm"
              placeholder="Your Name"
            />

            <Input
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="bg-white border-0 text-black placeholder:text-gray-400 h-12 rounded-xl px-4 shadow-sm"
              placeholder="Email Address"
            />

            <Input
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="bg-white border-0 text-black placeholder:text-gray-400 h-12 rounded-xl px-4 shadow-sm"
              placeholder="Company / Production (Optional)"
            />

            <Textarea
              name="project"
              value={formData.project}
              onChange={handleChange}
              className="bg-white border-0 text-black placeholder:text-gray-400 min-h-32 rounded-xl px-4 py-3 resize-none shadow-sm"
              placeholder="Tell us about your project or what you're interested in"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white font-semibold py-3.5 rounded-xl hover:bg-gray-900 active:scale-[0.98] transition-all duration-150 disabled:opacity-60 disabled:cursor-not-allowed mt-2"
            >
              {loading ? "Submitting..." : "Request Early Access"}
            </button>
          </form>
        )}

        {result === "error" && (
          <p className="text-red-700 text-center mt-6 font-medium">
            ❌ Something went wrong. Please try again.
          </p>
        )}
      </div>
    </div>
  </section>
);
}