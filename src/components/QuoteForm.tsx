import React, { useState } from 'react';
import { Send, Upload } from 'lucide-react';

const QuoteForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/maqdrbdy", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSubmitting(false);
        setIsSubmitted(true);
        form.reset();
      } else {
        setIsSubmitting(false);
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      setIsSubmitting(false);
      alert("Error submitting form.");
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-700"></div>
      <h3 className="text-2xl font-bold text-gray-900 mb-2">Get a Free Quote</h3>
      <p className="text-gray-500 mb-6">Fill out the form below and we'll get back to you shortly.</p>
      
      {isSubmitted ? (
        <div className="bg-green-50 text-green-800 p-8 rounded-xl flex flex-col items-center justify-center text-center h-80 animate-in fade-in zoom-in duration-300">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <Send className="w-8 h-8 text-green-600" />
          </div>
          <p className="font-bold text-xl mb-2">Thank You!</p>
          <p className="text-green-700">Your details have been submitted successfully. Our team will contact you soon.</p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="mt-6 text-sm font-semibold text-green-700 hover:text-green-900 underline"
          >
            Send another quote
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5" encType="multipart/form-data">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all outline-none bg-gray-50 focus:bg-white"
              placeholder="John Doe"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email ID</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all outline-none bg-gray-50 focus:bg-white"
              placeholder="john@example.com"
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all outline-none bg-gray-50 focus:bg-white"
              placeholder="+91 80199 61896"
            />
          </div>

          <div>
            <label htmlFor="upload" className="block text-sm font-medium text-gray-700 mb-1">Upload Requirements (Optional)</label>
            <div className="relative">
              <input
                type="file"
                id="upload"
                name="upload"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all outline-none bg-gray-50 focus:bg-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-red-50 file:text-red-700 hover:file:bg-red-100"
              />
              <div className="absolute right-3 top-3 pointer-events-none text-gray-400">
                <Upload className="w-5 h-5" />
              </div>
            </div>
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-red-500/30 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-4 transform active:scale-[0.98]"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Details'}
            {!isSubmitting && <Send className="w-4 h-4" />}
          </button>
        </form>
      )}
    </div>
  );
};

export default QuoteForm;
