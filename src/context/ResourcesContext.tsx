'use client'
import React, { createContext, useContext, useState, useEffect } from 'react';

interface ResourcesContextType {
  resourcesLoaded: boolean;
}

const ResourcesContext = createContext<ResourcesContextType | undefined>(undefined);

export const ResourcesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [resourcesLoaded, setResourcesLoaded] = useState<boolean>(false);
  const [videosToLoad] = useState<string[]>([
    '/toggleloader.mp4',
    '/cyberpunkhero.mp4'
  ]);
  const [audioToLoad] = useState<string[]>([
    '/cyberpunkmusic.mp3'
  ]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loadedResources, setLoadedResources] = useState<Set<string>>(new Set());

  useEffect(() => {
    const totalResources = videosToLoad.length + audioToLoad.length;
    
    const markResourceLoaded = (resource: string) => {
      setLoadedResources(prev => {
        const newSet = new Set(prev);
        newSet.add(resource);
        
        // Check if all resources are loaded
        if (newSet.size === totalResources) {
          console.log('All resources loaded');
          setResourcesLoaded(true);
        }
        
        return newSet;
      });
    };

    videosToLoad.forEach(videoSrc => {
      const video = document.createElement('video');
      video.preload = 'auto';
      
      video.onloadeddata = () => {
        console.log(`Video loaded: ${videoSrc}`);
        markResourceLoaded(videoSrc);
      };
      
      video.onerror = () => {
        console.error(`Error loading video: ${videoSrc}`);
        markResourceLoaded(videoSrc);
      };
      
      video.src = videoSrc;
    });

    audioToLoad.forEach(audioSrc => {
      const audio = new Audio();
      
      audio.oncanplaythrough = () => {
        console.log(`Audio loaded: ${audioSrc}`);
        markResourceLoaded(audioSrc);
      };
      
      audio.onerror = () => {
        console.error(`Error loading audio: ${audioSrc}`);
        markResourceLoaded(audioSrc);
      };
      
      audio.src = audioSrc;
    });

    const fallbackTimer = setTimeout(() => {
      if (!resourcesLoaded) {
        console.log('Fallback timer: marking all resources as loaded');
        setResourcesLoaded(true);
      }
    }, 5000);

    return () => {
      clearTimeout(fallbackTimer);
    };
  }, [videosToLoad, audioToLoad, resourcesLoaded]);

  return (
    <ResourcesContext.Provider value={{ resourcesLoaded }}>
      {children}
    </ResourcesContext.Provider>
  );
};

export const useResources = (): ResourcesContextType => {
  const context = useContext(ResourcesContext);
  if (context === undefined) {
    throw new Error('useResources must be used within a ResourcesProvider');
  }
  return context;
};
