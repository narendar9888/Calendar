import { useState, useEffect } from "react";

export default function useLocalStorage(key, initialValue) {
    const readValue = () => {
        try {
            const item = localStorage.getItem(key);

            if (item !== null) {
                return JSON.parse(item);
            }

            return initialValue;
        } catch (error) {
            console.error("Error reading localStorage:", error);
            return initialValue;
        }
    };
}