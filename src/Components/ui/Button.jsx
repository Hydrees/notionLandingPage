export default function Button({text, variant = "filled"}) {
    const base = "px-5 py-3 rounded-md font-semibold text-sm";
    const styles = {
        filled: "bg-blue-500 text-white hover:bg-blue-800",
        outline: "bg-blue-100 border border-none text-blue-800 hover:bg-blue-300",
    };
    return <button className={`${base} ${styles[variant]}`}>{text}</button>;
}