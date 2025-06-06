import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Facebook, Linkedin, Instagram } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const LeadForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [industry, setIndustry] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const industries = [
    "E-commerce",
    "Ed-Tech",
    "Hospitality",
    "Medicine",
    "Logistic",
    "Insurance",
    "Real Estate"
  ];

    const getIndustryPDF = (industry: string) => {
    // Map industries to their corresponding PDF files
    const pdfMap: { [key: string]: string } = {
      "E-commerce": "/pdfs/Ecommerce converseai.pdf",
      "Ed-Tech": "/pdfs/Edtech converseai.pdf",
      "Hospitality": "/pdfs/hotel industry converseai.pdf",
      "Medicine": "/pdfs/Medical industry converseai.pdf",
      "Logistic": "/pdfs/Logistic business converseai.pdf",
      "Insurance": "/pdfs/Insurance company converseai.pdf",
      "Real Estate": "/pdfs/Real Estate converseai.pdf" // Note: This file doesn't exist yet
    };

    return pdfMap[industry] || "/pdfs/Ecommerce converseai.pdf"; // Default to E-commerce guide if industry not found
  };

  const handleDownloadPDF = (industry: string) => {
    const pdfPath = getIndustryPDF(industry);
    const fileName = pdfPath.split('/').pop() || 'guide.pdf';

    // Create a link element
    const link = document.createElement('a');
    // Set the href to the PDF file path
    link.href = pdfPath;
    // Set the download attribute
    link.download = fileName;
    // Append to the document
    document.body.appendChild(link);
    // Trigger the click event
    link.click();
    // Clean up
    document.body.removeChild(link);
  };

  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxNl2P3y8wW9WCmKXTGxhTZDFYbrgu6goFoCOnFyBc2y0eYDKKHcth2nrbbgwlt65c/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            email,
            industry
          }),
        }
      );

      toast.success("Success! Your data has been submitted.");
      
      // Trigger PDF download after successful submission with the selected industry
      handleDownloadPDF(industry);
      // Reset form
      setFirstName("");
      setLastName("");
      setEmail("");
      setIndustry("");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full md:w-96 bg-white rounded-lg p-6 shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="w-full">
            <Input
              placeholder="First name..."
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              className="rounded-md border border-gray-300"
            />
          </div>
          <div className="w-full">
            <Input
              placeholder="Last name..."
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              className="rounded-md border border-gray-300"
            />
          </div>
        </div>

        <div>
          <Input
            type="email"
            placeholder="Email address..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="rounded-md border border-gray-300"
          />
        </div>

        <div>
          <Select value={industry} onValueChange={setIndustry} required>
            <SelectTrigger className="w-full rounded-md border border-gray-300">
              <SelectValue placeholder="Select industry..." />
            </SelectTrigger>
            <SelectContent>
              {industries.map((ind) => (
                <SelectItem key={ind} value={ind}>
                  {ind}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-12 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md transition-colors"
        >
          {isSubmitting ? "Processing..." : "Download Now"}
        </Button>
      </form>

      {/* Social Media Links */}
      <div className="flex justify-center mt-6 space-x-4">
        <a
          href="https://www.facebook.com/YOUR_FACEBOOK_PAGE"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-500 transition-colors"
        >
          <Facebook size={20} />
        </a>
        <a
          href="https://www.linkedin.com/company/theconverseai/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-500 transition-colors"
        >
          <Linkedin size={20} />
        </a>
        <a
          href="https://www.instagram.com/theconverseai?igsh=MXc4M2o2MG1namR2eA=="
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-500 transition-colors"
        >
          <Instagram size={20} />
        </a>
      </div>
    </div>
  );
};

export default LeadForm;
