"use client";
import { useAppDispatch, useAppSelector } from '../store';
import { toggleColor } from '../store/themeSlice';

const ThemeToggler = () => {
  const dispatch = useAppDispatch();
  const color = useAppSelector((state) => state.theme.color);

  return (
    <div
      className={`p-8 flex items-center justify-center ${color === 'gray' ? 'bg-gray-500' : 'bg-blue-500'}`}
    >
      <button
        onClick={() => dispatch(toggleColor())}
        className="px-4 py-2 font-bold text-white bg-black rounded"
      >
        Toggle Background Color
      </button>
    </div>
  );
};

export default ThemeToggler;