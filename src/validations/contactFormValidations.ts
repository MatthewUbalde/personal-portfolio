export const nameValidate = (val: string): string | undefined | null => {
  if (val.length === 0) {
    return "Please write down your message.";
  } else {
    if (val.includes("@")) {
      return "Please place your email in the email field below for further discussions.";
    }

    if (val.length >= 600) {
      return "Message is too long.";
    }
  }

  return null;
};

export const emailValidate = (val: string): string | undefined | null => {
  if (val.length === 0) {
    return "Please write down your email for further discussion if needed.";
  } else {
    if (
      val[0] === "." ||
      !val.includes("@") ||
      !val.includes(".", val.indexOf("@"))
    ) {
      return "Invalid email format.";
    }

    if (val.length >= 320) {
      return "Email is too long.";
    }
  }

  return null;
};

export const messageValidate = (val: string): string | undefined | null => {
  if (val.length === 0) {
    return "Please write down message.";
  } else {
    if (val.includes("@")) {
      return "Please place your email in the email field above for further discussions.";
    }

    if (val.length >= 600) {
      return "Message is too long.";
    }
  }

  return null;
};
