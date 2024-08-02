import { create } from 'zustand';

interface ProjectStore {
  isHovered: boolean | string;
  setIsHovered: (isHovered: string) => void;
  isClicked: boolean | string;
  setIsClicked: (isPlapamco: string) => void;
  isPlapamco: boolean | string;
  setIsPlapamco: (isPlapamco: boolean) => void;
}

export const projectStore = create<ProjectStore>((set) => ({
  isHovered: '',
  setIsHovered: (isHovered: string) => set({ isHovered }),
  isClicked: '',
  setIsClicked: (isClicked: string) => set({ isClicked }),
  isPlapamco: false,
  setIsPlapamco: (isPlapamco: boolean) => set({ isPlapamco }),
}));
