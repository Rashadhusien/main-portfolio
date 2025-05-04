"use client";
import { useEffect, useState } from "react";
import { AnimatedSpan, Terminal, TypingAnimation } from "./magicui/terminal";

export function TerminalDemo() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // ensures this runs only on client
  }, []);

  if (!isClient) return null;

  return (
    <Terminal>
      <TypingAnimation>&gt; npx create-dev --name rashad</TypingAnimation>

      <AnimatedSpan delay={1500} className={` text-green-500`}>
        <span>✔ Booting developer environment...</span>
      </AnimatedSpan>

      <AnimatedSpan delay={2000} className="text-green-500">
        <span>✔ Found passion for front-end development.</span>
      </AnimatedSpan>

      <AnimatedSpan delay={2500} className="text-green-500">
        <span>✔ Installing HTML, CSS, JavaScript...</span>
      </AnimatedSpan>

      <AnimatedSpan delay={3000} className="text-green-500">
        <span>✔ Frameworks loaded: React, Next.js, Tailwind CSS.</span>
      </AnimatedSpan>

      <AnimatedSpan delay={3500} className="text-green-500">
        <span>✔ Skills verified: Responsive Design, API Integration.</span>
      </AnimatedSpan>

      <AnimatedSpan delay={4000} className="text-green-500">
        <span>✔ Deployed projects to GitHub, Vercel, Netlify.</span>
      </AnimatedSpan>

      <AnimatedSpan delay={4500} className="text-green-500">
        <span>✔ Passion module: activated 🚀</span>
      </AnimatedSpan>

      <AnimatedSpan delay={5000} className="text-green-500">
        <span>✔ Connected to Firebase, MongoDB, and Cloudinary.</span>
      </AnimatedSpan>

      <AnimatedSpan delay={5500} className="text-blue-500">
        <span>ℹ Continuous learning in progress...</span>
      </AnimatedSpan>

      <TypingAnimation delay={6700} className="text-muted-foreground">
        Let’s turn ideas into web experiences ✨
      </TypingAnimation>
    </Terminal>
  );
}
