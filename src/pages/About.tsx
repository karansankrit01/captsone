import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Handshake } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-50 to-sahaara-earth flex flex-col items-center justify-center py-16 px-4">
      {/* Hero Section */}
      <div className="flex flex-col items-center mb-10 animate-slideIn">
        <div className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-full p-6 shadow-lg mb-4">
          <Handshake className="h-16 w-16 text-white" />
        </div>
        <h1 className="text-5xl font-extrabold text-blue-700 mb-2 drop-shadow-lg animate-pulse">About Sahaara Connect</h1>
        <p className="text-lg text-blue-900 max-w-2xl text-center mb-2">Building community, one small act at a time.</p>
      </div>
      <Card className="max-w-2xl w-full text-center shadow-2xl border-2 border-blue-200 bg-white/80 backdrop-blur-md">
        <CardHeader>
          <CardTitle className="text-3xl font-bold mb-2 text-blue-800">Our Mission</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg mb-6 text-blue-900">
            <strong>Sahaara Connect</strong> is a community-driven platform designed to bring neighbors together for small acts of kindness and support. Whether you need help with a task or want to offer your skills, Sahaara Connect makes it easy to build trust and meaningful connections in your local area.
          </p>
          <ul className="list-disc list-inside text-left mb-6 mx-auto max-w-md text-blue-800">
            <li>Post or browse tasks in your neighborhood</li>
            <li>Connect safely and securely with others</li>
            <li>Build lasting relationships through small acts of kindness</li>
          </ul>
          <p className="text-muted-foreground text-sm">
            Sahaara Connect is built with love for communities everywhere. Join us and make a difference, one small act at a time!
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default About; 