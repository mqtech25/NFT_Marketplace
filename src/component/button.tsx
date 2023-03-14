interface buttonInterface {
  content: string;
  theme: string;
  type: string;
}
export default function Button(prop: buttonInterface) {
  return (
    <button
      className={`${
        prop.type == "outline"
          ? prop.theme
            ? `border border-${prop.theme} text-${prop.theme} hover:text-secondary-color hover:`
            : ""
          : prop.theme
          ? `bg-${prop.theme}`
          : "bg-primary-color text-secondary-color"
      } hover:bg-primary-hoverLinearColor transition rounded-md px-2 2xl:px-3  py-2  font-[600] hidden xl:block text-sm 2xl:text-md`}
    >
      {prop.content}
    </button>
  );
}
