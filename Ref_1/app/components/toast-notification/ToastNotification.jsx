"use client";
import React, { useEffect, useRef } from "react";
import toast from "react-hot-toast";

const ToastNotification = ({ type, message, id, options = {} }) => {
  const hasShown = useRef(false);
  useEffect(() => {
    if (message && !hasShown.current) {
      hasShown.current = true; // Prevent multiple toasts
      const toastOptions = id ? { ...options, id } : options;
      switch (type) {
        case "success":
          toast.success(message, options);
          break;
        case "error":
          toast.error(message, options);
          break;
        case "loading":
          toast.loading(message, options);
          break;
        case "custom":
          toast(message, options); // Custom toast
          break;
        default:
          console.warn(`Unknown toast type: ${type}`);
      }
    }
  }, [type, message, options]);

  return null; // No UI to render, only side effects.
};

export default ToastNotification;
