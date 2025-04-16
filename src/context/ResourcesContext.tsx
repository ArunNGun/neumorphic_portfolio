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
  const [_loadedResources, _setLoadedResources] = useState<Set<string>>(new Set());

  useEffect(() => {
    const totalResources = videosToLoad.length + audioToLoad.length;
    let loadedCount = 0;
    
    const markResourceLoaded = () => {
      loadedCount++;
      if (loadedCount === totalResources) {
        setResourcesLoaded(true);
      }
    };

    videosToLoad.forEach(videoSrc => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = videoSrc;
      link.as = 'video';
      document.head.appendChild(link);
      
      const video = document.createElement('video');
      video.preload = 'auto';
      video.muted = true;
      video.playsInline = true;
      
      video.addEventListener('loadeddata', () => {
        markResourceLoaded();
      }, { passive: true });
      
      video.addEventListener('error', () => {
        markResourceLoaded();
      }, { passive: true });
      
      video.src = videoSrc;
      video.load();
    });

    audioToLoad.forEach(audioSrc => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = audioSrc;
      link.as = 'audio';
      document.head.appendChild(link);
      
      const audio = new Audio();
      
      audio.addEventListener('canplaythrough', () => {
        markResourceLoaded();
      }, { passive: true });
      
      audio.addEventListener('error', () => {
        markResourceLoaded();
      }, { passive: true });
      
      audio.src = audioSrc;
      audio.load();
    });

    const fallbackTimer = setTimeout(() => {
      if (!resourcesLoaded) {
        setResourcesLoaded(true);
      }
    }, 3000);

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
