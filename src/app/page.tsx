'use client';
import Button from "@/components/button";
import CodeEditor from "@/components/code-editor";
import Modal from "@/components/modal";
import { checkTypeScriptChanges } from "@/utils";
import cleanString from "@/utils/cleanString";
import { useState } from "react";
import Loading from "../components/loading";

export default function Home() {
  const [prevCode, setPrevCode] = useState(`interface Person {
  name: string;
}`);
  const [currentCode, setCurrentCode] = useState(`interface Person {
  name: string;
}`);
const [typeCheckResult, setTypeCheckResult] = useState<string | null>(null);
const [isPending, setIsPending] = useState(false);
const [noBreakingChange, setNoBreakingChange] = useState(false);

const checkCodes = async () => {
  setIsPending(true);
  const r = await checkTypeScriptChanges(prevCode, currentCode);
  if (r.info) {
    setTypeCheckResult(r.info);
    setNoBreakingChange(false);
  } else {
    setNoBreakingChange(true);
  }
  setIsPending(false);
}

  return (
    <div className="flex flex-col w-full h-full">
      <div className="grid grid-cols-2 flex-1 flex-grow">
        <CodeEditor title="Your previous code" value={prevCode} onChange={(code) => setPrevCode(code)} disabled={isPending}/>
        <CodeEditor title="Your Current code" value={currentCode} onChange={(code) => setCurrentCode(code)} disabled={isPending}/>
      </div>
      <div className="w-full mt-4">
        <Button className="w-96 h-14" onClick={checkCodes}>
          {isPending ? (
            <Loading />
          ) : 'Check for any possible breaking change'}
        </Button>
      </div>
      {typeCheckResult && <Modal onClose={() => { setTypeCheckResult(null) }}>
      <p className="text-black">{cleanString(typeCheckResult)}</p>
    </Modal>}
    {noBreakingChange && <Modal onClose={() => { setNoBreakingChange(false) }}>
      <p className="text-black">The code is OK. No breaking changes detected.</p>
    </Modal>}
    </div>
  );
}
