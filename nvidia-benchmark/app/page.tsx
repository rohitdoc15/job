"use client";
import { LoginForm } from "@/components/login-form";
import { Card, CardContent } from "@/components/ui/card";
import { Typewriter } from "react-simple-typewriter";

export default function Page() {




  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm font-mono ">
        <LoginForm />
        <Card>
          <CardContent>
            <Typewriter words={["This is a sample text that appears like typing."] }
            loop = {1}
            typeSpeed={50}
            deleteSpeed={0}
            cursorStyle= {"|"}
            />
           
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 