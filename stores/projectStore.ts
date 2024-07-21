import { create } from 'zustand';

interface ProjectStore {
  isHovered: boolean | string;
  setIsHovered: (isHovered: boolean) => void;
  isClicked: boolean | string;
  setIsClicked: (isClicked: boolean) => void;
}

export const projectStore = create<ProjectStore>((set) => ({
  isHovered: false,
  setIsHovered: (isHovered: boolean | string) => set({ isHovered }),
  isClicked: false,
  setIsClicked: (isClicked: boolean | string) => set({ isClicked }),
}));
