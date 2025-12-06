/**
 * @file code-area.tsx
 * @description Fragmento del área de código con números de línea.
 */

import { ScrollArea } from "@/components/ui/scroll-area";

interface CodeAreaProps {
  readonly code: string;
  readonly codeScrollAreaRef: React.RefObject<HTMLDivElement | null>;
  readonly lineNumbersRef: React.RefObject<HTMLDivElement | null>;
  readonly lineNumbers: number[];
}

export const CodeArea: React.FC<CodeAreaProps> = ({
  code,
  codeScrollAreaRef,
  lineNumbersRef,
  lineNumbers,
}) => {
  return (
    <div className="relative flex-1 flex overflow-hidden bg-[#1e1e1e]">
      {/* Números de línea */}
      <div
        ref={lineNumbersRef}
        className="shrink-0 w-12 bg-[#252526] border-r border-[#3e3e42] overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:hidden"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <div className="py-4 px-2 text-right text-xs text-[#858585] font-mono select-none pointer-events-none">
          {lineNumbers.map((num) => (
            <div key={num} className="leading-6">
              {num}
            </div>
          ))}
        </div>
      </div>

      {/* Área de código */}
      <ScrollArea ref={codeScrollAreaRef} className="flex-1">
        <div className="py-4 px-4">
          <pre className="text-[#d4d4d4] text-sm leading-6 whitespace-pre-wrap wrap-break-word m-0">
            <code>{code}</code>
          </pre>
        </div>
      </ScrollArea>
    </div>
  );
};
