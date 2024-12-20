'use client';
import Button from "@/components/button";
import CodeEditor from "@/components/code-editor";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/result');
  }

  return (
    <div className="flex flex-col w-full h-full">
      <div className="grid grid-cols-2 flex-1 flex-grow">
        <CodeEditor title="Your previous version of code" />
        <CodeEditor title="Your Current Version ..." />
      </div>
      <div className="w-full mt-4">
        <Button onClick={handleButtonClick}>
          Check for any possible breaking change
        </Button>
      </div>
    </div>
  );
}
