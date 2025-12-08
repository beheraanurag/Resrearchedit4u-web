import React from "react";
import ser from "../content/demo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Quickform = () => {
  return (
    <section className="px-5 py-8 bg-white text-center">
      <h2 className="text-[2.2rem] font-bold mb-5 text-[#0B2662] font-serif">Why Choose Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[1400px] mx-auto px-4">
        {ser.map((serv, index) => {
          const Icon = serv.icon;
          return (
            <Card key={index} className="bg-white rounded-2xl p-8 shadow-md transition-all text-left border-none relative overflow-hidden z-[1] hover:before:w-full hover:cursor-pointer">
              <div className="text-[58px] text-[#0056ff] mb-4.5 bg-[#e0ecff] p-4 rounded-xl inline-block">
                <Icon />
              </div>
              <CardHeader className="p-0">
                <CardTitle className="text-[22px] font-bold mb-2.5 text-gray-900">{serv.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <h4 className="text-lg font-semibold text-gray-700 mb-3">{serv.subtitle}</h4>
                <p className="text-lg text-gray-600 leading-6">{serv.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default Quickform;
