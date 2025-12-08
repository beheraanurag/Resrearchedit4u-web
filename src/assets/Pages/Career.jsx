import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Career() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setTimeout(() => { setEmail(''); setSubmitted(false); }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-5 py-10 bg-gray-50">
      <Card className="max-w-md w-full">
        <CardHeader>
          <CardTitle className="text-5xl font-bold mb-3 text-gray-800">Opening Soon</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-gray-600 mb-5">
            Our careers page is being prepared. Leave your email to get notified.
          </p>

          <form onSubmit={handleSubmit} className="flex gap-5 flex-wrap justify-center">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-[250px] px-3.5 py-2.5 border border-gray-300 rounded-md text-sm"
            />
            <Button type="submit" className="px-4.5 py-2.5 bg-[#4f46e5] text-white text-lg border-none rounded-md cursor-pointer transition-colors hover:bg-[#4338ca]">
              {submitted ? 'Thanks!' : 'Notify Me'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
