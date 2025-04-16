'use client'
import React, { useState, useEffect, useRef } from 'react';
import { useCyberpunk } from '../../context/CyberpunkContext';
import styles from './cyberpunkAboutTerminal.module.css';

interface TerminalCommand {
  command: string;
  output: string;
  delay: number;
}

const CyberpunkAboutTerminal: React.FC = () => {
  const { cyberpunkMode } = useCyberpunk();
  const [displayedCommands, setDisplayedCommands] = useState<TerminalCommand[]>([]);
  const [currentCommandIndex, setCurrentCommandIndex] = useState<number>(0);
  const [typedText, setTypedText] = useState<string>('');
  const [isTypingCommand, setIsTypingCommand] = useState<boolean>(false);
  const [isTypingOutput, setIsTypingOutput] = useState<boolean>(false);
  const typingRef = useRef<NodeJS.Timeout | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const terminalCommands: TerminalCommand[] = [
    {
      command: 'cat intro.txt',
      output: "Hey there 👋 I'm <span class=\"" + styles.highlight + "\">Arun</span>, a <span class=\"" + styles.highlight + "\">Full-stack AI Engineer</span> with over 5 years of experience building robust, scalable applications across the enterprise ecosystem. I specialize in creating impactful user experiences using the <span class=\"" + styles.highlight + "\">MERN stack</span>, and I'm currently diving deep into the world of <span class=\"" + styles.highlight + "\">AI, microservices, and cloud-native architectures</span> at <span class=\"" + styles.highlight + "\">Telus Digital</span>.",
      delay: 1000
    },
    {
      command: 'cat currentwork.txt',
      output: "Right now, I'm working on integrating <span class=\"" + styles.highlight + "\">gRPC</span> and <span class=\"" + styles.highlight + "\">GCP Pub/Sub</span> in our production-grade micro frontends to enable high-performance, event-driven systems. My work often bridges the gap between frontend finesse and backend resilience—building <span class=\"" + styles.highlight + "\">micro-frontend starter kits</span>, designing infra flows to fetch secrets securely on <span class=\"" + styles.highlight + "\">GCP</span>, and rolling out reusable component libraries used by multiple teams.",
      delay: 1000
    },
    {
      command: 'cat ai_projects.txt',
      output: "In the AI space, I tinker with <span class=\"" + styles.highlight + "\">MCP servers</span>, <span class=\"" + styles.highlight + "\">prompt engineering</span>, and have actively contributed to building <span class=\"" + styles.highlight + "\">AI-powered tools</span> that enhance productivity across our digital platform. My team snagged <span class=\"" + styles.highlight + "\">3rd place</span> in a <span class=\"" + styles.highlight + "\">Telus-wide AI Hackathon</span>, which was an amazing ride!",
      delay: 1000
    },
    {
      command: 'cat personal.txt',
      output: "When I'm not coding, you'll usually find me jamming on my guitar, gaming, or nerding out over new tech. I love pushing the limits of what's possible—whether that's building smarter systems, exploring new dev workflows, or helping fellow engineers level up.",
      delay: 1000
    },
    {
      command: 'cat connect.txt',
      output: "If you're into <span class=\"" + styles.highlight + "\">clean code</span>, cool projects, and conversations about tech (or music and Anime!), we'll probably get along just fine :)",
      delay: 1000
    }
  ];

  // Type out the command
  const typeCommand = (command: string, callback: () => void) => {
    setIsTypingCommand(true);
    setTypedText('');
    
    let i = 0;
    
    if (typingRef.current) {
      clearInterval(typingRef.current);
    }
    
    typingRef.current = setInterval(() => {
      if (i < command.length) {
        setTypedText(prev => prev + command.charAt(i));
        i++;
      } else {
        setIsTypingCommand(false);
        if (typingRef.current) {
          clearInterval(typingRef.current);
        }
        callback();
      }
    }, 30);
  };

  const processNextCommand = () => {
    if (currentCommandIndex < terminalCommands.length) {
      const currentCommand = terminalCommands[currentCommandIndex];
      
      typeCommand(currentCommand.command, () => {
        setDisplayedCommands(prev => [
          ...prev, 
          { 
            command: currentCommand.command, 
            output: '', 
            delay: currentCommand.delay 
          }
        ]);
        
        setTimeout(() => {
          setIsTypingOutput(true);
          let outputIndex = 0;
          
          if (typingRef.current) {
            clearInterval(typingRef.current);
          }
          if (currentCommand.output.length > 0) {
            setDisplayedCommands(prev => {
              const updated = [...prev];
              const lastCommand = updated[updated.length - 1];
              updated[updated.length - 1] = {
                ...lastCommand,
                output: currentCommand.output.charAt(0)
              };
              return updated;
            });
            outputIndex = 0;
          }
          
          typingRef.current = setInterval(() => {
            if (outputIndex < currentCommand.output.length) {
              setDisplayedCommands(prev => {
                const updated = [...prev];
                const lastCommand = updated[updated.length - 1];
                updated[updated.length - 1] = {
                  ...lastCommand,
                  output: lastCommand.output + currentCommand.output.charAt(outputIndex)
                };
                return updated;
              });
              outputIndex++;
            } else {
              setIsTypingOutput(false);
              if (typingRef.current) {
                clearInterval(typingRef.current);
              }
              
              setTimeout(() => {
                setCurrentCommandIndex(prev => prev + 1);
                setTypedText('');
              }, currentCommand.delay);
            }
          }, 2);
        }, 300);
      });
    }
  };

  useEffect(() => {
    if (!cyberpunkMode) return;
    
    processNextCommand();
    
    return () => {
      if (typingRef.current) {
        clearInterval(typingRef.current);
      }
    };
  }, [cyberpunkMode, currentCommandIndex]);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = contentRef.current.scrollHeight;
    }
  }, [displayedCommands, typedText]);

  if (!cyberpunkMode) return null;

  return (
    <div className={styles.terminalContainer}>
      <div className={styles.scanline}></div>
      <div className={styles.terminalHeader}>
        <h3 className={styles.terminalTitle}>
          <span className={styles.glitchText} data-text="ARUN_OS v1.0">ARUN_OS v1.0</span>
        </h3>
        {/* <div className={styles.terminalControls}>
          <div className={styles.terminalControl} style={{ backgroundColor: 'rgba(255, 50, 50, 0.5)' }}></div>
          <div className={styles.terminalControl} style={{ backgroundColor: 'rgba(255, 210, 50, 0.5)' }}></div>
          <div className={styles.terminalControl} style={{ backgroundColor: 'rgba(50, 255, 50, 0.5)' }}></div>
        </div> */}
      </div>
      
      <div className={styles.terminalContent} ref={contentRef}>
        {displayedCommands.map((item, index) => (
          <div key={index}>
            <div className={styles.commandPrompt}>
              <span className={styles.promptSymbol}>root@arun:~$</span>
              <span className={styles.command}> {item.command}</span>
            </div>
            
            <div 
              className={styles.output}
              dangerouslySetInnerHTML={{ __html: item.output }}
            />
          </div>
        ))}
        
        {isTypingCommand && (
          <div className={styles.commandPrompt}>
            <span className={styles.promptSymbol}>root@arun:~$</span>
            <span className={styles.command}> {typedText}</span>
            <span className={styles.blinkingCursor}></span>
          </div>
        )}
        
        {!isTypingCommand && !isTypingOutput && currentCommandIndex >= terminalCommands.length && (
          <div className={styles.commandPrompt}>
            <span className={styles.promptSymbol}>root@arun:~$</span>
            <span className={styles.blinkingCursor}></span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CyberpunkAboutTerminal;
