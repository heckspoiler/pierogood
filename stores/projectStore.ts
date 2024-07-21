import { create } from 'zustand';

interface ProjectStore {
  isHovered: boolean | string;
  setIsHovered: (isHovered: string) => void;
  isClicked: boolean | string;
  setIsClicked: (isClicked: string) => void;
}

export const projectStore = create<ProjectStore>((set) => ({
  isHovered: '',
  setIsHovered: (isHovered: string) => set({ isHovered }),
  isClicked: '',
  setIsClicked: (isClicked: string) => set({ isClicked }),
}));
