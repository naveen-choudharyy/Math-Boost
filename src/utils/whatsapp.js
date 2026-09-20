import { teacherConfig } from "../config/teacher";

/**
 * Generates a direct WhatsApp click-to-chat URL with properly encoded pre-filled text.
 * 
 * @param {string} messageOrKey - Either a key matching teacherConfig.whatsappMessages or a direct text string.
 * @returns {string} The full WhatsApp URL formatted as https://wa.me/<NUMBER>?text=<ENCODED_TEXT>
 */
export function getWhatsAppLink(messageOrKey) {
  const number = teacherConfig.whatsappNumber || "YOUR_WHATSAPP_NUMBER";
  
  // Resolve pre-configured message template or use direct string
  let messageText = "";
  if (teacherConfig.whatsappMessages && teacherConfig.whatsappMessages[messageOrKey]) {
    messageText = teacherConfig.whatsappMessages[messageOrKey];
  } else if (typeof messageOrKey === "string" && messageOrKey.trim().length > 0) {
    messageText = messageOrKey;
  } else {
    messageText = teacherConfig.whatsappMessages.default || "Hi Naveen, I am interested in your Class 10 Maths program.";
  }

  // Remove non-numeric characters if a valid numeric phone is provided, else preserve placeholder
  const cleanNumber = number.replace(/[^0-9]/g, "");
  const targetNumber = cleanNumber.length >= 7 ? cleanNumber : number;

  return `https://wa.me/${targetNumber}?text=${encodeURIComponent(messageText)}`;
}

/**
 * Handle opening WhatsApp with optional analytics tracking
 */
export function handleWhatsAppClick(messageOrKey, eventName = "whatsapp_click", extraData = {}) {
  const url = getWhatsAppLink(messageOrKey);
  
  // Dispatch custom tracking event
  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent("app_analytics", {
        detail: {
          event: eventName,
          targetUrl: url,
          timestamp: new Date().toISOString(),
          ...extraData,
        },
      })
    );
  }

  // Open in new tab safely
  window.open(url, "_blank", "noopener,noreferrer");
}
