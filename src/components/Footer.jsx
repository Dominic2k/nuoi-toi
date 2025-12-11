import React from "react";
import { DATA } from "../constants";

export default function Footer() {
    return (
        <footer className="bg-slate-50 py-12 text-center border-t border-slate-200">
            <p className="font-bold text-slate-800 text-lg">
                {DATA.profile.name}
            </p>
            <p className="text-slate-500 text-sm mt-2">
                Designed with 🧠 by Gemini AI & Coded by You
            </p>
        </footer>
    );
}
