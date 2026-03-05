export const nameValidate = (val: string): string | undefined | null => {
  if (val.length === 0) {
    return "Require message.";
  } else {
    if (val.includes("@")) {
      return "You can only place the email in the email field above for further discussions.";
    }

    if (val.length >= 600) {
      return "Message is too long.";
    }
  }

  return null;
};

export const emailValidate = (val: string): string | undefined | null => {
  if (val.length <= 3) {
    return "Require email for further discussion if needed.";
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
    return "Require message.";
  } else {
    if (val.includes("@")) {
      return "You can only place the email in the email field above for further discussions.";
    }

    if (val.length >= 600) {
      return "Message is too long.";
    }
  }

  return null;
};
