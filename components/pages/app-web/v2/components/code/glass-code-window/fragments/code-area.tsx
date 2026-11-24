/**
 * @file code-area.tsx
 * @description Fragmento del área de código con números de línea.
 */

import { ScrollArea } from "@/components/ui/scroll-area";

interface CodeAreaProps {
  readonly code: string;
  readonly codeScrollAreaRef: React.RefObject<HTMLDivElement | null>;
  readonly lineNumbersRef: React.RefObject<HTMLDivElement | null>;
  readonly lineNumbersContentRef: React.RefObject<HTMLDivElement | null>;
  readonly lineNumbers: number[];
}

export const CodeArea: React.FC<CodeAreaProps> = ({
  code,
  codeScrollAreaRef,
  lineNumbersRef,
  lineNumbersContentRef,
  lineNumbers,
}) => {
  return (
    <div className="relative flex-1 flex overflow-hidden">
      {/* Números de línea */}
      <div
        ref={lineNumbersRef}
        className="shrink-0 w-12 bg-foreground/5 border-r border-foreground/10 overflow-hidden relative"
      >
        <div
          ref={lineNumbersContentRef}
          className="py-4 px-2 text-right text-[10px] text-muted-foreground font-mono select-none pointer-events-none"
        >
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
          <pre className="text-foreground text-[12px] leading-6 whitespace-pre-wrap wrap-break-word m-0">
            <code>{code}</code>
          </pre>
        </div>
      </ScrollArea>
    </div>
  );
};
